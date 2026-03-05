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
                    The Contrarian Belief
                </h2>

                <p className="text-3xl md:text-4xl lg:text-5xl text-white font-tech tracking-tight leading-tight text-center mb-16">
                    AI will <span className="text-red-400">not replace</span> creative teams — it will become <span className="text-emerald-400">infrastructure</span> embedded inside their pipelines.
                </p>

                <div className="bg-[#0c0c0e] border border-white/5 rounded-2xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-[80px] pointer-events-none"></div>

                    <div className="space-y-6 text-zinc-400 text-lg leading-relaxed font-light relative z-10">
                        <p>
                            Most of the AI industry today is racing toward a future where AI replaces creative teams and generates complete content autonomously. The prevailing narrative suggests that the end state of generative AI is fully automated creativity — films, advertisements, and campaigns produced entirely by machines.
                        </p>
                        <p className="text-white font-medium">
                            We believe this assumption is fundamentally wrong.
                        </p>
                        <p>
                            As AI-generated content floods the internet, audiences are already beginning to experience the early signs of what many call "AI slop" — an overwhelming amount of synthetic, low-context content that lacks human intent and authenticity. As this trend accelerates, authenticity will become more valuable, not less.
                        </p>
                        <p>
                            The content that resonates most deeply with audiences will not be purely AI-generated. Instead, it will emerge from hybrid creative pipelines where human storytelling, artistic direction, and cultural understanding are combined with AI-powered tools that dramatically increase the speed and scale of production.
                        </p>
                        <p>
                            In this future, AI does not replace the creative team. It becomes embedded inside the production pipeline — assisting with ideation, previsualization, iteration, editing, and scaling of creative output.
                        </p>
                        <p className="text-emerald-400 font-medium">
                            The real revolution in generative AI will not be autonomous creativity. It will be AI-enabled creative infrastructure.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
}
