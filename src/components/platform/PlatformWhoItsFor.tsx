"use client";
import { Icon } from "@iconify/react";

export default function PlatformWhoItsFor() {
    const audience = [
        {
            title: "Solo creators",
            description: "Run tools faster using all your GPUs.",
            icon: "solar:user-circle-bold-duotone"
        },
        {
            title: "Technical artists / Pipeline TDs",
            description: "Stop managing workflows and compute manually.",
            icon: "solar:settings-minimalistic-bold-duotone"
        },
        {
            title: "Studios / creative teams",
            description: "Run AI tools across your infrastructure — with full control.",
            icon: "solar:buildings-bold-duotone"
        }
    ];

    return (
        <section className="relative z-20 bg-[#0a0a0a] border-t border-white/5 py-32 px-6 md:px-12">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <p className="font-mono-custom text-[11px] text-emerald-500 uppercase tracking-widest mb-4">
                        Who It's For
                    </p>
                    <h2 className="text-3xl md:text-5xl text-white font-tech font-light tracking-tight mb-6">
                        For teams running AI <br />
                        <span className="text-emerald-400">beyond experiments.</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {audience.map((item, idx) => (
                        <div key={idx} className="bg-[#0c0c0e] hover:bg-[#111113] transition-colors rounded-2xl border border-white/5 p-8 flex flex-col group shadow-lg">
                            <div className="w-14 h-14 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(16,185,129,0.1)]">
                                <Icon icon={item.icon} width="28" />
                            </div>
                            <h3 className="text-2xl text-white font-tech font-medium mb-3">
                                {item.title}
                            </h3>
                            <p className="text-zinc-400 text-base leading-relaxed font-light">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
