"use client";
import { Icon } from "@iconify/react";

export default function PlatformPricing() {
    return (
        <section className="relative z-20 bg-[#080809] py-32 px-6 md:px-12 border-t border-white/5">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-16">
                    <p className="font-mono-custom text-[11px] text-emerald-500 uppercase tracking-widest mb-4">
                        Pricing
                    </p>
                    <h2 className="text-3xl md:text-5xl text-white font-tech font-light tracking-tight mb-4">
                        Start Free. <br />
                        <span className="text-zinc-500">Scale to Production.</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    {/* Community Plan */}
                    <div className="bg-[#0c0c0e] rounded-2xl border border-white/5 p-8 flex flex-col relative overflow-hidden group hover:border-white/10 transition-colors">
                        {/* Plan Header */}
                        <div className="mb-8">
                            <h3 className="text-2xl text-white font-tech font-medium mb-2">Community</h3>
                            <div className="text-3xl text-white font-tech mb-4">Free</div>
                            <p className="text-zinc-500 text-sm leading-relaxed">
                                For individuals and small teams experimenting with AI workflows.
                            </p>
                        </div>

                        {/* Features */}
                        <div className="flex-1">
                            <div className="space-y-4 mb-10">
                                <div className="flex items-start gap-3">
                                    <Icon icon="solar:check-circle-bold-duotone" className="text-zinc-400 w-5 h-5 shrink-0" />
                                    <span className="text-zinc-300 text-sm">Workflow conversion</span>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Icon icon="solar:check-circle-bold-duotone" className="text-zinc-400 w-5 h-5 shrink-0" />
                                    <span className="text-zinc-300 text-sm">Local AI tools</span>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Icon icon="solar:check-circle-bold-duotone" className="text-zinc-400 w-5 h-5 shrink-0" />
                                    <span className="text-zinc-300 text-sm">Open source platform</span>
                                </div>
                            </div>
                        </div>

                        {/* CTA */}
                        <button className="w-full flex items-center justify-center gap-2 bg-zinc-800 hover:bg-zinc-700 text-white text-sm font-medium rounded-md px-6 py-3 transition-colors border border-white/5">
                            <span>Download</span>
                        </button>
                    </div>

                    {/* Enterprise Plan */}
                    <div className="bg-[#111113] rounded-2xl border border-emerald-500/20 p-8 flex flex-col relative overflow-hidden shadow-[0_0_40px_rgba(16,185,129,0.05)]">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-[80px] pointer-events-none"></div>

                        <div className="absolute top-4 right-6">
                            <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-3 py-1 rounded-full text-[10px] font-mono-custom tracking-wider uppercase">
                                Recommended
                            </span>
                        </div>

                        {/* Plan Header */}
                        <div className="mb-8 relative z-10">
                            <h3 className="text-2xl text-white font-tech font-medium mb-2">Enterprise</h3>
                            <div className="text-xl text-emerald-400 font-tech font-medium mb-4 mt-2">Custom</div>
                            <p className="text-zinc-400 text-sm leading-relaxed">
                                For studios deploying AI infrastructure at scale.
                            </p>
                        </div>

                        {/* Features */}
                        <div className="flex-1 relative z-10">
                            <div className="space-y-4 mb-10">
                                <div className="flex items-start gap-3">
                                    <Icon icon="solar:check-circle-bold-duotone" className="text-emerald-500 w-5 h-5 shrink-0" />
                                    <span className="text-zinc-200 text-sm">Multi‑node GPU clusters</span>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Icon icon="solar:check-circle-bold-duotone" className="text-emerald-500 w-5 h-5 shrink-0" />
                                    <span className="text-zinc-200 text-sm">Air‑gapped deployments</span>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Icon icon="solar:check-circle-bold-duotone" className="text-emerald-500 w-5 h-5 shrink-0" />
                                    <span className="text-zinc-200 text-sm">Studio pipeline integration</span>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Icon icon="solar:check-circle-bold-duotone" className="text-emerald-500 w-5 h-5 shrink-0" />
                                    <span className="text-zinc-200 text-sm">Dedicated support</span>
                                </div>
                            </div>
                        </div>

                        {/* CTA */}
                        <a href="https://cal.com/aman-flowscale/enterprise" target="_blank" rel="noopener noreferrer" className="relative z-10 w-full flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-emerald-950 text-sm font-semibold rounded-md px-6 py-3 transition-colors">
                            <span>Book Enterprise Demo</span>
                        </a>
                    </div>

                </div>
            </div>
        </section>
    );
}
