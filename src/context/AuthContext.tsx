"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged, User } from "firebase/auth";
import { auth } from "@/lib/firebase/config";
import { checkOnboardingStatus } from "@/lib/firebase/auth";

interface AuthContextType {
    user: User | null;
    loading: boolean;
    hasOnboarded: boolean;
    checkOnboarding: (uid?: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({
    user: null,
    loading: true,
    hasOnboarded: false,
    checkOnboarding: async () => { },
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);
    const [hasOnboarded, setHasOnboarded] = useState(false);

    const checkOnboarding = async (uid?: string) => {
        const targetUid = uid || user?.uid;
        if (targetUid) {
            const status = await checkOnboardingStatus(targetUid);
            setHasOnboarded(status);
        } else {
            setHasOnboarded(false);
        }
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
            setUser(firebaseUser);
            if (firebaseUser) {
                await checkOnboarding(firebaseUser.uid);
            } else {
                setHasOnboarded(false);
            }
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    return (
        <AuthContext.Provider value={{ user, loading, hasOnboarded, checkOnboarding }}>
            {children}
        </AuthContext.Provider>
    );
};
