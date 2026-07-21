import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/firebase/config";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { Resend } from "resend";

const WINDOW_MS = 60_000; // 1 minute
const MAX_REQUESTS = 10;

// Where leads get forwarded, and what address they come from.
// LEAD_FROM_EMAIL must be on a domain verified in Resend. Until flowscale.ai
// is verified there, Resend's shared "onboarding@resend.dev" sender works.
const LEAD_TO_EMAIL = process.env.LEAD_TO_EMAIL ?? "aman@flowscale.ai";
const LEAD_FROM_EMAIL =
  process.env.LEAD_FROM_EMAIL ?? "FlowScale Leads <onboarding@resend.dev>";

// ip -> list of request timestamps within the current window
const rateLimitMap = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = (rateLimitMap.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  if (timestamps.length >= MAX_REQUESTS) return true;
  timestamps.push(now);
  rateLimitMap.set(ip, timestamps);
  return false;
}

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

const VALID_INTERESTS = [
  "Creative Production",
  "AI Solutions",
  "Both",
  "Not sure yet",
];

type Lead = {
  name: string;
  email: string;
  company: string | null;
  message: string;
  interest: string;
};

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

// Forward the lead to the inbox. Best-effort: returns false instead of throwing
// so a failure here never blocks the Firestore save (and vice versa).
async function forwardLeadEmail(lead: Lead): Promise<boolean> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.warn("[contact] RESEND_API_KEY not set — skipping email forward");
    return false;
  }

  try {
    const resend = new Resend(apiKey);
    const company = lead.company || "Not provided";
    const rows: [string, string][] = [
      ["Name", lead.name],
      ["Email", lead.email],
      ["Company", company],
      ["Interested in", lead.interest],
    ];

    const html = `
      <div style="font-family: -apple-system, Segoe UI, Roboto, sans-serif; color: #18181b;">
        <h2 style="margin: 0 0 16px;">New enquiry via flowscale.ai</h2>
        <table style="border-collapse: collapse; margin-bottom: 16px;">
          ${rows
            .map(
              ([label, value]) =>
                `<tr>
                   <td style="padding: 4px 16px 4px 0; color: #71717a; vertical-align: top;">${label}</td>
                   <td style="padding: 4px 0; font-weight: 600;">${escapeHtml(value)}</td>
                 </tr>`
            )
            .join("")}
        </table>
        <div style="padding: 16px; background: #f4f4f5; border-radius: 8px;">
          <div style="color: #71717a; font-size: 12px; margin-bottom: 6px;">What they're working on</div>
          <div style="white-space: pre-wrap;">${escapeHtml(lead.message)}</div>
        </div>
      </div>`;

    const text = [
      "New enquiry via flowscale.ai",
      "",
      `Name: ${lead.name}`,
      `Email: ${lead.email}`,
      `Company: ${company}`,
      `Interested in: ${lead.interest}`,
      "",
      "What they're working on:",
      lead.message,
    ].join("\n");

    const { error } = await resend.emails.send({
      from: LEAD_FROM_EMAIL,
      to: LEAD_TO_EMAIL,
      replyTo: lead.email,
      subject: `New lead: ${lead.name}${lead.company ? ` (${lead.company})` : ""} — ${lead.interest}`,
      html,
      text,
    });

    if (error) {
      console.error("[contact] resend error", error);
      return false;
    }
    return true;
  } catch (err) {
    console.error("[contact] email forward failed", err);
    return false;
  }
}

async function saveLead(lead: Lead): Promise<boolean> {
  try {
    await addDoc(collection(db, "leads"), {
      ...lead,
      createdAt: serverTimestamp(),
    });
    return true;
  } catch (err) {
    console.error("[contact] firestore write failed", err);
    return false;
  }
}

export async function OPTIONS() {
  return new NextResponse(null, { status: 204, headers: CORS_HEADERS });
}

export async function POST(req: NextRequest) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0].trim() ??
    req.headers.get("x-real-ip") ??
    "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many requests. Please wait before submitting again." },
      { status: 429, headers: CORS_HEADERS }
    );
  }

  try {
    const body = await req.json();
    const { name, email, company, message, interest } = body;

    if (!name || typeof name !== "string" || name.trim().length === 0) {
      return NextResponse.json({ error: "name is required" }, { status: 400, headers: CORS_HEADERS });
    }

    if (
      !email ||
      typeof email !== "string" ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    ) {
      return NextResponse.json({ error: "a valid work email is required" }, { status: 400, headers: CORS_HEADERS });
    }

    if (!message || typeof message !== "string" || message.trim().length === 0) {
      return NextResponse.json({ error: "message is required" }, { status: 400, headers: CORS_HEADERS });
    }

    const lead: Lead = {
      name: name.trim(),
      email: email.trim(),
      company: typeof company === "string" && company.trim() ? company.trim() : null,
      message: message.trim(),
      interest:
        typeof interest === "string" && VALID_INTERESTS.includes(interest)
          ? interest
          : "Not sure yet",
    };

    // Capture the lead two ways in parallel. As long as one succeeds, the lead
    // is not lost, so we only fail the request if BOTH fall over.
    const [saved, emailed] = await Promise.all([
      saveLead(lead),
      forwardLeadEmail(lead),
    ]);

    if (!saved && !emailed) {
      return NextResponse.json(
        { error: "internal server error" },
        { status: 500, headers: CORS_HEADERS }
      );
    }

    return NextResponse.json({ ok: true }, { headers: CORS_HEADERS });
  } catch (err) {
    console.error("[contact]", err);
    return NextResponse.json({ error: "internal server error" }, { status: 500, headers: CORS_HEADERS });
  }
}
