"use client";
import { Icon } from "@iconify/react";

export default function PlatformWhatYouGet() {
    return (
        <section className="relative z-20 bg-[#0a0a0a] border-t border-white/5 py-32 px-6 md:px-12 overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-[400px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-4xl mx-auto text-center relative z-10 mb-20">
                <p className="font-mono-custom text-[11px] text-emerald-500 uppercase tracking-widest mb-4">
                    What You Get
                </p>
                <h2 className="text-4xl md:text-5xl text-white font-tech font-light tracking-tight mb-6">
                    Ready-to-use AI tools <br className="hidden md:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-200 via-emerald-400 to-emerald-600">— running on your full compute.</span>
                </h2>
                <p className="text-xl text-zinc-400 font-light max-w-2xl mx-auto">
                    AIOS combines two things:
                </p>
            </div>

            {/* Aesthetic Bento Boxes */}
            <div className="max-w-5xl mx-auto relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    {/* Box 1: Tools */}
                    <div className="bg-[#0c0c0e] border border-white/5 hover:border-white/10 rounded-3xl p-8 md:p-10 shadow-2xl relative overflow-hidden group transition-colors">
                        {/* Abstract UI Illustration */}
                        <div className="h-56 mb-8 relative flex items-center justify-center">
                            {/* Glow */}
                            <div className="absolute inset-0 bg-emerald-500/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                            {/* App Window Representation */}
                            <div className="w-64 h-40 bg-[#111113] border border-white/10 rounded-xl shadow-2xl flex flex-col overflow-hidden relative z-10 transform group-hover:-translate-y-2 group-hover:scale-105 transition-all duration-500">
                                {/* Header */}
                                <div className="h-6 bg-white/5 border-b border-white/5 flex items-center px-3 gap-1.5">
                                    <div className="w-2 h-2 rounded-full bg-zinc-700"></div>
                                    <div className="w-2 h-2 rounded-full bg-zinc-700"></div>
                                    <div className="w-2 h-2 rounded-full bg-zinc-700"></div>
                                </div>
                                {/* Body */}
                                <div className="flex-1 flex p-3 gap-3">
                                    {/* Sidebar Placeholder */}
                                    <div className="w-16 bg-[#18181b] rounded flex flex-col gap-2 p-2 border border-white/5">
                                        <div className="h-2 w-full bg-white/10 rounded"></div>
                                        <div className="h-2 w-full bg-white/10 rounded"></div>
                                        <div className="h-2 w-2/3 bg-white/10 rounded"></div>
                                        <div className="mt-auto h-4 w-full bg-emerald-500/20 rounded"></div>
                                    </div>
                                    {/* Main Area Placeholder */}
                                    <div className="flex-1 bg-[#18181b] rounded border border-white/5 flex items-center justify-center text-zinc-600">
                                        <Icon icon="solar:gallery-bold-duotone" width="32" className="group-hover:text-emerald-500/50 transition-colors duration-500" />
                                    </div>
                                </div>
                            </div>

                            {/* Floating Icons */}
                            <div className="absolute left-[10%] top-[15%] w-12 h-12 bg-zinc-900 border border-white/10 rounded-xl flex items-center justify-center text-emerald-400 shadow-xl transform group-hover:-translate-y-4 group-hover:-rotate-12 transition-all duration-500 z-20">
                                <Icon icon="solar:magic-stick-3-bold-duotone" width="24" />
                            </div>
                            <div className="absolute right-[10%] bottom-[15%] w-12 h-12 bg-zinc-900 border border-white/10 rounded-xl flex items-center justify-center text-emerald-400 shadow-xl transform group-hover:translate-y-2 group-hover:rotate-12 transition-all duration-500 z-20 delay-75">
                                <Icon icon="solar:videocamera-record-bold-duotone" width="24" />
                            </div>
                        </div>

                        <div className="flex items-center gap-4 mb-3 relative z-10">
                            <div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500 font-mono-custom font-bold text-sm">1</div>
                            <h3 className="text-2xl text-white font-tech font-medium">Build & Run your own AI Tools</h3>
                        </div>
                        <p className="text-zinc-500 text-sm font-light leading-relaxed pl-12 relative z-10">
                            Use pre-built production-ready interfaces for generation, training, and editing. OR, build and run ComfyUI workflows as sharable AI tools.
                        </p>
                    </div>

                    {/* Box 2: Compute */}
                    <div className="bg-[#0c0c0e] border border-white/5 hover:border-white/10 rounded-3xl p-8 md:p-10 shadow-2xl relative overflow-hidden group transition-colors">
                        {/* Abstract Compute Illustration */}
                        <div className="h-56 mb-8 relative flex flex-col items-center justify-center gap-3">
                            {/* Glow */}
                            <div className="absolute inset-0 bg-emerald-500/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                            {/* GPU Bar 1 */}
                            <div className="w-full max-w-[260px] h-14 bg-[#111113] border border-emerald-500/30 rounded-xl shadow-lg flex items-center px-4 gap-4 relative z-10 transform group-hover:translate-x-2 transition-all duration-500">
                                <Icon icon="solar:cpu-bolt-bold-duotone" width="24" className="text-emerald-500" />
                                <div className="flex-1 flex flex-col gap-1.5">
                                    <div className="flex justify-between items-center text-[10px] font-mono-custom uppercase text-emerald-500">
                                        <span>Local GPU</span>
                                        <span>Allocated</span>
                                    </div>
                                    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                                        <div className="h-full bg-emerald-500 w-full animate-pulse"></div>
                                    </div>
                                </div>
                            </div>

                            {/* GPU Bar 2 */}
                            <div className="w-full max-w-[260px] h-14 bg-[#111113] border border-emerald-500/30 rounded-xl shadow-lg flex items-center px-4 gap-4 relative z-10 transform group-hover:-translate-x-2 transition-all duration-500 delay-75">
                                <Icon icon="solar:cpu-bolt-bold-duotone" width="24" className="text-emerald-500" />
                                <div className="flex-1 flex flex-col gap-1.5">
                                    <div className="flex justify-between items-center text-[10px] font-mono-custom uppercase text-emerald-500">
                                        <span>Local GPU</span>
                                        <span>Allocated</span>
                                    </div>
                                    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                                        <div className="h-full bg-emerald-500 w-full animate-[pulse_2.5s_ease-in-out_infinite_reverse]"></div>
                                    </div>
                                </div>
                            </div>

                            {/* Cloud Burst Bar */}
                            <div className="w-full max-w-[260px] h-14 bg-[#111113]/50 border border-white/10 border-dashed rounded-xl shadow-lg flex items-center px-4 gap-4 relative z-10 transform group-hover:translate-x-1 transition-all duration-500 delay-150">
                                <Icon icon="solar:cloud-plus-bold-duotone" width="24" className="text-zinc-600 group-hover:text-emerald-500/50 transition-colors" />
                                <div className="flex-1 flex flex-col gap-1.5">
                                    <div className="flex justify-between items-center text-[10px] font-mono-custom uppercase text-zinc-500 group-hover:text-emerald-500/70 transition-colors">
                                        <span>Your Private Cloud</span>
                                        <span>Standby</span>
                                    </div>
                                    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                                        <div className="h-full bg-emerald-500/50 w-0 group-hover:w-1/3 transition-all duration-1000"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 mb-3 relative z-10">
                            <div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500 font-mono-custom font-bold text-sm">2</div>
                            <h3 className="text-2xl text-white font-tech font-medium">Compute pushed to max</h3>
                        </div>
                        <p className="text-zinc-500 text-sm font-light leading-relaxed pl-12 relative z-10">
                            Automatic parallel orchestration across every connected GPU. Zero idle hardware overhead.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}
