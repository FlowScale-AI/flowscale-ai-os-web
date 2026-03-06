"use client";

export default function AboutHero() {
    return (
        <section className="relative z-20 flex flex-col items-center justify-center pt-32 pb-20 px-6 md:px-12 text-center">
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 mb-8 bg-zinc-900/50 border border-emerald-500/20 px-4 py-1.5 rounded-full backdrop-blur-md">
                <span className="font-mono-custom text-[11px] uppercase tracking-widest text-emerald-400">
                    FlowScale AI
                </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-normal text-white tracking-tight font-tech leading-[1.05] mb-8 max-w-4xl mx-auto">
                Building the infrastructure for
                <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-200 via-emerald-400 to-emerald-600">
                    creative sovereignty.
                </span>
            </h1>

            {/* Intro Text */}
            <p className="text-lg md:text-xl leading-relaxed text-zinc-400 font-light max-w-2xl mx-auto mb-10">
                We are building the systems that allow studios and creative teams to run, control, and scale AI directly inside their production pipelines.
            </p>

        </section>
    );
}
