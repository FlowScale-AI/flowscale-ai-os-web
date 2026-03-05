import Navbar from "@/components/MinimalNavbar";
import PlatformFooter from "@/components/platform/PlatformFooter";

import AboutHero from "@/components/about/AboutHero";
import AboutBelief from "@/components/about/AboutBelief";
import AboutVision from "@/components/about/AboutVision";
import AboutMission from "@/components/about/AboutMission";

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-black lg:p-6 xl:p-8 2xl:p-10 flex flex-col">
            <main className="flex-1 overflow-x-hidden flex flex-col lg:rounded-[2rem] lg:border lg:border-white/5 lg:shadow-2xl lg:shadow-black bg-[#0a0a0a] w-full relative">
                {/* Grid Background */}
                <div className="absolute inset-0 w-full h-full pointer-events-none z-0 bg-grid-pattern opacity-50" />

                {/* Vignette */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0a]/50 to-[#0a0a0a] z-0 pointer-events-none fixed" />

                <Navbar />

                <div className="relative z-10 flex flex-col">
                    <AboutHero />
                    <AboutBelief />
                    <AboutVision />
                    <AboutMission />
                    <PlatformFooter />
                </div>
            </main>
        </div>
    );
}
