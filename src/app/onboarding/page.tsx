"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { completeOnboarding } from "@/lib/firebase/auth";
import { Icon } from "@iconify/react";
import Link from "next/link";
import ProtectedRoute from "@/components/ProtectedRoute";

export default function OnboardingPage() {
    const { user, hasOnboarded, checkOnboarding } = useAuth();
    const router = useRouter();

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const [formData, setFormData] = useState({
        role: "Artist / Creator",
        studioName: "",
        primaryUseCase: "Text-to-Image Generation"
    });

    // If they already onboarded, boot them back to downloads
    useEffect(() => {
        if (hasOnboarded) {
            router.replace("/download");
        }
    }, [hasOnboarded, router]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!user) return;

        setIsSubmitting(true);
        setError(null);

        try {
            await completeOnboarding(user.uid, formData);
            // Refresh context state
            await checkOnboarding(user.uid);
            router.push("/download");
        } catch (err: any) {
            console.error(err);
            setError("Failed to save profile. Please try again.");
            setIsSubmitting(false);
        }
    };

    return (
        <ProtectedRoute>
            <div className="min-h-screen bg-black flex flex-col relative overflow-hidden">
                {/* Backgrounds */}
                <div className="absolute inset-0 z-0 bg-grid-pattern opacity-[0.15]" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0a]/50 to-black z-0 pointer-events-none" />

                {/* Navbar */}
                <nav className="relative z-10 p-6 md:px-12 flex items-center justify-between border-b border-white/5">
                    <Link href="/" className="flex items-center gap-2 opacity-80">
                        <img src="/logo-dark.png" alt="FlowScale" className="h-6 w-auto" />
                        <span className="text-white font-tech tracking-tight">FlowScale</span>
                    </Link>
                    <div className="text-xs font-mono-custom text-emerald-500 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                        Secure Configuration
                    </div>
                </nav>

                <main className="flex-1 overflow-y-auto relative z-10 w-full mb-10">
                    <div className="max-w-2xl mx-auto px-6 py-12 md:py-20 w-full">

                        <div className="mb-12">
                            <h1 className="text-3xl md:text-5xl text-white font-tech font-light tracking-tight mb-4">
                                Welcome to the OS. <br />
                                Let's configure your profile.
                            </h1>
                            <p className="text-zinc-400 text-lg">
                                We need a few details to tailor your initial experience before proceeding to the downloads.
                            </p>
                        </div>

                        {error && (
                            <div className="mb-8 bg-red-500/10 border border-red-500/20 text-red-500 text-sm p-4 rounded-xl">
                                {error}
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="flex flex-col gap-8 bg-[#0a0a0a]/80 backdrop-blur border border-white/5 rounded-3xl p-6 md:p-10">

                            {/* Role Selection */}
                            <div className="flex flex-col gap-3">
                                <label className="text-sm font-medium text-zinc-300">Primary Role</label>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    {["Artist / Creator", "Technical Director", "Producer", "Developer"].map(role => (
                                        <button
                                            key={role}
                                            type="button"
                                            onClick={() => setFormData(prev => ({ ...prev, role }))}
                                            className={`p-4 rounded-xl border text-left transition-all ${formData.role === role
                                                    ? "bg-emerald-500/10 border-emerald-500 text-emerald-400"
                                                    : "bg-zinc-900 border-white/5 text-zinc-400 hover:border-white/20"
                                                }`}
                                        >
                                            {role}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Studio Name */}
                            <div className="flex flex-col gap-3">
                                <label htmlFor="studio" className="text-sm font-medium text-zinc-300 flex justify-between">
                                    <span>Studio / Company Name</span>
                                    <span className="text-zinc-600 text-xs">(Optional)</span>
                                </label>
                                <input
                                    id="studio"
                                    type="text"
                                    className="h-14 bg-zinc-900 border border-white/5 rounded-xl px-4 text-white focus:outline-none focus:border-emerald-500/50 focus:bg-zinc-900/50 transition-all font-light"
                                    placeholder="e.g. Hogarth Worldwide"
                                    value={formData.studioName}
                                    onChange={(e) => setFormData(prev => ({ ...prev, studioName: e.target.value }))}
                                />
                            </div>

                            {/* Primary Use Case */}
                            <div className="flex flex-col gap-3">
                                <label className="text-sm font-medium text-zinc-300">Primary AI Use Case</label>
                                <select
                                    className="h-14 bg-zinc-900 border border-white/5 rounded-xl px-4 text-white focus:outline-none focus:border-emerald-500/50 appearance-none font-light"
                                    value={formData.primaryUseCase}
                                    onChange={(e) => setFormData(prev => ({ ...prev, primaryUseCase: e.target.value }))}
                                >
                                    <option value="Text-to-Image Generation">Image Generation & Iteration</option>
                                    <option value="ComfyUI Abstraction">ComfyUI Node Graph Abstraction</option>
                                    <option value="Video Generation">Generative Video / Interpolation</option>
                                    <option value="Enterprise Deployment">Enterprise Studio Deployment</option>
                                </select>
                            </div>

                            {/* Discord Notice */}
                            <div className="mt-4 bg-[#5865F2]/10 border border-[#5865F2]/20 rounded-2xl p-6 flex flex-col sm:flex-row items-center gap-6 justify-between">
                                <div className="flex items-start gap-4">
                                    <Icon icon="simple-icons:discord" className="text-[#5865F2] text-4xl shrink-0" />
                                    <div>
                                        <h4 className="text-white font-medium mb-1">Join the Core Community</h4>
                                        <p className="text-zinc-400 text-sm">
                                            The FlowScale engineering team and early adopters collaborate daily in our Discord.
                                        </p>
                                    </div>
                                </div>
                                <a
                                    href="https://discord.gg/flowscale" // Placeholder URL
                                    target="_blank"
                                    rel="noreferrer"
                                    className="shrink-0 w-full sm:w-auto text-center px-6 py-3 bg-[#5865F2] text-white text-sm font-medium rounded-xl hover:bg-[#4752C4] transition-colors"
                                >
                                    Join Discord
                                </a>
                            </div>

                            {/* Submit */}
                            <div className="pt-4 border-t border-white/5 flex justify-end">
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="px-8 py-4 bg-white text-black font-medium rounded-xl hover:bg-zinc-200 transition-colors disabled:opacity-50 flex items-center gap-2"
                                >
                                    {isSubmitting ? "Finalizing..." : "Continue to Download"}
                                    {!isSubmitting && <Icon icon="solar:arrow-right-linear" />}
                                </button>
                            </div>

                        </form>
                    </div>
                </main>
            </div>
        </ProtectedRoute>
    );
}
