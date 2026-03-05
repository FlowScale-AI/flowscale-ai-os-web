import Navbar from "@/components/MinimalNavbar";
import Hero from "@/components/Hero";
import ProblemSolution from "@/components/ProblemSolution";
import WorkflowSteps from "@/components/WorkflowSteps";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

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
                    <Hero />
                    <ProblemSolution />
                    <WorkflowSteps />
                    <CTA />
                    <Footer />
                </div>
            </main>
        </div>
    );
}
