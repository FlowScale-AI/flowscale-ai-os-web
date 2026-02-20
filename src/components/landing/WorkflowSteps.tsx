"use client";
import { Icon } from "@iconify/react";

export default function WorkflowSteps() {
  return (
    <section className="relative z-20 border-t border-white/5 bg-[#0a0a0a]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-24">
        <h2 className="text-center text-white font-tech text-3xl mb-16">
          Workflow Deployment
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="flex flex-col gap-4">
            <div className="h-48 rounded-xl bg-[#0c0c0e] border border-white/5 relative overflow-hidden flex items-center justify-center group">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-800/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <Icon
                icon="solar:code-file-linear"
                width="48"
                className="text-zinc-600 group-hover:text-zinc-300 transition-colors"
              />
              <div className="absolute bottom-3 right-3 font-mono-custom text-[10px] text-zinc-600">
                .json
              </div>
            </div>
            <div>
              <span className="text-emerald-500 font-mono-custom text-xs tracking-wider mb-1 block">
                01. IMPORT
              </span>
              <h3 className="text-white font-medium mb-2">Ingest Workflow</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">
                Upload your existing ComfyUI API format JSON. FlowScale parses
                the graph and identifies exposed input nodes automatically.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col gap-4">
            <div className="h-48 rounded-xl bg-[#0c0c0e] border border-white/5 relative overflow-hidden flex items-center justify-center group">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <Icon
                icon="solar:iphone-linear"
                width="48"
                className="text-zinc-600 group-hover:text-emerald-400 transition-colors"
              />

              {/* Floating UI Elements */}
              <div className="absolute w-24 h-1 bg-emerald-500/20 rounded-full bottom-12 group-hover:w-32 transition-all duration-500"></div>
              <div className="absolute w-16 h-1 bg-emerald-500/20 rounded-full bottom-8 group-hover:w-24 transition-all duration-500 delay-75"></div>
            </div>
            <div>
              <span className="text-emerald-500 font-mono-custom text-xs tracking-wider mb-1 block">
                02. CONFIGURE
              </span>
              <h3 className="text-white font-medium mb-2">Build Interface</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">
                Map nodes to UI components. Set constraints, default values, and
                tooltips. Create distinct views for different user roles.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col gap-4">
            <div className="h-48 rounded-xl bg-[#0c0c0e] border border-white/5 relative overflow-hidden flex items-center justify-center group">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-800/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative">
                <Icon
                  icon="solar:users-group-rounded-linear"
                  width="48"
                  className="text-zinc-600 group-hover:text-white transition-colors"
                />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-500 rounded-full border-2 border-[#0c0c0e]"></div>
              </div>
            </div>
            <div>
              <span className="text-emerald-500 font-mono-custom text-xs tracking-wider mb-1 block">
                03. DEPLOY
              </span>
              <h3 className="text-white font-medium mb-2">Scale to Team</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">
                Push to your private cloud. Artists access tools via web or DCC
                plugins. Manage queues and GPU resources centrally.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
