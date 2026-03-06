"use client";
import { Icon } from "@iconify/react";
import Link from "next/link";

export default function PlatformCTA() {
    return (
        <section className="relative z-20 bg-[#0a0a0a] border-t border-white/5 py-32 px-6 md:px-12 overflow-hidden">
            {/* Background visual elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[400px] bg-emerald-500/5 rounded-full blur-[150px] pointer-events-none"></div>
            </div>

            <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center text-center">

                <h2 className="text-4xl md:text-6xl text-white font-tech font-light tracking-tight mb-6">
                    Own Your Creative <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-200 via-emerald-400 to-emerald-600">
                        AI Infrastructure
                    </span>
                </h2>

                <p className="text-xl text-zinc-400 font-light max-w-xl mx-auto mb-4">
                    Stop renting AI tools.
                </p>
                <p className="text-xl text-zinc-500 font-light max-w-xl mx-auto mb-12">
                    Run AI directly inside your studio pipeline.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
                    <Link href="/download" className="w-full sm:w-auto flex items-center justify-center gap-2 bg-zinc-100 hover:bg-white text-black text-sm font-semibold rounded-md px-8 py-4 transition-colors shadow-[0_0_30px_rgba(255,255,255,0.15)]">
                        <Icon icon="solar:download-square-bold" width="20" />
                        <span>Download FlowScale</span>
                    </Link>

                    <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-emerald-950/30 border border-emerald-500/30 hover:bg-emerald-900/40 hover:border-emerald-500/50 text-emerald-400 text-sm font-medium rounded-md px-8 py-4 transition-all">
                        <Icon icon="solar:calendar-date-bold" width="20" />
                        <span>Book Enterprise Demo</span>
                    </button>

                    <Link href="https://github.com/FlowScale" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto flex items-center justify-center gap-2 bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 text-zinc-300 text-sm font-medium rounded-md px-6 py-4 transition-colors">
                        <Icon icon="simple-icons:github" width="20" />
                        <span>Star on GitHub</span>
                    </Link>
                </div>

            </div>
        </section>
    );
}
