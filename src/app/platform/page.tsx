import Navbar from "@/components/MinimalNavbar";
import PlatformHero from "@/components/platform/PlatformHero";
import PlatformProblem from "@/components/platform/PlatformProblem";
import PlatformSolution from "@/components/platform/PlatformSolution";
import PlatformDifferentiation from "@/components/platform/PlatformDifferentiation";
import PlatformHowItWorks from "@/components/platform/PlatformHowItWorks";
import PlatformOpenSource from "@/components/platform/PlatformOpenSource";
import PlatformPricing from "@/components/platform/PlatformPricing";
import PlatformCTA from "@/components/platform/PlatformCTA";
import PlatformFooter from "@/components/platform/PlatformFooter";

export default function AIOSPage() {
    return (
        <div className="min-h-screen bg-black lg:p-6 xl:p-8 2xl:p-10 flex flex-col">
            <main className="flex-1 overflow-x-hidden flex flex-col lg:rounded-[2rem] lg:border lg:border-white/5 lg:shadow-2xl lg:shadow-black bg-[#0a0a0a] w-full relative">
                {/* Grid Background */}
                <div className="absolute inset-0 w-full h-full pointer-events-none z-0 bg-grid-pattern opacity-50" />

                {/* Vignette */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0a]/50 to-[#0a0a0a] z-0 pointer-events-none fixed" />

                <Navbar />

                <div className="relative z-10 flex flex-col">
                    <PlatformHero />
                    <PlatformProblem />
                    <PlatformSolution />
                    <PlatformDifferentiation />
                    <PlatformHowItWorks />
                    <PlatformOpenSource />
                    <PlatformPricing />
                    <PlatformCTA />
                    <PlatformFooter />
                </div>
            </main>
        </div>
    );
}
