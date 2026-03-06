"use client";
import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
    const { user, loading, hasOnboarded } = useAuth();
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        if (!loading) {
            if (!user) {
                // Not logged in -> Redirect to login
                router.replace(`/login?redirect=${pathname}`);
            } else if (!hasOnboarded && pathname !== "/onboarding") {
                // Logged in but missing profile details -> Force onboarding
                router.replace("/onboarding");
            }
        }
    }, [user, loading, hasOnboarded, pathname, router]);

    // Show a loading state while resolving
    if (loading || (!user && pathname !== "/login") || (!hasOnboarded && pathname !== "/onboarding")) {
        return (
            <div className="min-h-screen bg-black flex items-center justify-center">
                <div className="flex flex-col items-center gap-4">
                    <div className="w-6 h-6 border-2 border-emerald-500/30 border-t-emerald-500 rounded-full animate-spin"></div>
                    <span className="text-zinc-500 font-mono-custom text-xs tracking-widest uppercase animate-pulse">Authenticating</span>
                </div>
            </div>
        );
    }

    // Valid session achieved
    return <>{children}</>;
}
