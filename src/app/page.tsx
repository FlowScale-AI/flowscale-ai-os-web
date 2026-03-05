import Navbar from "@/components/MinimalNavbar";
import FloatingParticles from "@/components/FloatingParticles";

export default function Home() {
    return (
        <div className="min-h-screen bg-black lg:p-6 xl:p-8 2xl:p-10 flex flex-col">
            <main className="flex-1 overflow-hidden flex flex-col lg:rounded-[2rem] lg:border lg:border-white/5 lg:shadow-2xl lg:shadow-black bg-[#0a0a0a] w-full relative">

                {/* Grid Background */}
                <div className="absolute inset-0 w-full h-full pointer-events-none z-0 bg-grid-pattern opacity-50" />

                {/* Vignette */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0a]/50 to-[#0a0a0a] z-0 pointer-events-none" />

                {/* Background Video */}
                <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden lg:rounded-[2rem]">
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover opacity-10 mix-blend-screen"
                    >
                        <source src="/pipeline-bg.mp4" type="video/mp4" />
                    </video>
                </div>

                {/* Floating Particles */}
                {/* <div className="absolute inset-0 z-0 pointer-events-none">
                    <FloatingParticles />
                </div> */}

                <Navbar />

                {/* Hero — Anthropic-style split layout */}
                <div className="flex-1 w-full z-20 flex flex-col justify-end relative px-6 md:px-12 lg:px-16 pb-10">

                    {/* Status badge — top of hero area */}
                    {/* <div className="inline-flex items-center gap-2 mb-auto pt-12 md:pt-16">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                        <span className="font-mono-custom text-[10px] uppercase tracking-widest text-emerald-500/80">
                            System Operational v2.4
                        </span>
                    </div> */}

                    {/* Split: Headline left, Description + Buttons right */}
                    <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 lg:gap-16">

                        {/* Left: Main Heading — large, bottom-anchored */}
                        <div className="lg:max-w-[55%] shrink-0">
                            <h1 className="text-4xl md:text-5xl lg:text-[3.75rem] xl:text-[4.25rem] font-normal text-white tracking-tight font-tech leading-[1.05]">
                                AI infrastructure
                                <br />
                                for{" "}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-200 via-emerald-400 to-emerald-600">
                                    creative
                                </span>
                                <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-200 via-emerald-400 to-emerald-600">
                                    production.
                                </span>
                            </h1>
                        </div>

                        {/* Right: Vision/Mission + Buttons */}
                        <div className="lg:max-w-md flex flex-col gap-8">
                            <p className="text-base md:text-[21px] leading-[1.7] text-zinc-300 font-light">
                                AI will not replace creative teams. It will become the
                                infrastructure that powers them. FlowScale builds systems that
                                allow studios and creative teams to run, control, and scale AI
                                directly inside their production pipelines.
                            </p>

                            {/* <div className="flex flex-col sm:flex-row gap-3">
                                <a
                                    href="/ai-os"
                                    className="group flex items-center justify-center gap-2 bg-zinc-100 hover:bg-white text-black text-sm font-semibold rounded-md px-5 py-2.5 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.1)]"
                                >
                                    <span>Enter AIOS</span>
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-0.5 transition-transform">
                                        <line x1="5" y1="12" x2="19" y2="12" />
                                        <polyline points="12 5 19 12 12 19" />
                                    </svg>
                                </a>
                                <a
                                    href="/docs"
                                    className="flex items-center justify-center gap-2 bg-zinc-900 border border-zinc-800 hover:border-zinc-600 text-zinc-300 text-sm font-medium rounded-md px-5 py-2.5 transition-all"
                                >
                                    <span>Documentation</span>
                                </a>
                            </div> */}
                        </div>
                    </div>

                    {/* Bottom bar: Clients */}
                    <div className="border-t border-white/5 mt-10 pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
                        <p className="font-mono-custom text-[10px] text-zinc-600 uppercase tracking-widest">
                            Trusted By Teams At
                        </p>
                        <div className="flex items-center gap-10 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                            <img src="/clients/hogarth-white.png" alt="Hogarth" className="h-9 w-auto object-contain" />
                            <img src="/clients/invnt-white.png" alt="INVNT" className="h-9 w-auto object-contain" />
                            <img src="/clients/superside-white.png" alt="Superside" className="h-9 w-auto object-contain" />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
