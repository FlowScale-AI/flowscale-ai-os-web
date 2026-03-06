"use client";
import { Icon } from "@iconify/react";

export default function PlatformProblem() {
    const problems = [
        {
            icon: "solar:layers-minimalistic-bold-duotone",
            title: "Fragmented Tooling",
            description: "Studios rely on dozens of disconnected AI tools, each with different interfaces, subscriptions, and limitations."
        },
        {
            icon: "solar:shield-warning-bold-duotone",
            title: "Creative IP at Risk",
            description: "Most AI tools operate on cloud infrastructure, forcing studios to send sensitive assets and client work outside their production environment."
        },
        {
            icon: "solar:programming-bold-duotone",
            title: "Workflows Built for Engineers",
            description: "Local AI workflows exist, but they are complex node graphs designed for technical users rather than artists."
        }
    ];

    return (
        <section className="relative z-20 bg-[#0a0a0a] border-t border-white/5 py-24 px-6 md:px-12">
            <div className="max-w-7xl mx-auto flex flex-col items-center">

                {/* Section Header */}
                <div className="text-center max-w-3xl mb-16">
                    <p className="font-mono-custom text-[11px] text-red-400/70 uppercase tracking-widest mb-4">
                        The Problem
                    </p>
                    <h2 className="text-3xl md:text-5xl text-white font-tech font-light tracking-tight mb-6">
                        AI Workflows Are Powerful — <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-500">
                            But Not Production Ready
                        </span>
                    </h2>
                    <p className="text-zinc-500 text-lg font-light leading-relaxed">
                        Creative teams experimenting with generative AI encounter three major barriers.
                    </p>
                </div>

                {/* Problem grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
                    {problems.map((problem, idx) => (
                        <div
                            key={idx}
                            className="group relative rounded-2xl bg-[#0c0c0e] border border-white/5 p-8 overflow-hidden hover:bg-[#111113] hover:border-white/10 transition-all hover:-translate-y-1 shadow-lg"
                        >
                            <div className="w-12 h-12 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400 mb-6">
                                <Icon icon={problem.icon} width="28" />
                            </div>
                            <h3 className="text-xl text-white font-medium mb-4 font-tech tracking-tight">
                                {problem.title}
                            </h3>
                            <p className="text-zinc-400 text-sm leading-relaxed font-light">
                                {problem.description}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
