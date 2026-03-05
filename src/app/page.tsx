import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProblemSolution from "@/components/ProblemSolution";
import WorkflowSteps from "@/components/WorkflowSteps";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col lg:items-center lg:justify-center lg:p-6">
      <main className="min-h-screen overflow-hidden flex flex-col lg:max-w-[1400px] lg:min-h-[850px] lg:rounded-[2rem] lg:border lg:border-white/5 lg:shadow-2xl lg:shadow-black bg-[#0a0a0a] w-full relative">
        {/* Grid Background */}
        <div className="absolute inset-0 w-full h-full pointer-events-none z-0 bg-grid-pattern opacity-50"></div>
        {/* Vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0a]/50 to-[#0a0a0a] z-0 pointer-events-none"></div>
        <Navbar />
        <Hero />
        <ProblemSolution />
        <WorkflowSteps />
        <CTA />
        <Footer />
      </main>
    </div>
  );
}
