"use client";
import { Icon } from "@iconify/react";

const stackLayers = [
    {
        id: "models",
        label: "AI MODELS",
        sublabel: "Flux · Stable Diffusion · LLMs · ControlNet",
        icon: "solar:cpu-bolt-bold-duotone",
        color: "zinc",
        textColor: "text-zinc-400",
        borderColor: "border-zinc-700/50",
        bgColor: "bg-zinc-900/40",
        tagColor: "text-zinc-500",
    },
    {
        id: "workflows",
        label: "WORKFLOWS",
        sublabel: "ComfyUI · Custom AI Pipelines",
        icon: "solar:graph-new-bold-duotone",
        color: "zinc",
        textColor: "text-zinc-400",
        borderColor: "border-zinc-700/50",
        bgColor: "bg-zinc-900/40",
        tagColor: "text-zinc-500",
    },
    {
        id: "flowscale",
        label: "FLOWSCALE",
        sublabel: "Convert workflows · Deploy AI applications · Run inside studio infrastructure",
        icon: "solar:widget-5-bold-duotone",
        isHighlighted: true,
        textColor: "text-emerald-300",
        borderColor: "border-emerald-500/40",
        bgColor: "bg-emerald-950/30",
        tagColor: "text-emerald-400",
    },
    {
        id: "production",
        label: "PRODUCTION TOOLS",
        sublabel: "Simple applications used by artists and creative teams",
        icon: "solar:palette-bold-duotone",
        color: "zinc",
        textColor: "text-zinc-400",
        borderColor: "border-zinc-700/50",
        bgColor: "bg-zinc-900/40",
        tagColor: "text-zinc-500",
    },
];

export default function PlatformStack() {
    return (
        <section className="relative z-20 bg-[#080809] border-t border-white/5 py-28 px-6 md:px-12 overflow-hidden">
            {/* Subtle glow behind stack */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-xl h-[500px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-6xl mx-auto relative z-10">

                {/* Section Header */}
                <div className="text-center mb-16">
                    <p className="font-mono-custom text-[11px] text-emerald-500 uppercase tracking-widest mb-4">
                        Architecture
                    </p>
                    <h2 className="text-3xl md:text-5xl text-white font-tech font-light tracking-tight mb-6">
                        A New Layer in the <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-200 via-emerald-400 to-emerald-600">
                            Creative AI Stack
                        </span>
                    </h2>
                    <p className="text-lg text-zinc-400 font-light max-w-2xl mx-auto leading-relaxed">
                        Generative AI workflows are powerful, but difficult to deploy, manage, and use in real production environments. FlowScale introduces the missing infrastructure layer.
                    </p>
                </div>

                {/* Stack Diagram */}
                <div className="flex flex-col items-center gap-0 max-w-2xl mx-auto">
                    {stackLayers.map((layer, idx) => (
                        <div key={layer.id} className="w-full flex flex-col items-center">
                            {/* Layer Card */}
                            <div
                                className={`w-full rounded-xl border px-8 py-5 flex items-center gap-5 transition-all group ${layer.bgColor} ${layer.borderColor} ${layer.isHighlighted ? "shadow-[0_0_40px_rgba(16,185,129,0.08)] ring-1 ring-emerald-500/20" : ""}`}
                            >
                                <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${layer.isHighlighted ? "bg-emerald-500/15 text-emerald-400" : "bg-zinc-800/60 text-zinc-500"}`}>
                                    <Icon icon={layer.icon} width="22" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className={`font-mono-custom text-[10px] uppercase tracking-widest font-medium mb-1 ${layer.tagColor}`}>
                                        {layer.label}
                                    </div>
                                    <div className={`text-sm font-light leading-snug ${layer.isHighlighted ? "text-emerald-200/80" : "text-zinc-500"}`}>
                                        {layer.sublabel}
                                    </div>
                                </div>
                                {layer.isHighlighted && (
                                    <div className="shrink-0 hidden sm:flex items-center gap-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-3 py-1">
                                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                                        <span className="font-mono-custom text-[9px] text-emerald-400 uppercase tracking-widest">Active</span>
                                    </div>
                                )}
                            </div>

                            {/* Connector Arrow */}
                            {idx < stackLayers.length - 1 && (
                                <div className="flex flex-col items-center my-1">
                                    <div className={`w-[1px] h-5 ${idx === 1 ? "bg-gradient-to-b from-zinc-700 to-emerald-500/50" : idx === 2 ? "bg-gradient-to-b from-emerald-500/50 to-zinc-700" : "bg-zinc-800"}`} />
                                    <Icon
                                        icon="solar:alt-arrow-down-bold"
                                        width="14"
                                        className={idx === 1 || idx === 2 ? "text-emerald-500/60" : "text-zinc-700"}
                                    />
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Bottom Explanation */}
                <p className="text-center text-zinc-500 text-sm font-light max-w-xl mx-auto mt-12 leading-relaxed">
                    FlowScale sits between experimental AI workflows and production pipelines — converting complex node graphs into reliable tools that creative teams can use safely across their studio infrastructure.
                </p>

            </div>
        </section>
    );
}
