import Navbar from "@/components/MinimalNavbar";
import FloatingParticles from "@/components/FloatingParticles";

export default function Home() {
    return (
        <div className="relative min-h-screen bg-background text-foreground overflow-hidden font-sans">
            {/* Background Layers */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover opacity-20 mix-blend-screen"
                >
                    <source src="/pipeline-bg.mp4" type="video/mp4" />
                </video>

                {/* Subtle Grid Pattern (consistent with old homepage) */}
                <div className="absolute inset-0 bg-grid-pattern opacity-30" />

                {/* Giant Blurred Orb (imitating the 3D globe) */}
                <div className="absolute top-1/2 left-[60%] -translate-y-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-emerald-500/10 rounded-full blur-[120px]" />

                {/* Core Glow Nodes */}
                <div className="absolute top-[45%] left-[58%] w-36 h-36 bg-emerald-400/25 rounded-full blur-[60px] animate-pulse" />
                <div className="absolute top-[55%] left-[68%] w-44 h-44 bg-emerald-600/15 rounded-full blur-[80px]" />

                {/* Floating Particles */}
                <FloatingParticles />

                {/* Edge fade */}
                <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background opacity-60" />
            </div>

            <Navbar />

            {/* Main Content */}
            <main className="relative z-10 flex flex-col justify-center h-screen px-6 md:px-12 mx-auto max-w-7xl">
                <div className="max-w-3xl flex flex-col space-y-8">

                    {/* Status Indicator — matching old Hero.tsx pattern exactly */}
                    <div className="inline-flex items-center gap-2">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                        <span className="font-mono-custom text-[10px] uppercase tracking-widest text-emerald-500/80">
                            System Operational v2.4
                        </span>
                    </div>

                    {/* Hero Typography */}
                    <div className="flex flex-col gap-0">
                        <h1 className="font-tech text-5xl md:text-7xl lg:text-[5.5rem] font-normal text-white tracking-tight leading-[1.1]">
                            AI infrastructure for{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-200 via-emerald-400 to-emerald-600">
                                creative production.
                            </span>
                        </h1>
                    </div>

                    {/* Body Copy */}
                    <div className="space-y-6 max-w-xl">
                        <p className="text-base md:text-lg leading-relaxed text-zinc-400 font-light">
                            AI will not replace creative teams. It will become the
                            infrastructure that powers them. FlowScale builds systems that
                            allow studios and creative teams to run, control, and scale AI
                            directly inside their production pipelines.
                        </p>

                        <div className="font-mono-custom text-[10px] text-emerald-500/60 tracking-widest uppercase">
                            &gt; initialize pipeline sequence
                        </div>
                    </div>

                    {/* Action Buttons — matching DESIGN.md button specs */}
                    <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-2">
                        <a
                            href="/ai-os"
                            className="group flex items-center justify-center gap-2 bg-zinc-100 hover:bg-white text-black text-sm font-semibold rounded-md px-6 py-3 transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.15)]"
                        >
                            <span>Enter AIOS</span>
                            <svg
                                width="14"
                                height="14"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="group-hover:translate-x-0.5 transition-transform"
                            >
                                <line x1="5" y1="12" x2="19" y2="12" />
                                <polyline points="12 5 19 12 12 19" />
                            </svg>
                        </a>
                        <a
                            href="/docs"
                            className="flex items-center justify-center gap-2 bg-zinc-900 border border-zinc-800 hover:border-zinc-600 text-zinc-300 text-sm font-medium rounded-md px-6 py-3 transition-all"
                        >
                            <svg
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="opacity-60"
                            >
                                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                                <polyline points="14 2 14 8 20 8" />
                                <line x1="16" x2="8" y1="13" y2="13" />
                                <line x1="16" x2="8" y1="17" y2="17" />
                            </svg>
                            <span>Read Documentation</span>
                        </a>
                    </div>
                </div>
            </main>

            {/* Bottom Left: Coordinates (mono-custom) */}
            <div className="absolute bottom-8 left-6 md:left-12 z-20 flex flex-col gap-1">
                <span className="font-mono-custom text-[10px] text-zinc-600 uppercase tracking-widest">
                    Vector Coords
                </span>
                <span className="font-mono-custom text-[10px] text-emerald-500 tracking-widest">
                    0.94.0.13.00
                </span>
            </div>

            {/* Bottom Right: Social Icons */}
            <div className="absolute bottom-8 right-6 md:right-12 z-20 flex items-center gap-4 text-zinc-600">
                <a
                    href="#"
                    className="hover:text-emerald-400 transition-colors"
                    aria-label="Telegram"
                >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m22 2-7 20-4-9-9-4 20-7z" />
                        <path d="M22 2 11 13" />
                    </svg>
                </a>
                <a
                    href="#"
                    className="hover:text-emerald-400 transition-colors"
                    aria-label="Twitter"
                >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                    </svg>
                </a>
                <a
                    href="#"
                    className="hover:text-emerald-400 transition-colors"
                    aria-label="GitHub"
                >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.699-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                    </svg>
                </a>
            </div>
        </div>
    );
}
