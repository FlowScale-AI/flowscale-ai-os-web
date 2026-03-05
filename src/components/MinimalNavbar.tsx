"use client";

import Link from "next/link";

export default function MinimalNavbar() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-5">
            <nav className="max-w-7xl mx-auto flex items-center justify-between">
                {/* Left: Brand */}
                <div className="flex items-center">
                    <Link href="/" className="flex items-center">
                        <img
                            src="/flowscale-white-logo-full.png"
                            alt="FlowScale"
                            className="h-6 w-auto"
                        />
                    </Link>
                </div>

                {/* Center: Pill Navigation */}
                <div className="hidden md:flex items-center gap-6 font-mono-custom text-[10px] tracking-widest uppercase bg-background-canvas/80 backdrop-blur-md border border-white/5 rounded-full px-7 py-2.5">
                    <div className="relative group cursor-pointer text-zinc-500 hover:text-white transition-colors">
                        Platform
                        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-36 bg-background-panel border border-white/5 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all -translate-y-2 group-hover:translate-y-0 z-50">
                            <div className="p-2 flex flex-col gap-0.5 normal-case tracking-normal font-sans">
                                <Link
                                    href="/ai-os"
                                    className="px-3 py-2 rounded-md hover:bg-white/5 text-zinc-400 hover:text-white text-xs font-medium transition-colors"
                                >
                                    AIOS
                                </Link>
                                <Link
                                    href="/nimbus"
                                    className="px-3 py-2 rounded-md hover:bg-white/5 text-zinc-400 hover:text-white text-xs font-medium transition-colors"
                                >
                                    Nimbus
                                </Link>
                            </div>
                        </div>
                    </div>
                    <Link
                        href="/integrations"
                        className="text-zinc-500 hover:text-white transition-colors"
                    >
                        Integrations
                    </Link>
                    <Link
                        href="/about"
                        className="text-zinc-500 hover:text-white transition-colors"
                    >
                        About
                    </Link>
                </div>

                {/* Right: CTA */}
                <div className="flex items-center">
                    <Link
                        href="/ai-os"
                        className="hidden md:inline-flex items-center gap-2 group text-xs font-medium text-zinc-400 hover:text-white font-mono-custom transition-colors"
                    >
                        Launch AIOS
                        <svg
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-emerald-500 group-hover:translate-x-0.5 transition-transform"
                        >
                            <line x1="5" y1="12" x2="19" y2="12" />
                            <polyline points="12 5 19 12 12 19" />
                        </svg>
                    </Link>
                </div>
            </nav>
        </header>
    );
}
