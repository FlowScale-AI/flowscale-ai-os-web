"use client";
import { Icon } from "@iconify/react";

export default function AboutBelief() {
    return (
        <section className="relative z-20 bg-[#080809] border-t border-white/5 py-32 px-6 md:px-12">
            <div className="max-w-4xl mx-auto flex flex-col items-center">

                <div className="w-16 h-16 rounded-full bg-red-500/10 border border-red-500/20 flex flex-col items-center justify-center mb-10">
                    <Icon icon="solar:danger-triangle-bold-duotone" className="text-red-400 w-8 h-8" />
                </div>

                <h2 className="text-2xl md:text-3xl text-zinc-500 font-tech font-light tracking-tight mb-4 text-center">
                    What We Believe
                </h2>

                <p className="text-3xl md:text-4xl lg:text-5xl text-white font-tech tracking-tight leading-tight text-center mb-16">
                    AI will <span className="text-red-400">not replace</span> creative teams — it will become <span className="text-emerald-400">infrastructure</span> embedded inside their pipelines.
                </p>

                <div className="bg-[#0c0c0e] border border-white/5 rounded-2xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-[80px] pointer-events-none"></div>

                    <div className="space-y-6 text-zinc-400 text-lg leading-relaxed font-light relative z-10">
                        <p>
                            The AI industry is racing toward a future of fully automated content—where machines replace creative teams entirely.
                            <span className="text-white font-medium ml-2">We believe this assumption is fundamentally wrong.</span>
                        </p>
                        <p>
                            As synthetic content floods the internet, human authenticity will become more valuable, not less. The best work will emerge from hybrid pipelines, combining human storytelling with AI tools to dramatically increase speed and scale.
                        </p>
                        <p>
                            AI won't replace the creative team. It will become embedded inside the production process—assisting with ideation, iteration, and scaling.
                        </p>
                        <p className="text-emerald-400 font-medium">
                            The real revolution isn't autonomous creativity. It's AI-enabled creative infrastructure.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
}
