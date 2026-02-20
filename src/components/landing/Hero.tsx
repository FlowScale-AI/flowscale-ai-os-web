"use client";
import { Icon } from "@iconify/react";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="flex-1 w-full z-20 flex flex-col lg:flex-row h-full relative lg:min-h-[800px]">
      {/* Left: Text Content */}
      <div className="w-full lg:w-[45%] px-6 md:px-12 pt-16 md:pt-24 z-30 flex flex-col justify-start h-full">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="font-mono-custom text-[10px] uppercase tracking-widest text-emerald-500/80">
            System Operational v2.4
          </span>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal text-white tracking-tight font-tech mb-6 leading-[1.1]">
          The operating layer for <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-200 via-emerald-400 to-emerald-600">
            Generative Pipelines.
          </span>
        </h1>

        {/* Description */}
        <p className="text-base md:text-lg leading-relaxed text-zinc-400 font-light max-w-md mb-10">
          Stop forcing artists to be engineers. FlowScale abstracts complex
          ComfyUI graphs into standardized, production-ready interfaces for your
          entire creative team.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-16">
          <Link
            href="/os/canvases"
            className="flex items-center justify-center gap-2 bg-zinc-100 hover:bg-white text-black text-sm font-semibold rounded-md px-6 py-3 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.1)]"
          >
            <Icon icon="solar:play-circle-linear" width="18" />
            <span>Start Free Trial</span>
          </Link>
          <button className="flex items-center justify-center gap-2 bg-zinc-900 border border-zinc-800 hover:border-zinc-600 text-zinc-300 text-sm font-medium rounded-md px-6 py-3 transition-all">
            <Icon icon="solar:document-text-linear" width="18" />
            <span>Read Documentation</span>
          </button>
        </div>

        {/* Tech Stack/Trust */}
        <div className="border-t border-white/5 pt-8 mt-auto pb-12">
          <p className="font-mono-custom text-[10px] text-zinc-600 uppercase tracking-widest mb-4">
            Pipeline Integration Support
          </p>
          <div className="flex items-center gap-6 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
            <div className="flex items-center gap-2 text-zinc-400">
              <Icon icon="simple-icons:blender" width="20" />
              <span className="font-medium text-xs">Blender</span>
            </div>
            <div className="flex items-center gap-2 text-zinc-400">
              <Icon icon="simple-icons:unrealengine" width="20" />
              <span className="font-medium text-xs">Unreal</span>
            </div>
            <div className="flex items-center gap-2 text-zinc-400">
              <Icon icon="simple-icons:adobephotoshop" width="20" />
              <span className="font-medium text-xs">Photoshop</span>
            </div>
            <div className="flex items-center gap-2 text-zinc-400">
              <Icon icon="simple-icons:houdini" width="20" />
              <span className="font-medium text-xs">Houdini</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right: Visualization */}
      <div className="absolute inset-0 lg:relative lg:inset-auto lg:w-[55%] lg:h-auto h-full overflow-hidden pointer-events-none lg:pointer-events-auto">
        {/* Background Wiring/Nodes SVG */}
        <svg
          className="absolute inset-0 w-full h-full opacity-30 lg:opacity-100"
          viewBox="0 0 800 800"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="beamGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop
                offset="0%"
                style={{ stopColor: "#10b981", stopOpacity: 0 }}
              ></stop>
              <stop
                offset="50%"
                style={{ stopColor: "#10b981", stopOpacity: 1 }}
              ></stop>
              <stop
                offset="100%"
                style={{ stopColor: "#10b981", stopOpacity: 0 }}
              ></stop>
            </linearGradient>
          </defs>

          {/* Connection Lines */}
          <path
            d="M 100 600 C 300 600, 300 400, 400 400 S 500 200, 700 200"
            fill="none"
            stroke="#27272a"
            strokeWidth="2"
          ></path>
          <path
            d="M 100 600 C 300 600, 300 400, 400 400 S 500 200, 700 200"
            fill="none"
            stroke="url(#beamGrad)"
            strokeWidth="2"
            className="animate-beam"
          ></path>

          <path
            d="M 200 700 C 300 700, 300 400, 400 400"
            fill="none"
            stroke="#27272a"
            strokeWidth="2"
          ></path>
          <path
            d="M 200 700 C 300 700, 300 400, 400 400"
            fill="none"
            stroke="url(#beamGrad)"
            strokeWidth="2"
            className="animate-beam"
            style={{ animationDelay: "-5s" }}
          ></path>

          {/* Nodes */}
          <circle
            cx="400"
            cy="400"
            r="4"
            fill="#10b981"
            className="animate-pulse"
          ></circle>
        </svg>

        {/* UI Card 1: The "Abstracted" Interface (Top Right) */}
        <div className="hidden md:block absolute right-[10%] top-[15%] animate-float z-20">
          <div className="bg-[#111113] backdrop-blur-xl w-64 rounded-lg border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden">
            {/* Header */}
            <div className="h-8 bg-[#18181b] border-b border-white/5 flex items-center justify-between px-3">
              <span className="text-[10px] font-medium text-zinc-400 font-mono-custom">
                CharacterGen_v3
              </span>
              <div className="flex gap-1.5">
                <div className="w-2 h-2 rounded-full bg-zinc-700"></div>
                <div className="w-2 h-2 rounded-full bg-zinc-700"></div>
              </div>
            </div>
            {/* Controls */}
            <div className="p-4 space-y-4">
              {/* Control 1 */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-[10px] text-zinc-400 font-mono-custom">
                  <span>Style Strength</span>
                  <span className="text-emerald-400">0.75</span>
                </div>
                <div className="h-1 w-full bg-zinc-800 rounded-full overflow-hidden">
                  <div className="h-full w-3/4 bg-emerald-500 rounded-full"></div>
                </div>
              </div>
              {/* Control 2 */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-[10px] text-zinc-400 font-mono-custom">
                  <span>Seed Variation</span>
                  <span className="text-emerald-400">4291</span>
                </div>
                <div className="h-1 w-full bg-zinc-800 rounded-full overflow-hidden">
                  <div className="h-full w-1/4 bg-emerald-500 rounded-full"></div>
                </div>
              </div>
              {/* Button */}
              <div className="pt-2">
                <button className="w-full h-8 bg-zinc-800 hover:bg-zinc-700 border border-white/5 rounded text-[10px] text-white font-medium transition-colors flex items-center justify-center gap-2">
                  <Icon icon="solar:magic-stick-3-linear" />
                  Generate Asset
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* UI Card 2: The Logic (Bottom Left) */}
        <div className="hidden md:block absolute left-[15%] bottom-[20%] animate-float delay-500 z-10">
          <div className="bg-[#0c0c0e]/90 backdrop-blur-md p-4 w-56 rounded-lg border border-white/10 shadow-2xl flex flex-col gap-3">
            <div className="flex items-center gap-2 border-b border-white/5 pb-2">
              <Icon icon="solar:programming-linear" className="text-zinc-500" />
              <span className="text-xs font-medium text-zinc-300">
                Backend Logic
              </span>
            </div>
            <div className="font-mono-custom text-[9px] text-zinc-500 space-y-1">
              <div className="flex gap-2">
                <span className="text-emerald-500">const</span>
                <span className="text-zinc-300">workflow</span>
                <span>=</span>
                <span className="text-orange-400">loadJSON()</span>;
              </div>
              <div className="flex gap-2 pl-2">
                <span className="text-purple-400">await</span>
                <span className="text-zinc-300">gpu.queue</span>(
                <span className="text-zinc-400">task_id</span>
                );
              </div>
              <div className="flex gap-2">
                <span className="text-zinc-500">// Node 42 connected</span>
              </div>
            </div>
          </div>
        </div>

        {/* Connecting Line between cards visual indicator */}
        <div className="hidden lg:block absolute left-[30%] top-[40%] right-[30%] h-[1px] bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent transform -rotate-12 pointer-events-none"></div>
      </div>
    </div>
  );
}
