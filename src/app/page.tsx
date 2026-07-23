"use client";

import { useState } from "react";

const CALENDLY_URL = "https://calendly.com/aman-flowscale/intro";

type Interest = "Creative Production" | "AI Solutions" | "Both" | "Not sure yet";

const ArrowIcon = ({ className = "" }: { className?: string }) => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

export default function Home() {
  const [interest, setInterest] = useState<Interest>("Not sure yet");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const selectLane = (lane: Interest) => {
    setInterest(lane);
    scrollToContact();
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") ?? "").trim(),
      email: String(data.get("email") ?? "").trim(),
      company: String(data.get("company") ?? "").trim(),
      message: String(data.get("message") ?? "").trim(),
      interest,
    };

    setStatus("sending");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body?.error || "Something went wrong.");
      }
      setStatus("sent");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
    }
  };

  const mailtoFallback = `mailto:aman@flowscale.ai?subject=${encodeURIComponent(
    "New enquiry via flowscale.ai"
  )}`;

  return (
    <div className="min-h-screen bg-black flex flex-col">
      {/* ============================================================= */}
      {/* HERO — full-bleed, edge to edge (matches full-width sections)  */}
      {/* ============================================================= */}
      <main className="relative flex flex-col overflow-hidden min-h-[640px] lg:h-screen bg-[#0a0a0a] w-full">
        {/* Grid Background */}
        <div className="absolute inset-0 w-full h-full pointer-events-none z-0 bg-grid-pattern opacity-50" />

        {/* Vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0a]/50 to-[#0a0a0a] z-0 pointer-events-none" />

        {/* Background Video */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-10 mix-blend-screen"
          >
            <source src="/pipeline-bg.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Nav */}
        <nav className="z-50 px-6 md:px-12 lg:px-16 py-6 relative border-b border-white/5 bg-[#0a0a0a]/10 backdrop-blur-md">
          <div className="w-full max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex gap-3 items-center">
            <img
              src="/flowscale-white-logo-full.png"
              alt="FlowScale AI"
              className="h-6 w-auto"
            />
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a
              href="#what-we-do"
              className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
            >
              What we do
            </a>
            <a
              href="#proof"
              className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
            >
              Proof
            </a>
            <a
              href="#contact"
              className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
            >
              Contact
            </a>
          </div>

          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group hover:bg-emerald-400 hover:text-black transition-all hidden sm:flex text-xs font-medium text-emerald-400 bg-emerald-950/30 border border-emerald-500/30 rounded-md px-4 py-2 items-center cursor-pointer gap-2"
          >
            <span>Book an intro call</span>
            <ArrowIcon className="group-hover:translate-x-0.5 transition-transform" />
          </a>
          </div>
        </nav>

        {/* Hero — cohesive left-aligned block, vertically centered */}
        <div className="flex-1 w-full z-20 flex flex-col relative px-6 md:px-12 lg:px-16 pt-12 pb-10">
          {/* Centered content */}
          <div className="flex-1 flex items-center">
            <div className="w-full max-w-7xl mx-auto">
              <div className="max-w-4xl">
                {/* Eyebrow */}
                <div className="inline-flex items-center gap-2.5 mb-7">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span className="font-mono-custom text-[10px] uppercase tracking-widest text-emerald-500/80">
                    AI Creative Production &amp; AI Solutions
                  </span>
                </div>

                {/* Headline */}
                <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-[4rem] font-normal text-white tracking-tight font-tech leading-[1.05] mb-8">
                  Creative at scale,
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-200 via-emerald-400 to-emerald-600">
                    without losing the craft.
                  </span>
                </h1>

                {/* Description */}
                <p className="text-base md:text-lg leading-[1.7] text-zinc-300 font-light max-w-xl mb-10">
                  FlowScale AI is a creative and technology studio. We produce
                  on-brand creative at volume, and we build custom AI systems
                  that run at scale, in real time, on your own infrastructure.
                  Two years shipping both, in production, for enterprise brands
                  and creative networks.
                </p>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={CALENDLY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-center gap-2 bg-zinc-100 hover:bg-white text-black text-sm font-semibold rounded-md px-5 py-3 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.1)]"
                  >
                    <span>Book an intro call</span>
                    <ArrowIcon className="group-hover:translate-x-0.5 transition-transform" />
                  </a>
                  <button
                    onClick={scrollToContact}
                    className="flex items-center justify-center gap-2 bg-zinc-900 border border-zinc-800 hover:border-zinc-600 text-zinc-300 text-sm font-medium rounded-md px-5 py-3 transition-all"
                  >
                    <span>Send us a note</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom bar: Clients (pinned to bottom) */}
          <div className="w-full max-w-7xl mx-auto">
            <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
              <p className="font-mono-custom text-[10px] text-zinc-600 uppercase tracking-widest">
                Trusted By Teams At
              </p>
              <div className="flex items-center gap-10 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                <img
                  src="/clients/hogarth-white.png"
                  alt="Hogarth"
                  className="h-9 w-auto object-contain"
                />
                <img
                  src="/clients/invnt-white.png"
                  alt="INVNT"
                  className="h-9 w-auto object-contain"
                />
                <img
                  src="/clients/superside-white.png"
                  alt="Superside"
                  className="h-9 w-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* ============================================================= */}
      {/* SECTION 2 — What we do                                        */}
      {/* ============================================================= */}
      <section
        id="what-we-do"
        className="relative bg-[#0a0a0a] w-full border-t border-white/5 overflow-hidden px-6 md:px-12 lg:px-16 py-24 lg:py-32"
      >
        <div className="absolute inset-0 pointer-events-none z-0 bg-grid-pattern opacity-20" />

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="mb-4">
            <span className="font-mono-custom text-[10px] uppercase tracking-widest text-emerald-500/80">
              What we do
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal text-white tracking-tight font-tech leading-[1.1] mb-14 lg:mb-20">
            Two things, done properly.
          </h2>

          <div className="flex flex-col">
            {/* Row 01 — Creative Production */}
            <div className="group grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 border-t border-white/10 py-14 lg:py-16">
              <div className="lg:col-span-5 flex items-start gap-5">
                <span className="font-mono-custom text-xs text-emerald-500/70 pt-2 shrink-0">
                  01
                </span>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-normal text-white font-tech tracking-tight leading-[1.1]">
                  Creative Production
                  <br />
                  at Scale
                </h3>
              </div>
              <div className="lg:col-span-7 flex flex-col">
                <p className="text-lg md:text-xl leading-[1.6] text-zinc-200 font-light mb-6 max-w-2xl">
                  Brief in, on-brand work out, in days. We produce ad creative,
                  product and lifestyle imagery, video, motion, and versioning at
                  a volume you can&apos;t hire for, held to a bar that survives
                  real production.
                </p>
                <p className="text-sm text-zinc-500 leading-relaxed mb-8 max-w-2xl">
                  For brands and agencies who need more creative than their team
                  can make.
                </p>
                <button
                  onClick={() => selectLane("Creative Production")}
                  className="group/btn self-start flex items-center gap-2 bg-zinc-100 hover:bg-white text-black text-sm font-semibold rounded-md px-5 py-2.5 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.08)]"
                >
                  <span>Get a free sample</span>
                  <ArrowIcon className="group-hover/btn:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>

            {/* Row 02 — AI Solutions */}
            <div className="group grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 border-t border-white/10 py-14 lg:py-16">
              <div className="lg:col-span-5 flex items-start gap-5">
                <span className="font-mono-custom text-xs text-emerald-500/70 pt-2 shrink-0">
                  02
                </span>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-normal text-white font-tech tracking-tight leading-[1.1]">
                  AI Solutions
                  <br />
                  for Enterprises
                </h3>
              </div>
              <div className="lg:col-span-7 flex flex-col">
                <p className="text-lg md:text-xl leading-[1.6] text-zinc-200 font-light mb-6 max-w-2xl">
                  Custom AI systems, built for your problem: personalised video,
                  live activations, interactive avatars, and production
                  infrastructure. Built to run at scale, in real time, and inside
                  your own network when your contracts require it.
                </p>
                <p className="text-sm text-zinc-500 leading-relaxed mb-8 max-w-2xl">
                  For enterprises and networks who need more than an off-the-shelf
                  tool.
                </p>
                <button
                  onClick={() => selectLane("AI Solutions")}
                  className="group/btn self-start flex items-center gap-2 bg-zinc-100 hover:bg-white text-black text-sm font-semibold rounded-md px-5 py-2.5 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.08)]"
                >
                  <span>Request a demo</span>
                  <ArrowIcon className="group-hover/btn:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>

            {/* Who we serve — quiet strip */}
            <div className="border-t border-white/10 pt-8">
              <p className="font-mono-custom text-[10px] text-zinc-600 uppercase tracking-widest">
                Agencies &middot; Brands &middot; Experiential &amp; live &middot;
                Enterprise &amp; networks
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/* SECTION 3 — Proof                                             */}
      {/* ============================================================= */}
      <section
        id="proof"
        className="relative bg-black w-full border-t border-white/5 overflow-hidden px-6 md:px-12 lg:px-16 py-24 lg:py-32"
      >
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="mb-4">
            <span className="font-mono-custom text-[10px] uppercase tracking-widest text-emerald-500/80">
              Proof
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal text-white tracking-tight font-tech leading-[1.1] mb-12">
            Built for brands and networks that can&apos;t afford a miss.
          </h2>

          {/* Trust bar */}
          <div className="flex items-center gap-10 opacity-50 grayscale hover:grayscale-0 transition-all duration-500 mb-16">
            <img
              src="/clients/invnt-white.png"
              alt="INVNT"
              className="h-8 w-auto object-contain"
            />
            <img
              src="/clients/hogarth-white.png"
              alt="Hogarth"
              className="h-8 w-auto object-contain"
            />
            <img
              src="/clients/superside-white.png"
              alt="Superside"
              className="h-8 w-auto object-contain"
            />
          </div>

          {/* Outcome lines */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-y-12 gap-x-10 lg:gap-x-16">
            {[
              {
                title: "A live brand activation",
                body: "430 guests, each handed personalised cinematic media in under 60 seconds. Every piece made and checked live, by us.",
              },
              {
                title: "A global creative network",
                body: "On-brand campaign creative made at a volume their own team couldn't staff for, delivered on their deadlines.",
              },
              {
                title: "A Fortune 500 enterprise",
                body: "A custom AI system, built to their brief and deployed inside their own systems, running in real time.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex flex-col border-t border-white/10 pt-6"
              >
                <h3 className="text-lg font-medium text-white font-tech mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  {item.body}
                </p>
              </div>
            ))}
          </div>

          <p className="font-mono-custom text-[10px] text-zinc-600 uppercase tracking-widest mt-12">
            Representative engagements. Details anonymized.
          </p>
        </div>
      </section>

      {/* ============================================================= */}
      {/* SECTION 4 — Contact                                           */}
      {/* ============================================================= */}
      <section
        id="contact"
        className="relative bg-[#0a0a0a] w-full border-t border-white/5 overflow-hidden px-6 md:px-12 lg:px-16 py-24 lg:py-32"
      >
        <div className="absolute inset-0 pointer-events-none z-0 bg-grid-pattern opacity-20" />

        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20">
          {/* Left: pitch */}
          <div className="flex flex-col">
            <div className="mb-4">
              <span className="font-mono-custom text-[10px] uppercase tracking-widest text-emerald-500/80">
                Let&apos;s talk
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal text-white tracking-tight font-tech leading-[1.1] mb-8">
              Tell us what you&apos;re trying to make.
            </h2>
            <p className="text-base md:text-lg leading-[1.7] text-zinc-400 font-light max-w-md mb-10">
              A campaign that needs more creative than your team can produce, or a
              system you can&apos;t buy off the shelf. Either way, start with a
              short conversation.
            </p>
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group self-start flex items-center gap-2 bg-zinc-100 hover:bg-white text-black text-sm font-semibold rounded-md px-5 py-2.5 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.1)]"
            >
              <span>Book an intro call</span>
              <ArrowIcon className="group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>

          {/* Right: form */}
          <div className="bg-zinc-900/50 border border-white/5 rounded-xl p-8 lg:p-10">
            {status === "sent" ? (
              <div className="flex flex-col items-start justify-center h-full min-h-[320px]">
                <div className="flex items-center gap-2 mb-4">
                  <span className="relative flex h-2 w-2">
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span className="font-mono-custom text-[10px] uppercase tracking-widest text-emerald-500/80">
                    Message received
                  </span>
                </div>
                <h3 className="text-2xl font-normal text-white font-tech mb-3">
                  Thanks. We&apos;ll be in touch.
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  We read every note ourselves and reply within a day. If
                  it&apos;s urgent, book a time directly at{" "}
                  <a
                    href={CALENDLY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-400 hover:text-emerald-300 transition-colors"
                  >
                    calendly.com/aman-flowscale
                  </a>
                  .
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="name"
                      className="font-mono-custom text-[10px] uppercase tracking-widest text-zinc-500"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      className="bg-zinc-950 border border-zinc-800 focus:border-emerald-500/50 focus:outline-none rounded-md px-3.5 py-2.5 text-sm text-zinc-200 placeholder:text-zinc-600 transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="email"
                      className="font-mono-custom text-[10px] uppercase tracking-widest text-zinc-500"
                    >
                      Work email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      className="bg-zinc-950 border border-zinc-800 focus:border-emerald-500/50 focus:outline-none rounded-md px-3.5 py-2.5 text-sm text-zinc-200 placeholder:text-zinc-600 transition-colors"
                      placeholder="you@company.com"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="company"
                    className="font-mono-custom text-[10px] uppercase tracking-widest text-zinc-500"
                  >
                    Company
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    autoComplete="organization"
                    className="bg-zinc-950 border border-zinc-800 focus:border-emerald-500/50 focus:outline-none rounded-md px-3.5 py-2.5 text-sm text-zinc-200 placeholder:text-zinc-600 transition-colors"
                    placeholder="Where you work"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="interest"
                    className="font-mono-custom text-[10px] uppercase tracking-widest text-zinc-500"
                  >
                    I&apos;m interested in
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    value={interest}
                    onChange={(e) => setInterest(e.target.value as Interest)}
                    className="bg-zinc-950 border border-zinc-800 focus:border-emerald-500/50 focus:outline-none rounded-md px-3.5 py-2.5 text-sm text-zinc-200 transition-colors appearance-none"
                  >
                    <option value="Creative Production">
                      Creative Production
                    </option>
                    <option value="AI Solutions">AI Solutions</option>
                    <option value="Both">Both</option>
                    <option value="Not sure yet">Not sure yet</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="message"
                    className="font-mono-custom text-[10px] uppercase tracking-widest text-zinc-500"
                  >
                    What you&apos;re working on
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    className="bg-zinc-950 border border-zinc-800 focus:border-emerald-500/50 focus:outline-none rounded-md px-3.5 py-2.5 text-sm text-zinc-200 placeholder:text-zinc-600 transition-colors resize-none"
                    placeholder="A campaign, a system, a rough idea. A sentence or two is plenty."
                  />
                </div>

                {status === "error" && (
                  <p className="text-xs text-red-400">
                    {errorMsg} You can also email us directly at{" "}
                    <a
                      href={mailtoFallback}
                      className="underline hover:text-red-300"
                    >
                      aman@flowscale.ai
                    </a>
                    .
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="group mt-1 flex items-center justify-center gap-2 bg-zinc-100 hover:bg-white text-black text-sm font-semibold rounded-md px-5 py-3 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.1)] disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  <span>{status === "sending" ? "Sending..." : "Send us a note"}</span>
                  {status !== "sending" && (
                    <ArrowIcon className="group-hover:translate-x-0.5 transition-transform" />
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/* FOOTER                                                        */}
      {/* ============================================================= */}
      <footer className="relative bg-black w-full border-t border-white/5 overflow-hidden px-6 md:px-12 lg:px-16 py-16">
        <div className="max-w-7xl mx-auto flex flex-col gap-10">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10">
            <div className="max-w-sm">
              <img
                src="/flowscale-white-logo-full.png"
                alt="FlowScale AI"
                className="h-6 w-auto mb-5"
              />
              <p className="text-sm text-zinc-400 font-light leading-relaxed">
                Creative at scale, without losing the craft.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-10 sm:gap-16">
              <div className="flex flex-col gap-2">
                <span className="font-mono-custom text-[10px] uppercase tracking-widest text-zinc-600 mb-2">
                  Amman J Sharma
                </span>
                <a
                  href="mailto:aman@flowscale.ai"
                  className="text-sm text-zinc-400 hover:text-white transition-colors"
                >
                  aman@flowscale.ai
                </a>
                <a
                  href="tel:+918905839755"
                  className="text-sm text-zinc-400 hover:text-white transition-colors"
                >
                  +91 89058 39755
                </a>
              </div>
              <div className="flex flex-col gap-2">
                <span className="font-mono-custom text-[10px] uppercase tracking-widest text-zinc-600 mb-2">
                  Vishnu Malviya
                </span>
                <a
                  href="mailto:viishnu@flowscale.ai"
                  className="text-sm text-zinc-400 hover:text-white transition-colors"
                >
                  viishnu@flowscale.ai
                </a>
                <a
                  href="tel:+917852042234"
                  className="text-sm text-zinc-400 hover:text-white transition-colors"
                >
                  +91 78520 42234
                </a>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div className="flex flex-col gap-1.5">
              <p className="font-mono-custom text-[10px] text-zinc-600 uppercase tracking-widest">
                FlowScale AI is operated by GETINSYNK TECH PRIVATE LIMITED
              </p>
              <p className="text-[11px] text-zinc-700 leading-relaxed">
                Registered office: SOLUS Building, Office No. 1913 Thane 400607,
                Maharashtra
                <span className="mx-2 text-zinc-800">&middot;</span>
                CIN: U72900MH2022PTC37695
              </p>
              <p className="font-mono-custom text-[10px] text-zinc-700 uppercase tracking-widest mt-1">
                &copy; {new Date().getFullYear()} GETINSYNK TECH PRIVATE LIMITED. All
                rights reserved.
              </p>
            </div>
            <a
              href="https://flowscale.ai"
              className="font-mono-custom text-[10px] text-zinc-500 hover:text-emerald-400 uppercase tracking-widest transition-colors"
            >
              flowscale.ai
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
