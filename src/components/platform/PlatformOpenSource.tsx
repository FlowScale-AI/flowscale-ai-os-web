"use client";
import { Icon } from "@iconify/react";
import Link from "next/link";

export default function PlatformOpenSource() {
    const capabilities = [
        "Inspect the codebase",
        "Extend the platform",
        "Customize workflows",
        "Integrate internal tools"
    ];

    return (
        <section className="relative z-20 bg-[#0a0a0a] border-t border-white/5 py-32 px-6 md:px-12">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">

                {/* Visual / Left */}
                <div className="w-full md:w-1/2 relative group">
                    <div className="absolute inset-0 bg-emerald-500/10 blur-3xl rounded-full opacity-50 group-hover:opacity-70 transition-opacity"></div>

                    <div className="relative bg-[#0c0c0e] rounded-2xl border border-white/10 p-2 shadow-2xl skew-y-2 transform-gpu overflow-hidden">
                        {/* Fake terminal header */}
                        <div className="bg-zinc-900 border-b border-white/5 p-3 flex items-center gap-2 rounded-t-xl mb-1">
                            <Icon icon="solar:folder-with-files-bold-duotone" className="text-zinc-500 w-4 h-4" />
                            <span className="font-mono-custom text-[10px] text-zinc-400">flowscale/aios</span>
                        </div>
                        {/* Fake code block */}
                        <div className="bg-[#0a0a0a] rounded-b-xl p-6 font-mono-custom text-xs leading-relaxed overflow-hidden h-[250px] relative">
                            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0a0a0a] to-transparent z-10"></div>
                            <div className="text-emerald-400 opacity-60">{"// platform_core.rs"}</div>
                            <div className="text-purple-400 mt-2">pub fn</div>
                            <div className="text-blue-400 inline"> init_cluster</div>
                            <div className="text-zinc-300 inline">(config: &Config) -&gt; Result&lt;Cluster&gt; {"{"}</div>
                            <div className="text-zinc-500 pl-4 mt-1">{"// Initialize node workers"}</div>
                            <div className="text-zinc-300 pl-4">let nodes = WorkerPool::new(config.max_nodes);</div>
                            <div className="text-zinc-300 pl-4 mt-1">{"for"} node <span className="text-blue-400">in</span> config.nodes {"{"}</div>
                            <div className="text-zinc-300 pl-8">nodes.spawn(node);</div>
                            <div className="text-zinc-300 pl-4">{"}"}</div>
                            <div className="text-zinc-300 pl-4 mt-2">Ok(Cluster::new(nodes))</div>
                            <div className="text-zinc-300">{"}"}</div>
                        </div>
                    </div>
                </div>

                {/* Text Content / Right */}
                <div className="w-full md:w-1/2 text-left">
                    <div className="inline-flex items-center gap-2 mb-6 bg-zinc-900 border border-white/5 px-3 py-1.5 rounded-full">
                        <Icon icon="simple-icons:github" className="text-white w-4 h-4" />
                        <span className="font-mono-custom text-[10px] text-zinc-300 uppercase tracking-widest">Open Source Core</span>
                    </div>

                    <h2 className="text-3xl md:text-5xl text-white font-tech font-light tracking-tight mb-6">
                        Open Infrastructure for Creative AI
                    </h2>

                    <p className="text-lg text-zinc-400 font-light leading-relaxed mb-8">
                        FlowScale is built on open models and open systems, giving studios full control over how AI operates inside their production pipeline.
                    </p>

                    <p className="text-sm text-zinc-500 font-light mb-6">Studios can:</p>

                    <div className="space-y-4 mb-10">
                        {capabilities.map((cap, idx) => (
                            <div key={idx} className="flex items-center gap-3">
                                <Icon icon="solar:check-read-bold-duotone" className="text-emerald-500 w-5 h-5 shrink-0" />
                                <span className="text-zinc-300">{cap}</span>
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link href="https://github.com/FlowScale-AI/flowscale-aios" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-white hover:bg-zinc-200 text-black text-sm font-semibold rounded-md px-6 py-3 transition-colors">
                            <Icon icon="simple-icons:github" width="18" />
                            <span>View on GitHub</span>
                        </Link>
                    </div>
                </div>

            </div>
        </section>
    );
}
