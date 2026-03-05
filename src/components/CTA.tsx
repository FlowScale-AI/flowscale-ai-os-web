"use client";
import { Icon } from "@iconify/react";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="relative z-20 border-t border-white/5 bg-background py-32 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl text-white font-tech font-light tracking-tight mb-8">
          Stop building internal tools <br />
          <span className="italic text-zinc-500">from scratch.</span>
        </h2>
        <p className="text-zinc-400 text-lg font-light mb-12 max-w-xl mx-auto">
          Join the creative studios using FlowScale to standardize their AI
          infrastructure.
        </p>
        <div className="flex justify-center gap-4">
          <Link
            href="/os/canvases"
            className="group bg-white hover:bg-zinc-200 text-black px-8 py-4 rounded-full font-medium transition-all flex items-center gap-2"
          >
            Get Early Access
            <Icon
              icon="solar:arrow-right-linear"
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
