"use client";
import { Icon } from "@iconify/react";

export default function AboutVision() {
    return (
        <section className="relative z-20 bg-[#0a0a0a] border-t border-white/5 py-32 px-6 md:px-12">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">

                {/* Left / Visual */}
                <div className="w-full lg:w-1/2 relative">
                    <div className="absolute inset-0 bg-emerald-500/10 blur-[100px] rounded-full"></div>

                    <div className="relative bg-[#111113] rounded-2xl border border-white/10 p-8 shadow-2xl skew-y-1 transform-gpu">
                        <div className="flex items-center gap-3 border-b border-white/5 pb-4 mb-6">
                            <Icon icon="solar:eye-scan-bold-duotone" className="text-emerald-400 w-6 h-6" />
                            <span className="text-white font-tech font-medium tracking-wide">FlowScale Vision</span>
                        </div>

                        <p className="text-xl md:text-2xl text-zinc-300 font-light leading-relaxed font-tech">
                            A world where every creative team runs its own <span className="text-white font-normal relative inline-block">
                                sovereign AI
                                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-emerald-400"></span>
                            </span> production pipeline, amplifying human imagination at massive scale.
                        </p>
                    </div>

                    {/* Decorative nodes */}
                    <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[url('/bg-grid-pattern')] opacity-20 pointer-events-none rounded-lg z-0"></div>
                    <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#0c0c0e] border border-white/10 rounded-lg flex items-center justify-center shadow-lg animate-float">
                        <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                    </div>
                </div>

                {/* Right / Content */}
                <div className="w-full lg:w-1/2">
                    <div className="inline-flex items-center gap-2 mb-6">
                        <span className="font-mono-custom text-[11px] text-zinc-500 uppercase tracking-widest">
                            The Future of Production
                        </span>
                    </div>

                    <h2 className="text-3xl md:text-5xl text-white font-tech font-light tracking-tight mb-8">
                        Amplifying Human Imagination
                    </h2>

                    <div className="space-y-6 text-zinc-400 text-base md:text-lg leading-relaxed font-light">
                        <p>
                            We envision a world where creative teams operate their own sovereign AI infrastructure—systems they fully control and integrate directly into their pipelines.
                        </p>
                        <p>
                            Instead of relying on fragmented, opaque cloud platforms, AI becomes a unified, local layer inside the creative workflow. Studios govern their own models, workflows, and data policies.
                        </p>
                        <p>
                            This dramatically increases creative throughput. Small teams can execute massive ideas, and independent studios can deliver at the scale of large production houses.
                        </p>
                        <p className="text-zinc-200 font-medium">
                            Creativity is no longer constrained by the cost and friction of production. AI amplifies human imagination.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
}
