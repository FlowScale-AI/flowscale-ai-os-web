"use client";
import { Icon } from "@iconify/react";

export default function PlatformProblem() {
    const problems = [
        {
            icon: "solar:layers-minimalistic-bold-duotone",
            title: "Fragmented AI Tooling",
            description: "Creative teams rely on dozens of AI tools, each with its own subscription, workflow, and limitations."
        },
        {
            icon: "solar:shield-warning-bold-duotone",
            title: "Creative IP at Risk",
            description: "Cloud AI tools process sensitive assets remotely, forcing studios to trust third-party infrastructure with intellectual property."
        },
        {
            icon: "solar:programming-bold-duotone",
            title: "Built for Engineers, Not Artists",
            description: "Local AI solutions exist, but they are complex workflow tools designed for engineers rather than creative teams."
        }
    ];

    return (
        <section className="relative z-20 bg-[#080809] border-t border-white/5 py-24 px-6 md:px-12">
            <div className="max-w-7xl mx-auto flex flex-col items-center">

                {/* Section Header */}
                <div className="text-center max-w-3xl mb-16">
                    <h2 className="text-3xl md:text-5xl text-white font-tech font-light tracking-tight mb-6">
                        Creative AI is powerful — but <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-500">
                            impossible to run safely at scale.
                        </span>
                    </h2>
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
