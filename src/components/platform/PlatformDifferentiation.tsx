"use client";
import { Icon } from "@iconify/react";

export default function PlatformDifferentiation() {
    const comparisons = [
        {
            traditional: "Cloud tools control your data",
            flowscale: "Studios run AI inside their own infrastructure",
        },
        {
            traditional: "AI features built as SaaS apps",
            flowscale: "AI capabilities embedded in production pipelines",
        },
        {
            traditional: "Artists forced to use complex interfaces",
            flowscale: "Artists use simple production applications",
        },
        {
            traditional: "Limited customization",
            flowscale: "Fully customizable workflows",
        },
    ];

    return (
        <section className="relative z-20 bg-[#0a0a0a] border-t border-white/5 py-32 px-6 md:px-12">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-16">
                    <p className="font-mono-custom text-[11px] text-emerald-500 uppercase tracking-widest mb-4">
                        Why FlowScale
                    </p>
                    <h2 className="text-3xl md:text-5xl text-white font-tech font-light tracking-tight mb-6">
                        Built for Production Pipelines — <br />
                        <span className="text-zinc-500">Not AI SaaS</span>
                    </h2>
                    <p className="text-zinc-500 text-lg font-light max-w-xl mx-auto leading-relaxed">
                        FlowScale is not another AI tool. It is the infrastructure layer that allows studios to run AI safely inside their own pipelines.
                    </p>
                </div>

                <div className="bg-[#0c0c0e] rounded-2xl border border-white/5 overflow-hidden shadow-2xl">
                    {/* Table Header */}
                    <div className="grid grid-cols-1 md:grid-cols-2 bg-zinc-900/50 border-b border-white/5">
                        <div className="p-6 md:p-8 flex items-center justify-center md:items-start md:justify-start">
                            <span className="text-zinc-500 font-tech text-xl font-medium tracking-wide">
                                Traditional AI Tools
                            </span>
                        </div>
                        <div className="p-6 md:p-8 bg-emerald-500/[0.03] border-t md:border-t-0 md:border-l border-white/5 flex items-center justify-center md:items-start md:justify-start relative overflow-hidden">
                            {/* Subtle glow */}
                            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-transparent opacity-50"></div>
                            <span className="text-emerald-400 font-tech text-xl font-medium tracking-wide relative z-10">
                                FlowScale
                            </span>
                        </div>
                    </div>

                    {/* Table Body */}
                    <div className="flex flex-col">
                        {comparisons.map((row, idx) => (
                            <div key={idx} className="grid grid-cols-1 md:grid-cols-2 border-b border-white/5 last:border-b-0">
                                <div className="p-5 md:px-8 md:py-6 flex items-start gap-4">
                                    <Icon icon="solar:close-circle-bold-duotone" className="text-red-500/50 w-5 h-5 shrink-0 mt-0.5" />
                                    <span className="text-zinc-400 text-sm md:text-base">{row.traditional}</span>
                                </div>
                                <div className="p-5 md:px-8 md:py-6 bg-emerald-500/[0.02] md:border-l border-white/5 flex items-start gap-4">
                                    <Icon icon="solar:check-circle-bold-duotone" className="text-emerald-500 w-5 h-5 shrink-0 mt-0.5" />
                                    <span className="text-white text-sm md:text-base">{row.flowscale}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
