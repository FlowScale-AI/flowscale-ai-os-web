"use client";
import { Icon } from "@iconify/react";
import { useState, useEffect } from "react";

export default function PlatformBuiltInTools() {
    const toolsList = [
        {
            title: "Image generation tools",
            subline: "(Z-Image Turbo, Qwen Image Edit, etc.)",
            icon: "solar:gallery-wide-bold-duotone",
            mockBtn: "Generate",
            mockContent: "🖼️ Image Generation Screenshot Here"
        },
        {
            title: "Video generation tools",
            subline: "(LTX 2.3, etc.)",
            icon: "solar:videocamera-record-bold-duotone",
            mockBtn: "Create Video",
            mockContent: "🎬 Video Generation Screenshot Here"
        },
        {
            title: "LoRA training tools",
            subline: "(train on your own data)",
            icon: "solar:cpu-bolt-line-duotone",
            mockBtn: "Start Training",
            mockContent: "📈 LoRA Training Screenshot Here"
        },
        {
            title: "Custom tools",
            subline: "(built with ComfyUI workflows)",
            icon: "solar:magic-stick-3-bold-duotone",
            mockBtn: "Run Workflow",
            mockContent: "⚙️ Custom Workflow Screenshot Here"
        },
    ];

    const [activeIdx, setActiveIdx] = useState(0);

    // Auto-switch tools every 4.5 seconds. Resets timer if user manually clicks.
    useEffect(() => {
        const timeout = setTimeout(() => {
            setActiveIdx((prev) => (prev + 1) % toolsList.length);
        }, 4500);
        return () => clearTimeout(timeout);
    }, [activeIdx, toolsList.length]);

    const activeTool = toolsList[activeIdx];

    return (
        <section className="relative z-20 bg-[#0a0a0a] border-t border-white/5 py-32 px-6 md:px-12">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">

                {/* Left content */}
                <div className="w-full lg:w-[45%]">
                    <p className="font-mono-custom text-[11px] text-emerald-500 uppercase tracking-widest mb-4">
                        Built-In Tools
                    </p>
                    <h2 className="text-3xl md:text-5xl text-white font-tech font-light tracking-tight mb-8">
                        Start using AI <br />
                        <span className="text-emerald-400">immediately.</span>
                    </h2>

                    <p className="text-lg text-zinc-400 font-light leading-relaxed mb-10">
                        AIOS comes with production-ready tools you can run instantly:
                    </p>

                    <div className="space-y-3 mb-12">
                        {toolsList.map((tool, idx) => {
                            const isActive = activeIdx === idx;
                            return (
                                <div
                                    key={idx}
                                    onClick={() => setActiveIdx(idx)}
                                    className={`flex items-start gap-4 p-4 rounded-xl cursor-pointer transition-all duration-300 ${isActive ? 'bg-[#111113] border border-white/10 shadow-[0_0_30px_rgba(16,185,129,0.03)]' : 'hover:bg-white/5 border border-transparent opacity-60 hover:opacity-100'}`}
                                >
                                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center shrink-0 transition-colors duration-300 ${isActive ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' : 'bg-white/5 text-zinc-500 border border-white/5'}`}>
                                        <Icon icon={tool.icon} width="24" />
                                    </div>
                                    <div className="pt-1">
                                        <h4 className={`font-medium text-lg font-tech transition-colors duration-300 ${isActive ? 'text-white' : 'text-zinc-300'}`}>{tool.title}</h4>
                                        <p className={`text-sm font-light mt-1 transition-colors duration-300 ${isActive ? 'text-zinc-400' : 'text-zinc-500'}`}>{tool.subline}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Right content / UI Mockup */}
                <div className="w-full lg:w-[55%] relative">
                    {/* Aesthetic Mac-like OS Window Wrapper */}
                    <div className="bg-[#0c0c0e] rounded-xl border border-white/10 shadow-[0_0_50px_rgba(16,185,129,0.05)] overflow-hidden relative group">

                        {/* Traffic lights header */}
                        <div className="h-10 bg-[#111113] border-b border-white/5 flex items-center px-4 gap-2">
                            <div className="w-3 h-3 rounded-full bg-zinc-700"></div>
                            <div className="w-3 h-3 rounded-full bg-zinc-700"></div>
                            <div className="w-3 h-3 rounded-full bg-zinc-700"></div>
                            <div className="ml-4 text-[10px] text-zinc-500 font-mono-custom tracking-widest uppercase transition-all duration-300">
                                FlowScale Tools — {activeTool.title}
                            </div>
                        </div>

                        {/* App UI Skeleton inside */}
                        <div className="p-4 flex gap-4 h-[400px]">
                            {/* Sidebar Mockup */}
                            <div className="w-1/3 border-r border-white/5 pr-4 flex flex-col gap-4">
                                <div className="h-6 w-3/4 bg-white/5 rounded"></div>
                                <div className="h-24 w-full bg-white/5 rounded-lg border border-white/5"></div>
                                <div className="h-4 w-1/2 bg-white/5 rounded"></div>
                                <div className="h-8 w-full bg-emerald-500/10 border border-emerald-500/20 rounded text-emerald-500 flex items-center justify-center text-xs font-medium transition-all duration-300">
                                    {activeTool.mockBtn}
                                </div>
                            </div>
                            {/* Main Content Area */}
                            <div className="flex-1 flex flex-col h-full relative">
                                {/* This is where the user will drop their screenshots */}
                                <div className="w-full h-full bg-[#111113] border border-white/5 rounded-lg relative overflow-hidden flex flex-col items-center justify-center group-hover:border-emerald-500/30 transition-all duration-500">
                                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                    <Icon key={`icon-${activeIdx}`} icon={activeTool.icon} className="text-zinc-700 w-12 h-12 mb-4 animate-pulse" />
                                    <span key={`text-${activeIdx}`} className="text-zinc-500 text-sm font-tech text-center px-4 animate-fade-in">
                                        {activeTool.mockContent}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Checkmarks overlay/below */}
                    <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6 relative z-10 px-2 text-center sm:text-left">
                        <div className="flex flex-col items-center sm:items-start gap-2">
                            <Icon icon="solar:round-alt-arrow-right-bold-duotone" className="text-emerald-500 w-5 h-5" />
                            <span className="text-zinc-400 text-sm">Simple UI for artists</span>
                        </div>
                        <div className="flex flex-col items-center sm:items-start gap-2">
                            <Icon icon="solar:round-alt-arrow-right-bold-duotone" className="text-emerald-500 w-5 h-5" />
                            <span className="text-zinc-400 text-sm">Backed by real models</span>
                        </div>
                        <div className="flex flex-col items-center sm:items-start gap-2">
                            <Icon icon="solar:round-alt-arrow-right-bold-duotone" className="text-emerald-500 w-5 h-5" />
                            <span className="text-zinc-400 text-sm">Runnable locally</span>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
