"use client";
import { Icon } from "@iconify/react";

export default function PlatformDifferentiation() {
    return (
        <section className="relative z-20 bg-[#0a0a0a] border-t border-white/5 py-32 px-6 md:px-12 overflow-hidden">
            <div className="max-w-4xl mx-auto text-center relative z-10">
                <p className="font-mono-custom text-[11px] text-emerald-500 uppercase tracking-widest mb-4">
                    Core Value
                </p>
                <h2 className="text-4xl md:text-6xl text-white font-tech font-light tracking-tight mb-8">
                    Your hardware, <br className="hidden md:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-200 via-emerald-400 to-emerald-600">fully utilized.</span>
                </h2>
                <p className="text-2xl text-zinc-400 font-light max-w-xl mx-auto leading-relaxed mb-16">
                    AIOS makes that obvious.
                </p>

                {/* Parallel Orchestration Illustration */}
                <div className="bg-[#0c0c0e] border border-white/5 rounded-3xl p-8 md:p-12 shadow-2xl relative w-full max-w-3xl mx-auto mb-16 group/box transition-colors hover:border-white/10">
                    {/* Subtle BG effect */}
                    <div className="absolute inset-0 bg-emerald-500/5 blur-[80px] opacity-0 group-hover/box:opacity-100 transition-opacity duration-1000"></div>

                    <div className="flex flex-col gap-4 relative z-10 w-full max-w-xl mx-auto">
                        
                        {/* Headers */}
                        <div className="flex items-center justify-between px-4 mb-2">
                            <span className="text-[10px] font-mono-custom text-zinc-600 tracking-widest uppercase">Compute Layer</span>
                            <span className="text-[10px] font-mono-custom text-emerald-500/70 tracking-widest uppercase text-right">Active Workloads</span>
                        </div>

                        {/* Array Generator for 4 Parallel Rows */}
                        {[1, 2, 3, 4].map((num) => (
                            <div key={num} className="flex items-center justify-between group">
                                {/* GPU Side */}
                                <div className="flex items-center gap-3 bg-[#111113] border border-white/5 rounded-xl px-4 py-3.5 w-[140px] md:w-[160px] transform group-hover:scale-105 transition-all duration-300">
                                    <Icon icon="solar:cpu-bolt-bold-duotone" className="text-zinc-500 group-hover:text-emerald-500 transition-colors w-5 h-5 flex-shrink-0" />
                                    <span className="text-[11px] font-mono-custom text-zinc-400 group-hover:text-zinc-200 tracking-widest uppercase">GPU {num}</span>
                                </div>
                                
                                {/* Connection & Data Flow */}
                                <div className="flex-1 px-2 md:px-4 relative flex items-center justify-center">
                                    {/* Desktop Line */}
                                    <div className="absolute left-4 right-4 h-[1px] bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent hidden md:block"></div>
                                    {/* Flow Animation (Desktop) */}
                                    <div 
                                        className="absolute h-[2px] w-12 bg-emerald-400 shadow-[0_0_10px_#34d399] rounded-full hidden md:block anim-data-flow"
                                        style={{ animationDelay: `${(num - 1) * 0.4}s` }}
                                    ></div>
                                    {/* Mobile arrow */}
                                    <Icon icon="solar:round-alt-arrow-right-bold-duotone" className="text-emerald-500/30 w-5 h-5 md:hidden" />
                                </div>

                                {/* Job Side */}
                                <div className="flex items-center justify-between bg-[#111113] border border-emerald-500/20 rounded-xl px-4 py-3.5 w-[160px] md:w-[200px] shadow-[0_0_15px_rgba(16,185,129,0.05)] transform group-hover:bg-emerald-500/10 group-hover:scale-105 transition-all duration-300 relative overflow-hidden">
                                    <div className="flex items-center gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_#34d399] animate-pulse"></div>
                                        <span className="text-[13px] font-tech text-white">Running Job</span>
                                    </div>
                                    <span className="text-[10px] font-mono-custom text-emerald-500 relative mt-0.5">100%</span>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>

                <div className="text-xl text-zinc-300 font-light mb-16 inline-flex items-center gap-3 bg-[#111113] p-4 px-6 rounded-2xl border border-white/5 shadow-xl">
                    <Icon icon="solar:check-circle-bold-duotone" className="text-emerald-500 w-6 h-6" />
                    One job per GPU, all running simultaneously.
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-[11px] font-mono-custom tracking-widest uppercase text-emerald-500/50">
                    <span>No config.</span>
                    <span className="hidden sm:block text-zinc-700">•</span>
                    <span>No infra setup.</span>
                </div>
            </div>

            <style jsx>{`
                .anim-data-flow {
                    animation: data-flow 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;
                }
                @keyframes data-flow {
                    0% { left: 10%; opacity: 0; }
                    20% { opacity: 1; }
                    80% { opacity: 1; }
                    100% { left: 90%; opacity: 0; }
                }
            `}</style>
        </section>
    );
}
