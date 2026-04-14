"use client";
import { Icon } from "@iconify/react";

export default function PlatformHowItWorks() {
    const steps = [
        {
            num: "01",
            title: "Download AIOS",
            description: "Takes minutes to install.",
            icon: "solar:download-square-bold-duotone",
        },
        {
            num: "02",
            title: "Open a tool",
            description: "Access built-in tools for generation and training.",
            icon: "solar:widget-5-bold-duotone",
        },
        {
            num: "03",
            title: "Run jobs across your GPUs",
            description: "Easily submit multiple tasks manually or via API.",
            icon: "solar:cpu-bolt-bold-duotone",
        },
        {
            num: "04",
            title: "Scale with your private cloud",
            description: "Connect your Modal.com account to burst seamlessly to your own cloud GPUs without changing tools.",
            icon: "solar:cloud-plus-bold-duotone",
        },
    ];

    const howItWorks = [
        { title: "Pick a tool (generation, training)", icon: "solar:mouse-minimalistic-bold-duotone" },
        { title: "Run multiple jobs", icon: "solar:checklist-minimalistic-bold-duotone" },
        { title: "Each GPU handles one job", icon: "solar:shield-check-bold-duotone" },
        { title: "Everything runs in parallel", icon: "solar:layers-bold-duotone" },
    ];

    return (
        <section className="relative z-20 bg-[#080809] py-32 px-6 md:px-12 border-t border-white/5 overflow-hidden">
            {/* Background glow */}
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-[600px] bg-emerald-500/5 rounded-full blur-[150px] pointer-events-none" />

            <div className="max-w-6xl mx-auto relative z-10">

                {/* — HOW IT WORKS — */}
                <div className="mb-32">
                    <div className="text-center mb-16">
                        <p className="font-mono-custom text-[11px] text-emerald-500 uppercase tracking-widest mb-4">
                            How It Works
                        </p>
                        <h2 className="text-4xl md:text-5xl text-white font-tech font-light tracking-tight">
                            Tools + compute. <br className="md:hidden" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-200 via-emerald-400 to-emerald-600">
                                One system.
                            </span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto mb-10">
                        {howItWorks.map((item, idx) => (
                            <div key={idx} className="bg-[#0e0e10] rounded-xl border border-white/5 p-6 flex flex-col items-center text-center shadow-lg hover:border-emerald-500/20 transition-colors">
                                <div className="w-12 h-12 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-4">
                                    <Icon icon={item.icon} width="24" />
                                </div>
                                <h3 className="text-white font-medium font-tech">{item.title}</h3>
                            </div>
                        ))}
                    </div>

                    <p className="text-center text-zinc-400 text-lg font-light">
                        Optional: run additional jobs on your private Modal.com GPUs.
                    </p>
                </div>

                <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-32" />

                {/* — GET STARTED — */}
                <div>
                    <div className="text-center mb-16">
                        <p className="font-mono-custom text-[11px] text-emerald-500 uppercase tracking-widest mb-4">
                            Get Started
                        </p>
                        <h3 className="text-4xl md:text-5xl text-white font-tech font-light tracking-tight">
                            From download to <br className="md:hidden" />
                            <span className="text-zinc-500">output in minutes.</span>
                        </h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
                        {steps.map((step) => (
                            <div
                                key={step.num}
                                className="group bg-[#0e0e10] rounded-xl border border-white/5 p-6 hover:border-emerald-500/20 transition-all flex flex-col"
                            >
                                <div className="mb-6 flex justify-between items-start">
                                    <div className="w-12 h-12 rounded-xl bg-[#151517] border border-white/10 flex items-center justify-center group-hover:border-emerald-500/30 transition-colors">
                                        <Icon icon={step.icon} width="24" className="text-zinc-400 group-hover:text-emerald-400 transition-colors" />
                                    </div>
                                    <div className="w-8 h-8 rounded-full bg-zinc-900 border border-white/5 flex items-center justify-center">
                                        <span className="font-mono-custom text-[10px] text-zinc-500">{step.num}</span>
                                    </div>
                                </div>
                                
                                <h4 className="text-lg text-white font-tech font-medium mb-2">
                                    {step.title}
                                </h4>
                                <p className="text-zinc-500 text-sm leading-relaxed font-light">
                                    {step.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
