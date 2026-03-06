"use client";
import { Icon } from "@iconify/react";

export default function PlatformSolution() {
    const features = [
        {
            title: "Workflow → Application Conversion",
            description: "Transform complex AI workflows into simple applications artists can use without interacting with nodes or code.",
            icon: "solar:magic-stick-3-bold-duotone",
        },
        {
            title: "Local AI Infrastructure",
            description: "Run generative models locally and maintain full control over creative assets, models, and data.",
            icon: "solar:server-square-bold-duotone",
        },
        {
            title: "Pipeline Integration",
            description: "Deploy AI applications directly inside studio pipelines and internal production systems.",
            icon: "solar:routing-bold-duotone",
        },
        {
            title: "Hybrid Model Access",
            description: "Use local models by default while integrating cloud models when required.",
            icon: "solar:cloud-check-bold-duotone",
        }
    ];

    return (
        <section className="relative z-20 bg-[#080809] py-32 px-6 md:px-12 border-t border-white/5 overflow-hidden">
            {/* Glow Effect */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[500px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto relative z-10 flex flex-col lg:flex-row gap-16 lg:items-center">

                {/* Text Content */}
                <div className="lg:w-1/2">
                    <p className="font-mono-custom text-[11px] text-emerald-500 uppercase tracking-widest mb-6">
                        The Solution
                    </p>
                    <h2 className="text-4xl md:text-5xl text-white font-tech font-light tracking-tight mb-8 leading-[1.1]">
                        Turn AI Workflows Into <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-200 via-emerald-400 to-emerald-600">
                            Production Infrastructure
                        </span>
                    </h2>
                    <div className="space-y-5 text-zinc-400 text-lg font-light leading-relaxed">
                        <p>
                            Technical teams build workflows using open tools such as ComfyUI or custom pipelines.
                        </p>
                        <p>
                            FlowScale converts those workflows into production‑ready applications.
                        </p>
                        <p>
                            These applications run locally across studio infrastructure, allowing artists to use powerful AI tools without interacting with node graphs or code.
                        </p>
                    </div>
                </div>

                {/* Feature Grid */}
                <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {features.map((feature, idx) => (
                        <div
                            key={idx}
                            className="bg-[#111113]/80 backdrop-blur-md rounded-xl p-6 border border-white/5 hover:bg-zinc-900/80 hover:border-emerald-500/30 transition-all group"
                        >
                            <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-5 group-hover:scale-110 transition-transform">
                                <Icon icon={feature.icon} width="24" />
                            </div>
                            <h3 className="text-white font-medium mb-2 font-tech text-lg">
                                {feature.title}
                            </h3>
                            <p className="text-zinc-500 text-sm leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
