"use client";
import { Icon } from "@iconify/react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="z-50 flex px-6 md:px-10 py-6 relative items-center justify-between border-b border-white/5 bg-background/80 backdrop-blur-md">
      {/* Logo */}
      <div className="flex gap-3 items-center">
        <img src="/logo-dark.png" alt="FlowScale" className="h-8 w-auto" />
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-8">
        <Link
          href="#"
          className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
        >
          Platform
        </Link>
        <Link
          href="#"
          className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
        >
          Integrations
        </Link>
        <Link
          href="#"
          className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
        >
          Enterprise
        </Link>
      </div>

      {/* CTA */}
      <div className="flex items-center gap-4">
        <button
          onClick={() => window.location.assign("/os/login")}
          className="hidden sm:block text-xs font-medium text-zinc-400 hover:text-white font-mono-custom"
        >
          Sign In
        </button>
        <button
          onClick={() => window.location.assign("/os")}
          className="group hover:bg-emerald-400 hover:text-black transition-all flex text-xs font-medium text-emerald-400 bg-emerald-950/30 border border-emerald-500/30 rounded-md px-4 py-2 items-center cursor-pointer gap-2"
        >
          <span>Deploy OS</span>
          <Icon
            icon="solar:arrow-right-linear"
            width="14"
            className="group-hover:translate-x-0.5 transition-transform"
          />
        </button>
      </div>
    </nav>
  );
}
