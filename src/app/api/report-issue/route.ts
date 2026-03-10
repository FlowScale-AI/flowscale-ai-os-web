import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/firebase/config";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const WINDOW_MS = 60_000; // 1 minute
const MAX_REQUESTS = 10;

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
    const { description, email, version, platform, logs } = body;

    if (!description || typeof description !== "string" || description.trim().length === 0) {
      return NextResponse.json({ error: "description is required" }, { status: 400, headers: CORS_HEADERS });
    }

    if (email !== undefined && (typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))) {
      return NextResponse.json({ error: "invalid email address" }, { status: 400, headers: CORS_HEADERS });
    }

    await addDoc(collection(db, "issue_reports"), {
      description: description.trim(),
      email: email?.trim() ?? null,
      version: version ?? null,
      platform: platform ?? null,
      logs: logs ?? null,
      createdAt: serverTimestamp(),
    });

    return NextResponse.json({ ok: true }, { headers: CORS_HEADERS });
  } catch (err) {
    console.error("[report-issue]", err);
    return NextResponse.json({ error: "internal server error" }, { status: 500, headers: CORS_HEADERS });
  }
}
