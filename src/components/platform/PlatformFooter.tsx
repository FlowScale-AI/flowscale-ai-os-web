"use client";
import Link from "next/link";
import { Icon } from "@iconify/react";

export default function PlatformFooter() {
    return (
        <footer className="relative z-20 bg-[#080809] border-t border-white/5 py-12 px-6 md:px-12 mt-auto">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">

                {/* Brand */}
                <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                        <span className="text-white font-tech tracking-tight text-lg">FlowScale AI OS</span>
                        <span className="px-1.5 py-0.5 rounded bg-white/5 border border-white/10 text-[9px] font-mono-custom text-zinc-400 uppercase tracking-widest">Beta</span>
                    </div>
                    <p className="text-zinc-500 text-sm max-w-xs">
                        Train, generate, and scale creative AI — on infrastructure you own.
                    </p>
                </div>

                {/* Primary Links */}
                <div className="flex flex-wrap gap-6 items-center">
                    <Link href="/" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">
                        Home
                    </Link>
                    <Link href="/about" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">
                        About
                    </Link>
                    <Link href="/blog" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">
                        Blog
                    </Link>
                    <a href="https://ammanjsharma.notion.site/Welcome-to-FlowScale-AIOS-Documentation-31ede69d87b180bfbba7c2fe66233fbb?source=copy_link" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">
                        Docs
                    </a>

                    <div className="w-[1px] h-4 bg-white/10 hidden sm:block"></div>

                    <a
                        href="https://discord.gg/XgPTrNM7Du"
                        target="_blank"
                        rel="noreferrer"
                        className="text-zinc-500 hover:text-[#5865F2] transition-colors flex items-center gap-2 text-sm"
                    >
                        <Icon icon="simple-icons:discord" />
                        <span>Discord</span>
                    </a>

                    <a
                        href="https://github.com/FlowScale-AI/flowscale-aios"
                        target="_blank"
                        rel="noreferrer"
                        className="text-zinc-500 hover:text-white transition-colors flex items-center gap-2 text-sm"
                    >
                        <Icon icon="simple-icons:github" />
                        <span>GitHub</span>
                    </a>
                </div>

            </div>

            {/* Bottom Bar */}
            <div className="max-w-7xl mx-auto border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="text-zinc-600 text-xs font-mono-custom uppercase tracking-widest">
                    &copy; {new Date().getFullYear()} FlowScale AI. All rights reserved.
                </p>
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                    <span className="text-emerald-500 text-xs font-mono-custom uppercase tracking-widest">Systems Normal</span>
                </div>
            </div>
        </footer>
    );
}
