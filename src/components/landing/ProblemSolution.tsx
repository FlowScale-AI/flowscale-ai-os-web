"use client";
import { Icon } from "@iconify/react";
import Link from "next/link";

export default function ProblemSolution() {
  return (
    <section className="relative z-20 border-t border-white/5 bg-[#080809]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-24">
        <div className="mb-16 md:flex justify-between items-end">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-5xl text-white font-tech font-light tracking-tight mb-4">
              Bridge the gap between <br />
              <span className="text-zinc-500">
                Technical Direction
              </span> and <span className="text-white">Artistry</span>.
            </h2>
          </div>
          <div className="mt-6 md:mt-0">
            <Link
              href="#"
              className="text-sm text-emerald-400 hover:text-emerald-300 flex items-center gap-2 font-mono-custom"
            >
              View Integration Map <Icon icon="solar:arrow-right-linear" />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Card 1: The Problem */}
          <div className="group relative rounded-2xl bg-[#0c0c0e] border border-white/5 p-8 overflow-hidden hover:border-white/10 transition-colors">
            <div className="relative z-10">
              <div className="w-10 h-10 rounded bg-zinc-900 border border-white/10 flex items-center justify-center text-zinc-400 mb-6">
                <Icon icon="solar:graph-down-linear" width="24" />
              </div>
              <h3 className="text-xl text-white font-medium mb-3 font-tech">
                The Complexity Trap
              </h3>
              <p className="text-zinc-500 text-sm leading-relaxed mb-8 max-w-sm">
                ComfyUI graphs are powerful but fragile. Exposing raw nodes to
                artists leads to broken pipelines, inconsistent outputs, and
                endless troubleshooting.
              </p>

              {/* Visual: Messy Nodes */}
              <div className="h-32 w-full relative border border-white/5 bg-black/40 rounded-lg overflow-hidden flex items-center justify-center">
                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage:
                      "radial-gradient(#3f3f46 1px, transparent 1px)",
                    backgroundSize: "10px 10px",
                  }}
                ></div>
                {/* Mock Nodes */}
                <div className="absolute left-4 top-4 w-12 h-12 bg-red-900/20 border border-red-500/30 rounded"></div>
                <div className="absolute right-10 top-8 w-12 h-12 bg-red-900/20 border border-red-500/30 rounded"></div>
                <div className="absolute left-12 bottom-4 w-12 h-12 bg-red-900/20 border border-red-500/30 rounded"></div>
                <svg className="absolute inset-0 w-full h-full pointer-events-none">
                  <path
                    d="M 30 30 L 100 80 L 250 50"
                    stroke="#7f1d1d"
                    strokeWidth="1"
                    fill="none"
                  ></path>
                </svg>
                <div className="bg-red-950/80 border border-red-500/50 px-2 py-1 rounded text-[10px] text-red-200 font-mono-custom z-10">
                  ERROR: Node Disconnect
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: The Solution */}
          <div className="group relative rounded-2xl bg-[#0c0c0e] border border-white/5 p-8 overflow-hidden hover:border-emerald-500/20 transition-colors">
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-[80px] pointer-events-none"></div>
            <div className="relative z-10">
              <div className="w-10 h-10 rounded bg-emerald-950/30 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-6">
                <Icon
                  icon="solar:slider-minimalistic-horizontal-linear"
                  width="24"
                />
              </div>
              <h3 className="text-xl text-white font-medium mb-3 font-tech">
                Standardized Control
              </h3>
              <p className="text-zinc-500 text-sm leading-relaxed mb-8 max-w-sm">
                Technical Directors define the logic. FlowScale generates a
                type-safe, artist-friendly UI. Inputs are validated before they
                ever hit the GPU.
              </p>

              {/* Visual: Clean UI */}
              <div className="h-32 w-full relative border border-white/5 bg-zinc-900/20 rounded-lg overflow-hidden flex flex-col justify-center px-8 gap-3">
                <div className="flex items-center gap-3">
                  <span className="text-[10px] text-zinc-400 font-mono-custom w-12">
                    Prompt
                  </span>
                  <div className="flex-1 h-6 bg-zinc-800 rounded border border-white/5 flex items-center px-2">
                    <span className="text-[10px] text-zinc-500">
                      Cyberpunk city, raining...
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[10px] text-zinc-400 font-mono-custom w-12">
                    Scale
                  </span>
                  <div className="flex-1 h-1 bg-zinc-800 rounded-full">
                    <div className="w-1/2 h-full bg-emerald-500 rounded-full"></div>
                  </div>
                </div>
                <div className="absolute right-3 top-3">
                  <Icon
                    icon="solar:check-circle-bold"
                    className="text-emerald-500"
                    width="16"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
