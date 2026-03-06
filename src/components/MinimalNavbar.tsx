"use client";
import Link from "next/link";

export default function MinimalNavbar() {
    return (
        <nav className="z-50 flex px-6 md:px-12 lg:px-16 py-6 relative items-center justify-between border-b border-white/5 bg-[#0a0a0a]/10 backdrop-blur-md">
            {/* Logo */}
            <div className="flex gap-3 items-center">
                <img src="/flowscale-white-logo-full.png" alt="FlowScale" className="h-6 w-auto" />
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
                <Link href="/" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">
                    Home
                </Link>

                <Link href="/platform" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">
                    Platform
                </Link>

                <Link href="/about" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">
                    About
                </Link>
            </div>

            {/* CTA */}
            <div className="flex items-center gap-6">
                <a
                    href="https://github.com/FlowScale"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center text-zinc-400 hover:text-white transition-colors"
                    aria-label="GitHub"
                >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                    </svg>
                </a>
                <Link
                    href="/platform"
                    className="group hover:bg-emerald-400 hover:text-black transition-all flex text-xs font-medium text-emerald-400 bg-emerald-950/30 border border-emerald-500/30 rounded-md px-4 py-2 items-center cursor-pointer gap-2"
                >
                    <span>Enter the AI OS</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-0.5 transition-transform">
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                    </svg>
                </Link>
            </div>
        </nav>
    );
}
