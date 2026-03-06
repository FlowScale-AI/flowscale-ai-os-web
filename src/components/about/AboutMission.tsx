"use client";
import { Icon } from "@iconify/react";

export default function AboutMission() {
    const points = [
        {
            title: "Consolidate tooling",
            desc: "Stop relying on disconnected tools. Run AI workflows as part of internal infrastructure.",
            icon: "solar:layers-minimalistic-bold-duotone"
        },
        {
            title: "Production orchestration",
            desc: "Deploy, orchestrate, and scale AI-powered pipelines in a structured way.",
            icon: "solar:server-square-bold-duotone"
        },
        {
            title: "Control and governance",
            desc: "Maintain absolute control over workflows, studio data, and creative processes.",
            icon: "solar:shield-check-bold-duotone"
        }
    ];

    return (
        <section className="relative z-20 bg-[#080809] border-t border-white/5 py-32 px-6 md:px-12 overflow-hidden">

            {/* Background Graphic */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 aspect-square max-w-[800px] opacity-10 pointer-events-none">
                <svg viewBox="0 0 100 100" className="w-full h-full text-emerald-500 animate-spin-slow" fill="currentColor">
                    <path d="M50 0 A 50 50 0 0 0 0 50 L 25 50 A 25 25 0 0 1 50 25 Z" />
                    <path d="M100 50 A 50 50 0 0 0 50 0 L 50 25 A 25 25 0 0 1 75 50 Z" />
                    <path d="M50 100 A 50 50 0 0 0 100 50 L 75 50 A 25 25 0 0 1 50 75 Z" />
                    <path d="M0 50 A 50 50 0 0 0 50 100 L 50 75 A 25 25 0 0 1 25 50 Z" />
                </svg>
            </div>

            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-start relative z-10">

                {/* Left / Text */}
                <div className="w-full lg:w-1/2">
                    <div className="inline-flex items-center gap-2 mb-6">
                        <span className="font-mono-custom text-[11px] text-emerald-500 uppercase tracking-widest">
                            Our Mission
                        </span>
                    </div>

                    <h2 className="text-3xl md:text-5xl text-white font-tech font-light tracking-tight mb-8">
                        Build the infrastructure that allows teams to scale AI inside their workflows.
                    </h2>

                    <div className="space-y-6 text-zinc-400 text-lg leading-relaxed font-light mb-12">
                        <p>
                            Today's generative AI tools are fragmented and difficult to integrate into professional environments. They lack the reliability, control, and scalability that studios demand.
                        </p>
                        <p className="text-white font-medium">
                            FlowScale exists to change this.
                        </p>
                        <p>
                            We turn experimental AI workflows into reliable infrastructure. This allows creative teams to focus entirely on storytelling, design, and imagination, while we handle the acceleration behind the scenes.
                        </p>
                        <blockquote className="border-l-2 border-emerald-500/50 pl-6 py-2 mt-8">
                            <p className="text-xl text-zinc-300 font-tech leading-snug">
                                "Our goal is not to automate creativity. Our goal is to build the systems that allow creative teams to create more than ever before."
                            </p>
                        </blockquote>
                    </div>
                </div>

                {/* Right / Points */}
                <div className="w-full lg:w-1/2 flex flex-col gap-6 lg:pt-16">
                    {points.map((point, idx) => (
                        <div key={idx} className="bg-[#0c0c0e] border border-white/5 rounded-2xl p-6 flex gap-6 hover:border-emerald-500/30 transition-colors group">
                            <div className="w-12 h-12 rounded-lg bg-[#111113] border border-white/5 flex items-center justify-center shrink-0 group-hover:bg-emerald-500/10 transition-colors">
                                <Icon icon={point.icon} className="text-emerald-400 w-6 h-6" />
                            </div>
                            <div className="flex-1 pt-1">
                                <h3 className="text-lg text-white font-medium mb-2 font-tech">{point.title}</h3>
                                <p className="text-zinc-500 text-sm leading-relaxed">{point.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
