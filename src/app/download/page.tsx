"use client";
import { useState } from "react";
import ProtectedRoute from "@/components/ProtectedRoute";
import Navbar from "@/components/MinimalNavbar";
import PlatformFooter from "@/components/platform/PlatformFooter";
import { useAuth } from "@/context/AuthContext";
import { logout } from "@/lib/firebase/auth";
import { Icon } from "@iconify/react";

const MAC_INSTALL_CMD = "sudo curl -fsSL https://flowscale.ai/install_mac.sh | bash";
const LINUX_INSTALL_CMD = "sudo curl -fsSL https://flowscale.ai/install_linux.sh | bash";

export default function DownloadPage() {
    const { user } = useAuth();
    const [copiedMac, setCopiedMac] = useState(false);
    const [copiedLinux, setCopiedLinux] = useState(false);

    function handleCopyMac() {
        navigator.clipboard.writeText(MAC_INSTALL_CMD);
        setCopiedMac(true);
        setTimeout(() => setCopiedMac(false), 2000);
    }

    function handleCopyLinux() {
        navigator.clipboard.writeText(LINUX_INSTALL_CMD);
        setCopiedLinux(true);
        setTimeout(() => setCopiedLinux(false), 2000);
    }

    return (
        <ProtectedRoute>
            <div className="min-h-screen bg-black lg:p-6 xl:p-8 2xl:p-10 flex flex-col">
                <main className="flex-1 overflow-x-hidden flex flex-col lg:rounded-[2rem] lg:border lg:border-white/5 lg:shadow-2xl lg:shadow-black bg-[#0a0a0a] w-full relative">
                    {/* Grid Background */}
                    <div className="absolute inset-0 w-full h-full pointer-events-none z-0 bg-grid-pattern opacity-50" />
                    {/* Vignette */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0a]/50 to-[#0a0a0a] z-0 pointer-events-none" />

                    <Navbar />

                    <div className="relative z-10 flex flex-col pt-16 pb-32">
                        <div className="max-w-4xl mx-auto px-6 md:px-12 w-full text-center">

                            <div className="mb-16">
                                <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-tech tracking-tight mb-6">
                                    Download FlowScale AIOS
                                </h1>
                                <p className="text-zinc-400 text-lg md:text-xl font-light">
                                    Welcome back, <span className="text-emerald-400">{user?.displayName || 'Creator'}</span>. <br className="hidden md:block" /> Select your operating system below to begin your secure download.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                                {/* Windows Download */}
                                <a
                                    href="#"
                                    className="group bg-zinc-900 border border-white/5 rounded-2xl p-8 hover:bg-[#111113] hover:border-white/10 transition-all flex flex-col items-center gap-6"
                                >
                                    <div className="w-20 h-20 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 group-hover:scale-110 transition-transform">
                                        <Icon icon="simple-icons:windows" width="36" />
                                    </div>
                                    <div className="flex flex-col gap-2 text-center">
                                        <h3 className="text-white font-tech text-xl">Windows</h3>
                                        <p className="text-zinc-500 text-sm">Windows 10 / 11 (64-bit)</p>
                                    </div>
                                    <div className="mt-4 px-6 py-2 rounded-full bg-white/5 text-zinc-300 text-sm font-medium group-hover:bg-blue-500 group-hover:text-white transition-colors flex items-center gap-2">
                                        Download <Icon icon="solar:download-minimalistic-bold-duotone" />
                                    </div>
                                </a>

                                {/* macOS Download */}
                                <div className="bg-zinc-900 border border-white/5 rounded-2xl p-8 hover:bg-[#111113] hover:border-white/10 transition-all flex flex-col items-center gap-6">
                                    <div className="w-20 h-20 rounded-full bg-zinc-800 flex items-center justify-center text-white">
                                        <Icon icon="simple-icons:apple" width="36" />
                                    </div>
                                    <div className="flex flex-col gap-2 text-center">
                                        <h3 className="text-white font-tech text-xl">macOS</h3>
                                        <p className="text-zinc-500 text-sm">Apple Silicon & Intel</p>
                                    </div>
                                    <div className="w-full mt-2 flex flex-col gap-2">
                                        <p className="text-zinc-500 text-xs text-left">Run in Terminal:</p>
                                        <div className="flex items-center gap-2 bg-black/50 border border-white/10 rounded-lg px-3 py-2.5">
                                            <code className="text-emerald-400 text-xs font-mono flex-1 text-left break-all">{MAC_INSTALL_CMD}</code>
                                            <button
                                                onClick={handleCopyMac}
                                                className="shrink-0 text-zinc-500 hover:text-white transition-colors"
                                                title="Copy command"
                                            >
                                                <Icon icon={copiedMac ? "solar:check-circle-bold" : "solar:copy-outline"} width="16" className={copiedMac ? "text-emerald-400" : ""} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                {/* Linux Download */}
                                <div className="bg-zinc-900 border border-white/5 rounded-2xl p-8 hover:bg-[#111113] hover:border-white/10 transition-all flex flex-col items-center gap-6">
                                    <div className="w-20 h-20 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-400">
                                        <Icon icon="simple-icons:linux" width="36" />
                                    </div>
                                    <div className="flex flex-col gap-2 text-center">
                                        <h3 className="text-white font-tech text-xl">Linux</h3>
                                        <p className="text-zinc-500 text-sm">Ubuntu, Fedora & more</p>
                                    </div>
                                    <div className="w-full mt-2 flex flex-col gap-2">
                                        <p className="text-zinc-500 text-xs text-left">Run in Terminal:</p>
                                        <div className="flex items-center gap-2 bg-black/50 border border-white/10 rounded-lg px-3 py-2.5">
                                            <code className="text-emerald-400 text-xs font-mono flex-1 text-left break-all">{LINUX_INSTALL_CMD}</code>
                                            <button
                                                onClick={handleCopyLinux}
                                                className="shrink-0 text-zinc-500 hover:text-white transition-colors"
                                                title="Copy command"
                                            >
                                                <Icon icon={copiedLinux ? "solar:check-circle-bold" : "solar:copy-outline"} width="16" className={copiedLinux ? "text-emerald-400" : ""} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Discord */}
                            <div className="mt-16 max-w-2xl mx-auto bg-[#5865F2]/10 border border-[#5865F2]/20 rounded-2xl p-6 flex flex-col sm:flex-row items-center gap-6 justify-between">
                                <div className="flex items-start gap-4">
                                    <Icon icon="simple-icons:discord" className="text-[#5865F2] text-4xl shrink-0" />
                                    <div className="text-left">
                                        <h4 className="text-white font-medium mb-1">Join the Core Community</h4>
                                        <p className="text-zinc-400 text-sm">
                                            The FlowScale engineering team and early adopters collaborate daily in our Discord.
                                        </p>
                                    </div>
                                </div>
                                <a
                                    href="https://discord.gg/XgPTrNM7Du"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="shrink-0 w-full sm:w-auto text-center px-6 py-3 bg-[#5865F2] text-white text-sm font-medium rounded-xl hover:bg-[#4752C4] transition-colors"
                                >
                                    Join Discord
                                </a>
                            </div>

                            {/* Sign Out Button */}
                            <div className="mt-10 flex justify-center">
                                <button
                                    onClick={logout}
                                    className="text-zinc-500 hover:text-white transition-colors text-sm font-mono-custom flex items-center gap-2 border border-transparent hover:border-white/5 px-4 py-2 rounded-lg"
                                >
                                    <Icon icon="solar:logout-2-outline" /> Sign Out
                                </button>
                            </div>

                        </div>
                    </div>

                    <PlatformFooter />
                </main>
            </div>
        </ProtectedRoute>
    );
}
