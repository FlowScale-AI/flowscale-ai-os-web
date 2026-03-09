"use client";
import { Suspense, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { logInWithGoogle } from "@/lib/firebase/auth";
import { useAuth } from "@/context/AuthContext";
import { Icon } from "@iconify/react";
import Link from "next/link";

function LoginContent() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const { user, hasOnboarded, loading: authLoading } = useAuth();

    const [isLoggingIn, setIsLoggingIn] = useState(false);
    const [error, setError] = useState<string | null>(null);

    // If already logged in, seamlessly redirect them home or to intended destination
    useEffect(() => {
        if (!authLoading && user) {
            if (!hasOnboarded) {
                router.replace("/onboarding");
            } else {
                const redirect = searchParams.get("redirect") || "/download";
                router.replace(redirect);
            }
        }
    }, [user, authLoading, hasOnboarded, router, searchParams]);

    const handleGoogleLogin = async () => {
        setIsLoggingIn(true);
        setError(null);
        try {
            const { isNewUser } = await logInWithGoogle();
            if (isNewUser) {
                router.push("/onboarding");
            } else {
                const redirect = searchParams.get("redirect") || "/download";
                router.push(redirect);
            }
        } catch (err: any) {
            console.error(err);
            setError(err.message || "Failed to authenticate with Google.");
        } finally {
            setIsLoggingIn(false);
        }
    };

    if (authLoading || user) return (
        <div className="min-h-screen bg-black flex items-center justify-center">
            <div className="w-6 h-6 border-2 border-emerald-500/30 border-t-emerald-500 rounded-full animate-spin"></div>
        </div>
    );

    return (
        <div className="min-h-screen bg-black flex flex-col relative overflow-hidden">

            {/* Backgrounds */}
            <div className="absolute inset-0 z-0 bg-grid-pattern opacity-[0.15]" />
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-900/10 via-black to-black z-0 pointer-events-none" />

            {/* Very minimal nav for auth pages */}
            <nav className="relative z-10 p-6 md:px-12 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 opacity-80 hover:opacity-100 transition-opacity">
                    <img src="/flowscale-white-logo-full.png" alt="FlowScale" className="h-6 w-auto" />
                </Link>
            </nav>

            <main className="flex-1 flex items-center justify-center p-6 relative z-10 pb-32">
                <div className="w-full max-w-md flex flex-col gap-8 bg-[#0a0a0a]/50 backdrop-blur-xl border border-white/5 rounded-3xl p-8 md:p-10 shadow-2xl relative">

                    {/* Subtle Top glow on card */}
                    <div className="absolute -top-[1px] left-1/2 -translate-x-1/2 w-32 h-[1px] bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent"></div>

                    <div className="text-center flex flex-col gap-3">
                        <h1 className="text-3xl text-white font-tech font-light">Access Pipeline</h1>
                        <p className="text-zinc-500 text-sm">
                            Authenticate to download FlowScale AIOS and join the early access network.
                        </p>
                    </div>

                    {error && (
                        <div className="bg-red-500/10 border border-red-500/20 text-red-500 text-sm p-4 rounded-xl flex items-start gap-3">
                            <Icon icon="solar:danger-triangle-bold-duotone" className="shrink-0 mt-0.5 text-lg" />
                            <span>{error}</span>
                        </div>
                    )}

                    <button
                        onClick={handleGoogleLogin}
                        disabled={isLoggingIn}
                        className="group w-full relative h-[52px] rounded-xl flex items-center justify-center gap-3 bg-white text-black font-medium transition-all hover:bg-zinc-200 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {isLoggingIn ? (
                            <div className="w-5 h-5 border-2 border-black/20 border-t-black rounded-full animate-spin"></div>
                        ) : (
                            <>
                                <Icon icon="logos:google-icon" width="20" />
                                <span>Continue with Google</span>
                            </>
                        )}
                    </button>

                    <div className="text-center mt-4">
                        <p className="text-xs text-zinc-600">
                            By confirming, you agree to our Terms of Service and Privacy Policy. Securely managed via Google Identity infrastructure.
                        </p>
                    </div>

                </div>
            </main>
        </div>
    );
}

export default function LoginPage() {
    return (
        <Suspense fallback={
            <div className="min-h-screen bg-black flex items-center justify-center">
                <div className="w-6 h-6 border-2 border-emerald-500/30 border-t-emerald-500 rounded-full animate-spin"></div>
            </div>
        }>
            <LoginContent />
        </Suspense>
    );
}
