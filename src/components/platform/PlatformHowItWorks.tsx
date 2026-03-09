"use client";
import { Icon } from "@iconify/react";

const steps = [
    {
        num: "01",
        title: "Connect",
        description: "Connect the desktop app with ComfyUI or your existing AI pipelines.",
        icon: "solar:plug-circle-bold-duotone",
    },
    {
        num: "02",
        title: "Build",
        description: "Build tools in the desktop app — turn any workflow into a production-ready tool.",
        icon: "solar:programming-bold-duotone",
    },
    {
        num: "03",
        title: "Share",
        description: "Share these tools with artists. No nodes, no code — just simple interfaces.",
        icon: "solar:users-group-rounded-bold-duotone",
    },
    {
        num: "04",
        title: "Compose",
        description: "Use our SDK to build your own apps, combining multiple tools together.",
        icon: "solar:code-square-bold-duotone",
    },
];

export default function PlatformHowItWorks() {
    return (
        <section className="relative z-20 bg-[#080809] py-32 px-6 md:px-12 border-t border-white/5 overflow-hidden">
            {/* Background glow */}
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-[600px] bg-emerald-500/5 rounded-full blur-[150px] pointer-events-none" />

            <div className="max-w-6xl mx-auto relative z-10">

                {/* Section Header */}
                <div className="text-center mb-24">
                    <p className="font-mono-custom text-[11px] text-emerald-500 uppercase tracking-widest mb-4">
                        How It Works
                    </p>
                    <h2 className="text-3xl md:text-5xl text-white font-tech font-light tracking-tight">
                        From Workflow to Production Tool
                    </h2>
                </div>

                {/* — The Magic Moment — */}
                <div className="mb-28">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-1.5 mb-8">
                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                            <span className="font-mono-custom text-[10px] text-emerald-400 uppercase tracking-widest">The Magic</span>
                        </div>
                        <h3 className="text-3xl md:text-4xl text-white font-tech font-light tracking-tight leading-snug">
                            Convert AI workflows into <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-200 via-emerald-400 to-emerald-600">
                                real creative tools.
                            </span>
                        </h3>
                    </div>

                    {/* Workflow → Tool visual */}
                    <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center gap-6 md:gap-4">
                        {/* Workflow side */}
                        <div className="flex-1 w-full bg-[#0e0e10] rounded-xl border border-white/5 p-6">
                            <div className="flex items-center gap-2 mb-4">
                                <Icon icon="solar:graph-new-bold-duotone" width="18" className="text-zinc-500" />
                                <span className="font-mono-custom text-[10px] text-zinc-500 uppercase tracking-widest">Complex Workflow</span>
                            </div>
                            {/* Faux node graph */}
                            <div className="relative h-28 rounded-lg bg-[#0a0a0c] border border-white/5 overflow-hidden">
                                <div className="absolute top-4 left-4 w-16 h-8 rounded bg-zinc-800/80 border border-zinc-700/50" />
                                <div className="absolute top-3 left-24 w-20 h-10 rounded bg-zinc-800/80 border border-zinc-700/50" />
                                <div className="absolute bottom-4 left-8 w-14 h-8 rounded bg-zinc-800/80 border border-zinc-700/50" />
                                <div className="absolute bottom-3 right-6 w-18 h-10 rounded bg-zinc-800/80 border border-zinc-700/50" />
                                <div className="absolute top-6 right-8 w-16 h-8 rounded bg-zinc-800/80 border border-zinc-700/50" />
                                {/* Connection lines */}
                                <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                                    <line x1="80" y1="24" x2="96" y2="20" stroke="rgba(113,113,122,0.3)" strokeWidth="1" />
                                    <line x1="144" y1="28" x2="180" y2="36" stroke="rgba(113,113,122,0.3)" strokeWidth="1" />
                                    <line x1="72" y1="88" x2="160" y2="80" stroke="rgba(113,113,122,0.3)" strokeWidth="1" />
                                </svg>
                            </div>
                        </div>

                        {/* Arrow */}
                        <div className="flex flex-col items-center gap-1 shrink-0">
                            <div className="w-[1px] h-6 md:w-8 md:h-[1px] bg-gradient-to-b md:bg-gradient-to-r from-zinc-700 to-emerald-500/60" />
                            <Icon icon="solar:alt-arrow-right-bold" width="20" className="text-emerald-500/60 hidden md:block" />
                            <Icon icon="solar:alt-arrow-down-bold" width="20" className="text-emerald-500/60 md:hidden" />
                            <div className="w-[1px] h-6 md:w-8 md:h-[1px] bg-gradient-to-b md:bg-gradient-to-r from-emerald-500/60 to-zinc-700" />
                        </div>

                        {/* Tool side */}
                        <div className="flex-1 w-full bg-[#0e0e10] rounded-xl border border-emerald-500/20 p-6 shadow-[0_0_40px_rgba(16,185,129,0.04)]">
                            <div className="flex items-center gap-2 mb-4">
                                <Icon icon="solar:widget-5-bold-duotone" width="18" className="text-emerald-400" />
                                <span className="font-mono-custom text-[10px] text-emerald-400 uppercase tracking-widest">Production Tool</span>
                            </div>
                            {/* Clean app UI */}
                            <div className="relative h-28 rounded-lg bg-[#0a0a0c] border border-emerald-500/10 overflow-hidden p-4 flex flex-col justify-between">
                                <div className="flex items-center gap-2">
                                    <div className="w-6 h-6 rounded bg-emerald-500/15 flex items-center justify-center">
                                        <Icon icon="solar:gallery-bold-duotone" width="14" className="text-emerald-400" />
                                    </div>
                                    <div className="h-2 w-24 rounded-full bg-zinc-700/50" />
                                </div>
                                <div className="flex gap-2">
                                    <div className="h-8 flex-1 rounded bg-zinc-800/50 border border-zinc-700/30" />
                                    <div className="h-8 w-20 rounded bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center">
                                        <span className="text-[9px] font-mono-custom text-emerald-400">Generate</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* — The 4 Steps — */}
                <div>
                    <div className="text-center mb-16">
                        <h3 className="text-2xl md:text-3xl text-white font-tech font-light tracking-tight">
                            Here&apos;s how it works
                        </h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
                        {steps.map((step) => (
                            <div
                                key={step.num}
                                className="group bg-[#0e0e10] rounded-xl border border-white/5 p-6 hover:border-emerald-500/20 transition-all"
                            >
                                <div className="flex items-start gap-5">
                                    <div className="shrink-0">
                                        <div className="w-12 h-12 rounded-xl bg-[#151517] border border-white/10 flex items-center justify-center relative group-hover:border-emerald-500/30 transition-colors">
                                            <Icon icon={step.icon} width="24" className="text-zinc-400 group-hover:text-emerald-400 transition-colors" />
                                            <div className="absolute -top-2 -right-2 w-6 h-6 rounded-md bg-zinc-800 border border-white/15 flex items-center justify-center">
                                                <span className="font-mono-custom text-[9px] text-emerald-400">{step.num}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex-1 min-w-0 pt-1">
                                        <h4 className="text-lg text-white font-tech font-medium mb-2">
                                            {step.title}
                                        </h4>
                                        <p className="text-zinc-500 text-sm leading-relaxed font-light">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
