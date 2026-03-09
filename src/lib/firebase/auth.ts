import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { doc, getDoc, setDoc, serverTimestamp } from "firebase/firestore";
import { auth, db } from "./config";

const provider = new GoogleAuthProvider();

export interface UserProfile {
    uid: string;
    email: string | null;
    displayName: string | null;
    photoURL: string | null;
    hasCompletedOnboarding: boolean;
    onboardingData?: {
        role: string;
        roleOther?: string;
        industry?: string;
        industryOther?: string;
        currentWorkflow?: string;
        workflowOther?: string;
        biggestChallenge?: string;
        challengeOther?: string;
        teamSize?: string;
        runLocation?: string;
        firstBuild?: string;
        firstBuildOther?: string;
        email?: string;
        github?: string;
        company?: string;
        magicFix?: string;
    };
    createdAt: any;
    lastLoginAt: any;
}

export const logInWithGoogle = async (): Promise<{ user: any, isNewUser: boolean }> => {
    try {
        const result = await signInWithPopup(auth, provider);
        const user = result.user;

        // Check if user exists in Firestore
        const userRef = doc(db, "users", user.uid);
        const userSnap = await getDoc(userRef);

        let isNewUser = false;

        if (!userSnap.exists()) {
            isNewUser = true;
            // Define the base profile for a new user
            const newProfile: UserProfile = {
                uid: user.uid,
                email: user.email,
                displayName: user.displayName,
                photoURL: user.photoURL,
                hasCompletedOnboarding: false,
                createdAt: serverTimestamp(),
                lastLoginAt: serverTimestamp(),
            };
            await setDoc(userRef, newProfile);
        } else {
            // Update last login
            await setDoc(userRef, { lastLoginAt: serverTimestamp() }, { merge: true });
        }

        return { user, isNewUser: !userSnap.exists() || !userSnap.data()?.hasCompletedOnboarding };
    } catch (error) {
        console.error("Error signing in with Google", error);
        throw error;
    }
};

export const logout = async () => {
    try {
        await signOut(auth);
    } catch (error) {
        console.error("Error signing out", error);
        throw error;
    }
};

export const completeOnboarding = async (uid: string, data: any) => {
    try {
        const userRef = doc(db, "users", uid);
        await setDoc(userRef, {
            hasCompletedOnboarding: true,
            onboardingData: data
        }, { merge: true });
    } catch (error) {
        console.error("Error completing onboarding", error);
        throw error;
    }
};

export const checkOnboardingStatus = async (uid: string): Promise<boolean> => {
    try {
        const userRef = doc(db, "users", uid);
        const userSnap = await getDoc(userRef);
        if (userSnap.exists()) {
            return userSnap.data()?.hasCompletedOnboarding === true;
        }
        return false;
    } catch (error) {
        console.error("Error checking onboarding status", error);
        return false;
    }
};
