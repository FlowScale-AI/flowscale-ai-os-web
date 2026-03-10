"use client";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { useState, useRef } from "react";

export default function PlatformHero() {
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    const togglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <section className="relative z-20 flex flex-col items-center justify-center pt-32 pb-20 px-6 md:px-12 text-center min-h-[85vh]">
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 mb-8 bg-zinc-900/50 border border-white/10 px-4 py-1.5 rounded-full backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="font-mono-custom text-[11px] uppercase tracking-widest text-emerald-400">
                    FlowScale AIOS — v1.0 (Beta)
                </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl md:text-6xl lg:text-[5rem] font-normal text-white tracking-tight font-tech leading-[1.05] mb-8 max-w-5xl mx-auto">
                Infrastructure for <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-200 via-emerald-400 to-emerald-600">
                    AI‑Powered Creative Production.
                </span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl leading-relaxed text-zinc-400 font-light max-w-2xl mx-auto mb-8">
                FlowScale turns experimental AI workflows into production infrastructure. Build workflows once, deploy them as reliable tools across your studio, and run everything inside your own pipeline.
            </p>

            {/* Supporting Lines */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 mb-10 text-sm">
                <span className="text-zinc-500">Technical teams build AI workflows.</span>
                <span className="text-zinc-700 font-mono-custom hidden sm:inline">→</span>
                <span className="text-zinc-500">FlowScale converts them into production applications.</span>
                <span className="text-zinc-700 font-mono-custom hidden sm:inline">→</span>
                <span className="text-emerald-500/70">Artists use them without touching nodes or code.</span>
            </div>

            {/* Primary CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-16">
                <Link href="/download" className="flex items-center justify-center w-full sm:w-auto gap-2 bg-zinc-100 hover:bg-white text-black text-sm font-semibold rounded-md px-8 py-3.5 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                    <Icon icon="solar:download-square-bold" width="18" />
                    <span>Download FlowScale</span>
                </Link>
                <Link href="https://ammanjsharma.notion.site/Welcome-to-FlowScale-AIOS-Documentation-31ede69d87b180bfbba7c2fe66233fbb?source=copy_link" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full sm:w-auto gap-2 bg-zinc-900 border border-zinc-800 hover:border-zinc-600 text-zinc-300 text-sm font-medium rounded-md px-8 py-3.5 transition-all">
                    <Icon icon="solar:document-text-bold" width="18" />
                    <span>Documentation</span>
                </Link>
            </div>

            {/* Visual / Product Demo Frame */}
            <div className="w-full max-w-6xl mx-auto relative rounded-xl border border-white/10 bg-black/50 backdrop-blur-sm p-2 shadow-2xl overflow-hidden mb-20 animate-float">
                {/* Fake Window Header */}
                <div className="flex items-center gap-2 mb-2 px-3 pb-2 border-b border-white/5 pt-1">
                    <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                    <div className="ml-4 font-mono-custom text-[10px] text-zinc-500">flowscale-aios.exe — Studio View</div>
                </div>

                {/* Video Player Box */}
                <div
                    className="aspect-video w-full bg-[#0c0c0e] rounded-lg border border-zinc-800/50 overflow-hidden relative cursor-pointer group"
                    onClick={togglePlay}
                >
                    <video
                        ref={videoRef}
                        src="/hero-video.mp4"
                        playsInline
                        className="w-full h-full object-cover"
                        onEnded={() => setIsPlaying(false)}
                        poster="/blog/flowscalebanner.png"
                    />

                    {/* Play Button Overlay */}
                    <div className={`absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-[2px] transition-all duration-300 ${isPlaying ? 'opacity-0 scale-110 pointer-events-none' : 'opacity-100 scale-100'}`}>
                        <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-emerald-500/20 border border-emerald-500/50 flex items-center justify-center backdrop-blur-md group-hover:scale-110 group-hover:bg-emerald-500/30 transition-all duration-300 shadow-[0_0_30px_rgba(16,185,129,0.3)]">
                            <Icon
                                icon="solar:play-bold"
                                className="text-white w-10 h-10 md:w-12 md:h-12 ml-1"
                            />
                        </div>
                    </div>

                    {/* Subtle Gradient Bottom overlay (for aesthetics) */}
                    <div className="absolute bottom-0 w-full h-1/3 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
                </div>
            </div>

            {/* Secondary Proof */}
            <div className="flex flex-col items-center border-t border-white/5 pt-10 w-full max-w-3xl mx-auto">
                <p className="font-mono-custom text-[11px] text-zinc-500 uppercase tracking-widest mb-6">
                    Trusted by teams at
                </p>
                <div className="flex items-center justify-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                    <img src="/clients/invnt-white.png" alt="INVNT" className="h-8 w-auto object-contain" />
                    <img src="/clients/hogarth-white.png" alt="Hogarth" className="h-8 w-auto object-contain" />
                    <img src="/clients/superside-white.png" alt="Superside" className="h-8 w-auto object-contain" />
                </div>
            </div>

        </section>
    );
}
