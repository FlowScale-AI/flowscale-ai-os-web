"use client";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import { logout } from "@/lib/firebase/auth";
import { Icon } from "@iconify/react";

export default function MinimalNavbar() {
    const { user, loading } = useAuth();
    return (
        <nav className="z-50 flex px-6 md:px-12 lg:px-16 py-6 relative items-center justify-between border-b border-white/5 bg-[#0a0a0a]/10 backdrop-blur-md">
            {/* Logo */}
            <div className="flex gap-3 items-center">
                <img src="/flowscale-white-logo-full.png" alt="FlowScale" className="h-6 w-auto" />
                <div className="px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 text-[9px] font-mono-custom text-emerald-500 uppercase tracking-widest mt-0.5 hidden sm:block cursor-default">Beta</div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
                <Link href="/" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">
                    Home
                </Link>

                <Link href="/blog" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">
                    Blog
                </Link>

                <a href="https://ammanjsharma.notion.site/Welcome-to-FlowScale-AIOS-Documentation-31ede69d87b180bfbba7c2fe66233fbb?source=copy_link" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">
                    Docs
                </a>

                <a href="https://github.com/FlowScale-AI/flowscale-aios" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">
                    GitHub
                </a>
            </div>

            {/* CTA */}
            <div className="flex items-center gap-4 lg:gap-6">
                <div className="hidden sm:flex items-center gap-4">
                    <a
                        href="https://discord.gg/XgPTrNM7Du"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-400 hover:text-[#5865F2] transition-colors"
                        aria-label="Discord"
                    >
                        <Icon icon="simple-icons:discord" width="20" />
                    </a>

                    <a
                        href="https://github.com/FlowScale-AI/flowscale-aios"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-400 hover:text-white transition-colors"
                        aria-label="GitHub"
                    >
                        <Icon icon="simple-icons:github" width="20" />
                    </a>
                </div>

                {!loading && user ? (
                    <div className="flex items-center gap-4">
                        <Link href="/download" className="text-sm font-medium text-zinc-300 hover:text-white transition-colors hidden sm:block">
                            Downloads
                        </Link>
                        <div className="h-4 w-[1px] bg-white/10 hidden sm:block"></div>
                        <div className="flex items-center gap-3">
                            {user.photoURL ? (
                                <img src={user.photoURL} alt="Avatar" className="w-8 h-8 rounded-full border border-white/10" />
                            ) : (
                                <div className="w-8 h-8 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center text-xs font-bold border border-emerald-500/20">
                                    {user.displayName?.charAt(0) || user.email?.charAt(0) || "U"}
                                </div>
                            )}
                            <button
                                onClick={logout}
                                className="text-zinc-500 hover:text-red-400 transition-colors flex items-center p-1"
                                title="Sign Out"
                            >
                                <Icon icon="solar:logout-2-outline" width="20" />
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className="flex items-center gap-4">
                        <Link
                            href="/download"
                            className="group hover:bg-emerald-400 hover:text-black transition-all flex text-xs font-medium text-emerald-400 bg-emerald-950/30 border border-emerald-500/30 rounded-md px-4 py-2 items-center cursor-pointer gap-2"
                        >
                            <span>Download</span>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-0.5 transition-transform">
                                <line x1="5" y1="12" x2="19" y2="12" />
                                <polyline points="12 5 19 12 12 19" />
                            </svg>
                        </Link>
                    </div>
                )}
            </div>
        </nav>
    );
}
