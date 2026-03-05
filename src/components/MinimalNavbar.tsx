"use client";
import Link from "next/link";

export default function MinimalNavbar() {
    return (
        <nav className="z-50 flex px-6 md:px-10 py-4 relative items-center justify-between border-b border-white/5 bg-[#0a0a0a]/10 backdrop-blur-md">
            {/* Logo */}
            <div className="flex gap-3 items-center">
                <img src="/flowscale-white-logo-full.png" alt="FlowScale" className="h-6 w-auto" />
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
                <Link href="/" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">
                    Home
                </Link>

                {/* Dropdown container */}
                <div className="relative group py-4">
                    <button className="text-sm font-medium text-zinc-400 group-hover:text-white transition-colors flex items-center gap-1 cursor-default">
                        Platform
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-50 group-hover:opacity-100 transition-opacity">
                            <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                    </button>

                    {/* Dropdown Menu */}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-0 w-[400px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                        <div className="p-2 bg-[#0a0a0a] border border-white/10 rounded-xl shadow-2xl flex flex-col gap-1 backdrop-blur-xl">
                            <Link href="/ai-os" className="block p-4 rounded-lg hover:bg-white/5 transition-colors group/item">
                                <div className="text-sm font-medium text-white mb-1 group-hover/item:text-emerald-400 transition-colors">AI OS</div>
                                <div className="text-xs text-zinc-400 leading-relaxed">Local-first AI operating system for creative teams.</div>
                            </Link>
                            <Link href="/cloud" className="block p-4 rounded-lg hover:bg-white/5 transition-colors group/item">
                                <div className="text-sm font-medium text-white mb-1 group-hover/item:text-emerald-400 transition-colors">Nimbus</div>
                                <div className="text-xs text-zinc-400 leading-relaxed">Deploy ComfyUI Workflows as APIs & Playgrounds, on Serverless Cloud.</div>
                            </Link>
                        </div>
                    </div>
                </div>

                <Link href="/about" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">
                    About
                </Link>
            </div>

            {/* CTA */}
            <div className="flex items-center gap-4">
                <Link
                    href="/ai-os"
                    className="group hover:bg-emerald-400 hover:text-black transition-all flex text-xs font-medium text-emerald-400 bg-emerald-950/30 border border-emerald-500/30 rounded-md px-4 py-2 items-center cursor-pointer gap-2"
                >
                    <span>Enter AIOS</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-0.5 transition-transform">
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                    </svg>
                </Link>
            </div>
        </nav>
    );
}
