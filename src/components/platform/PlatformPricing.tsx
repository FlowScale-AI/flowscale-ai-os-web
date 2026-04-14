"use client";
import { Icon } from "@iconify/react";
import Link from "next/link";

export default function PlatformPricing() {
    return (
        <section className="relative z-20 bg-[#080809] py-32 px-6 md:px-12 border-t border-white/5">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <p className="font-mono-custom text-[11px] text-emerald-500 uppercase tracking-widest mb-4">
                        Pricing
                    </p>
                    <h2 className="text-3xl md:text-5xl text-white font-tech font-light tracking-tight mb-4">
                        Free for individuals. <br />
                        <span className="text-zinc-500">Scale to Production.</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    {/* Community Plan */}
                    <div className="bg-[#0c0c0e] rounded-2xl border border-white/5 p-10 flex flex-col relative overflow-hidden shadow-lg hover:border-white/10 transition-all">
                        <div className="mb-8">
                            <h3 className="text-3xl text-white font-tech font-medium mb-3">Community</h3>
                            <div className="text-4xl text-white font-tech mb-4">$0 <span className="text-xl text-zinc-500">/ forever</span></div>
                            <p className="text-zinc-400 text-sm leading-relaxed">
                                Completely free and open source. For individuals and teams experimenting with AI workflows.
                            </p>
                        </div>

                        <div className="flex-1">
                            <div className="space-y-4 mb-10">
                                <div className="flex items-start gap-3">
                                    <Icon icon="solar:check-circle-bold-duotone" className="text-zinc-300 w-5 h-5 shrink-0" />
                                    <span className="text-zinc-200">Unlimited local & private cloud jobs</span>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Icon icon="solar:check-circle-bold-duotone" className="text-zinc-300 w-5 h-5 shrink-0" />
                                    <span className="text-zinc-200">Multi-GPU scheduling (single machine)</span>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Icon icon="solar:check-circle-bold-duotone" className="text-zinc-300 w-5 h-5 shrink-0" />
                                    <span className="text-zinc-200">Convert workflows to local apps</span>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Icon icon="solar:check-circle-bold-duotone" className="text-zinc-300 w-5 h-5 shrink-0" />
                                    <span className="text-zinc-200">Everything open-sourced</span>
                                </div>
                            </div>
                        </div>

                        <Link href="/download" className="w-full flex items-center justify-center gap-2 bg-zinc-800 hover:bg-zinc-700 text-white text-sm font-medium rounded-md px-6 py-4 transition-colors">
                            <Icon icon="solar:download-square-bold" width="18" />
                            <span>Download AIOS</span>
                        </Link>
                    </div>

                    {/* Enterprise Plan */}
                    <div className="bg-[#111113] rounded-2xl border border-emerald-500/20 p-10 flex flex-col relative overflow-hidden shadow-[0_0_40px_rgba(16,185,129,0.05)] group hover:border-emerald-500/40 transition-colors">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-[80px] pointer-events-none group-hover:bg-emerald-500/20 transition-all"></div>
                        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-emerald-500/5 to-transparent pointer-events-none"></div>

                        <div className="mb-8 relative z-10">
                            <h3 className="text-3xl text-emerald-400 font-tech font-medium mb-3">Enterprise / Studio</h3>
                            <div className="text-4xl text-white font-tech mb-4">Custom</div>
                            <p className="text-zinc-400 text-sm leading-relaxed">
                                For studios deploying AI infrastructure at scale. Paid tier tailored to your studio's needs.
                            </p>
                        </div>

                        <div className="flex-1 relative z-10">
                            <div className="space-y-4 mb-10">
                                <div className="flex items-start gap-3">
                                    <Icon icon="solar:check-circle-bold-duotone" className="text-emerald-500 w-5 h-5 shrink-0" />
                                    <span className="text-zinc-200">Custom integrations with DCC tools (Blender, Unreal, Maya, etc.)</span>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Icon icon="solar:check-circle-bold-duotone" className="text-emerald-500 w-5 h-5 shrink-0" />
                                    <span className="text-zinc-200">Custom AI tool development</span>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Icon icon="solar:check-circle-bold-duotone" className="text-emerald-500 w-5 h-5 shrink-0" />
                                    <span className="text-zinc-200">Custom infra deployments</span>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Icon icon="solar:check-circle-bold-duotone" className="text-emerald-500 w-5 h-5 shrink-0" />
                                    <span className="text-zinc-200">Streamlined assets management</span>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Icon icon="solar:check-circle-bold-duotone" className="text-emerald-500 w-5 h-5 shrink-0" />
                                    <span className="text-zinc-200">Dedicated support & consulting</span>
                                </div>
                            </div>
                        </div>

                        <Link href="https://cal.com/aman-flowscale/enterprise" target="_blank" rel="noopener noreferrer" className="relative z-10 w-full flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-emerald-950 text-sm font-semibold rounded-md px-6 py-4 transition-colors">
                            <Icon icon="solar:phone-calling-bold-duotone" width="18" />
                            <span>Book Enterprise Demo</span>
                        </Link>
                    </div>

                </div>
            </div>
        </section>
    );
}
