"use client";
import { Icon } from "@iconify/react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-white/5 py-12 px-6 md:px-12 z-20">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
          <img
            src="/logo-dark.png"
            alt="FlowScale AI Studio"
            className="h-6 w-auto opacity-80"
          />
        </div>

        <div className="flex gap-6 text-xs text-zinc-600 font-mono-custom">
          <Link href="#" className="hover:text-emerald-400 transition-colors">
            STATUS: ONLINE
          </Link>
          <a href="https://ammanjsharma.notion.site/Welcome-to-FlowScale-AIOS-Documentation-31ede69d87b180bfbba7c2fe66233fbb?source=copy_link" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            DOCS
          </a>
          <a href="https://discord.gg/XgPTrNM7Du" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            DISCORD
          </a>
          <Link href="#" className="hover:text-white transition-colors">
            LEGAL
          </Link>
        </div>
      </div>
    </footer>
  );
}
