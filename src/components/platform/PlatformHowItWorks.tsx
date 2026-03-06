"use client";
import { Icon } from "@iconify/react";

export default function PlatformHowItWorks() {
    const steps = [
        {
            num: "1",
            title: "Build",
            description: "Technical teams create AI workflows using ComfyUI or custom pipelines.",
            icon: "solar:programming-bold-duotone"
        },
        {
            num: "2",
            title: "Convert",
            description: "FlowScale converts those workflows into simple production applications.",
            icon: "solar:refresh-square-bold-duotone"
        },
        {
            num: "3",
            title: "Deploy",
            description: "Applications run across studio infrastructure and can be used by artists and teams.",
            icon: "solar:rocket-bold-duotone"
        }
    ];

    return (
        <section className="relative z-20 bg-[#080809] py-32 px-6 md:px-12 border-t border-white/5">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-20">
                    <p className="font-mono-custom text-[11px] text-emerald-500 uppercase tracking-widest mb-4">
                        How It Works
                    </p>
                    <h2 className="text-3xl md:text-5xl text-white font-tech font-light tracking-tight">
                        From Workflow to Production Tool
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                    {/* Connecting Line (desktop) */}
                    <div className="hidden md:block absolute top-[60px] left-[15%] right-[15%] h-[1px] bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent z-0"></div>

                    {steps.map((step, idx) => (
                        <div key={idx} className="relative z-10 flex flex-col items-center text-center">
                            {/* Number/Icon badge */}
                            <div className="w-24 h-24 rounded-2xl bg-[#111113] border border-white/10 flex flex-col items-center justify-center mb-8 relative group shadow-xl">
                                <div className="absolute inset-0 bg-emerald-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-lg bg-zinc-800 border border-white/20 flex items-center justify-center text-xs font-mono-custom text-emerald-400">
                                    {step.num}
                                </div>
                                <Icon icon={step.icon} width="36" className="text-zinc-300 group-hover:text-white transition-colors" />
                            </div>

                            <h3 className="text-2xl text-white font-tech font-medium mb-4">
                                {step.title}
                            </h3>
                            <p className="text-zinc-400 text-base leading-relaxed max-w-xs font-light">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
