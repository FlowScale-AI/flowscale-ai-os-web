"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { completeOnboarding } from "@/lib/firebase/auth";
import { Icon } from "@iconify/react";
import Link from "next/link";
import ProtectedRoute from "@/components/ProtectedRoute";

type FormData = {
    role: string;
    roleOther: string;
    industry: string;
    industryOther: string;
    currentWorkflow: string;
    workflowOther: string;
    biggestChallenge: string;
    challengeOther: string;
    teamSize: string;
    runLocation: string;
    firstBuild: string;
    firstBuildOther: string;
    email: string;
    github: string;
    company: string;
    magicFix: string;
};

function SelectGrid({
    options,
    value,
    onChange,
    cols = 2,
}: {
    options: string[];
    value: string;
    onChange: (v: string) => void;
    cols?: number;
}) {
    return (
        <div className={`grid gap-3 ${cols === 1 ? "grid-cols-1" : "grid-cols-1 sm:grid-cols-2"}`}>
            {options.map((opt) => (
                <button
                    key={opt}
                    type="button"
                    onClick={() => onChange(opt)}
                    className={`p-4 rounded-xl border text-left text-sm transition-all ${
                        value === opt
                            ? "bg-emerald-500/10 border-emerald-500 text-emerald-400"
                            : "bg-zinc-900 border-white/5 text-zinc-400 hover:border-white/20"
                    }`}
                >
                    {opt}
                </button>
            ))}
        </div>
    );
}

function OtherInput({
    visible,
    value,
    onChange,
    placeholder,
}: {
    visible: boolean;
    value: string;
    onChange: (v: string) => void;
    placeholder?: string;
}) {
    if (!visible) return null;
    return (
        <input
            type="text"
            className="mt-2 h-12 w-full bg-zinc-900 border border-white/5 rounded-xl px-4 text-white text-sm focus:outline-none focus:border-emerald-500/50 transition-all font-light"
            placeholder={placeholder ?? "Please specify…"}
            value={value}
            onChange={(e) => onChange(e.target.value)}
        />
    );
}

function SectionLabel({ number, children }: { number: number; children: React.ReactNode }) {
    return (
        <div className="flex items-start gap-3">
            <span className="shrink-0 w-7 h-7 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs flex items-center justify-center font-mono-custom">
                {number}
            </span>
            <label className="text-sm font-medium text-zinc-200 leading-7">{children}</label>
        </div>
    );
}

export default function OnboardingPage() {
    const { user, hasOnboarded, checkOnboarding } = useAuth();
    const router = useRouter();

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const [formData, setFormData] = useState<FormData>({
        role: "",
        roleOther: "",
        industry: "",
        industryOther: "",
        currentWorkflow: "",
        workflowOther: "",
        biggestChallenge: "",
        challengeOther: "",
        teamSize: "",
        runLocation: "",
        firstBuild: "",
        firstBuildOther: "",
        email: "",
        github: "",
        company: "",
        magicFix: "",
    });

    useEffect(() => {
        if (hasOnboarded) {
            router.replace("/download");
        }
    }, [hasOnboarded, router]);

    const set = (key: keyof FormData) => (value: string) =>
        setFormData((prev) => ({ ...prev, [key]: value }));

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!user) {
            setError("You must be logged in to continue.");
            return;
        }

        setIsSubmitting(true);
        setError(null);

        try {
            await completeOnboarding(user.uid, formData);
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
                        <img src="/flowscale-white-logo-full.png" alt="FlowScale" className="h-6 w-auto" />
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
                                Tell us about your <br />
                                creative AI pipeline.
                            </h1>
                            <p className="text-zinc-400 text-lg">
                                Help us understand how you currently build AI workflows and how FlowScale AIOS can fit into your creative pipeline.
                            </p>
                        </div>

                        {error && (
                            <div className="mb-8 bg-red-500/10 border border-red-500/20 text-red-500 text-sm p-4 rounded-xl">
                                {error}
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="flex flex-col gap-10 bg-[#0a0a0a]/80 backdrop-blur border border-white/5 rounded-3xl p-6 md:p-10">

                            {/* Q1 – Role */}
                            <div className="flex flex-col gap-4">
                                <SectionLabel number={1}>What best describes your role?</SectionLabel>
                                <SelectGrid
                                    options={[
                                        "Technical Director",
                                        "Creative Technologist",
                                        "AI / ML Engineer",
                                        "Software Engineer",
                                        "3D Artist / Designer",
                                        "Filmmaker / Director",
                                        "Studio / Agency Owner",
                                        "Researcher / Student",
                                        "Other",
                                    ]}
                                    value={formData.role}
                                    onChange={set("role")}
                                />
                                <OtherInput
                                    visible={formData.role === "Other"}
                                    value={formData.roleOther}
                                    onChange={set("roleOther")}
                                    placeholder="Describe your role…"
                                />
                            </div>

                            {/* Q2 – Industry */}
                            <div className="flex flex-col gap-4">
                                <SectionLabel number={2}>What industry are you working in?</SectionLabel>
                                <SelectGrid
                                    options={[
                                        "Film / VFX",
                                        "Animation",
                                        "Game Development",
                                        "Marketing / Advertising",
                                        "Product Photography / E-commerce",
                                        "Design Studio",
                                        "AI Research",
                                        "Personal Projects / Hobby",
                                        "Other",
                                    ]}
                                    value={formData.industry}
                                    onChange={set("industry")}
                                />
                                <OtherInput
                                    visible={formData.industry === "Other"}
                                    value={formData.industryOther}
                                    onChange={set("industryOther")}
                                    placeholder="Describe your industry…"
                                />
                            </div>

                            {/* Q3 – Current workflow */}
                            <div className="flex flex-col gap-4">
                                <SectionLabel number={3}>How are you currently building AI workflows?</SectionLabel>
                                <SelectGrid
                                    options={[
                                        "ComfyUI",
                                        "Custom Python pipelines",
                                        "Node-based tools (TouchDesigner, etc.)",
                                        "LangChain / Agent workflows",
                                        "Stable Diffusion tools",
                                        "Not building workflows yet",
                                        "Other",
                                    ]}
                                    value={formData.currentWorkflow}
                                    onChange={set("currentWorkflow")}
                                />
                                <OtherInput
                                    visible={formData.currentWorkflow === "Other"}
                                    value={formData.workflowOther}
                                    onChange={set("workflowOther")}
                                    placeholder="Describe your current tools…"
                                />
                            </div>

                            {/* Q4 – Biggest challenge */}
                            <div className="flex flex-col gap-4">
                                <SectionLabel number={4}>What is the biggest challenge you face today with AI workflows?</SectionLabel>
                                <SelectGrid
                                    options={[
                                        "Turning workflows into tools for my team",
                                        "Deploying workflows reliably",
                                        "Managing models / compute",
                                        "Building interfaces for artists",
                                        "Scaling workflows across teams",
                                        "Sharing workflows with others",
                                        "Other",
                                    ]}
                                    value={formData.biggestChallenge}
                                    onChange={set("biggestChallenge")}
                                />
                                <OtherInput
                                    visible={formData.biggestChallenge === "Other"}
                                    value={formData.challengeOther}
                                    onChange={set("challengeOther")}
                                    placeholder="Describe your challenge…"
                                />
                            </div>

                            {/* Q5 – Team size */}
                            <div className="flex flex-col gap-4">
                                <SectionLabel number={5}>How big is your team?</SectionLabel>
                                <SelectGrid
                                    options={["Just me", "2–5 people", "6–20 people", "20–100 people", "100+ people"]}
                                    value={formData.teamSize}
                                    onChange={set("teamSize")}
                                />
                            </div>

                            {/* Q6 – Run location */}
                            <div className="flex flex-col gap-4">
                                <SectionLabel number={6}>Where would you most likely run FlowScale?</SectionLabel>
                                <SelectGrid
                                    options={[
                                        "My local machine",
                                        "Studio workstation",
                                        "On-prem GPU server",
                                        "Cloud GPUs",
                                        "Not sure yet",
                                    ]}
                                    value={formData.runLocation}
                                    onChange={set("runLocation")}
                                />
                            </div>

                            {/* Q7 – First build */}
                            <div className="flex flex-col gap-4">
                                <SectionLabel number={7}>What would you want to build first with FlowScale?</SectionLabel>
                                <SelectGrid
                                    options={[
                                        "AI Storyboarding tool",
                                        "Product photography generator",
                                        "Concept art pipeline",
                                        "Marketing asset generator",
                                        "Internal creative tools",
                                        "Other",
                                    ]}
                                    value={formData.firstBuild}
                                    onChange={set("firstBuild")}
                                />
                                <OtherInput
                                    visible={formData.firstBuild === "Other"}
                                    value={formData.firstBuildOther}
                                    onChange={set("firstBuildOther")}
                                    placeholder="Describe what you'd build…"
                                />
                            </div>

                            {/* Q8 – Optional contact */}
                            <div className="flex flex-col gap-4">
                                <SectionLabel number={8}>Would you like updates from FlowScale?</SectionLabel>
                                <p className="text-xs text-zinc-500 -mt-2 ml-10">Optional — share as much or as little as you like.</p>
                                <div className="flex flex-col gap-3 ml-0">
                                    <input
                                        type="email"
                                        className="h-12 bg-zinc-900 border border-white/5 rounded-xl px-4 text-white text-sm focus:outline-none focus:border-emerald-500/50 transition-all font-light"
                                        placeholder="Email address"
                                        value={formData.email}
                                        onChange={(e) => set("email")(e.target.value)}
                                    />
                                    <input
                                        type="text"
                                        className="h-12 bg-zinc-900 border border-white/5 rounded-xl px-4 text-white text-sm focus:outline-none focus:border-emerald-500/50 transition-all font-light"
                                        placeholder="GitHub username"
                                        value={formData.github}
                                        onChange={(e) => set("github")(e.target.value)}
                                    />
                                    <input
                                        type="text"
                                        className="h-12 bg-zinc-900 border border-white/5 rounded-xl px-4 text-white text-sm focus:outline-none focus:border-emerald-500/50 transition-all font-light"
                                        placeholder="Company / Studio name"
                                        value={formData.company}
                                        onChange={(e) => set("company")(e.target.value)}
                                    />
                                </div>
                            </div>

                            {/* Final question */}
                            <div className="flex flex-col gap-4">
                                <div className="flex flex-col gap-1">
                                    <span className="text-sm font-medium text-zinc-200">Final Question</span>
                                    <p className="text-sm text-zinc-400">
                                        If you could magically fix <span className="text-white font-medium">one problem</span> in your AI workflow today, what would it be?
                                    </p>
                                </div>
                                <textarea
                                    rows={4}
                                    className="bg-zinc-900 border border-white/5 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-emerald-500/50 transition-all font-light resize-none"
                                    placeholder="Tell us in your own words…"
                                    value={formData.magicFix}
                                    onChange={(e) => set("magicFix")(e.target.value)}
                                />
                            </div>

                            {/* Discord Notice */}
                            <div className="bg-[#5865F2]/10 border border-[#5865F2]/20 rounded-2xl p-6 flex flex-col sm:flex-row items-center gap-6 justify-between">
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
                                    href="https://discord.gg/XgPTrNM7Du"
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
