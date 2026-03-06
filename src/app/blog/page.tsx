import Navbar from "@/components/MinimalNavbar";
import PlatformFooter from "@/components/platform/PlatformFooter";
import ArticleList from "@/components/blog/ArticleList";
import { getAllBlogs } from "@/lib/blog";

export default function BlogIndexPage() {
    const blogs = getAllBlogs();

    return (
        <div className="min-h-screen bg-black lg:p-6 xl:p-8 2xl:p-10 flex flex-col">
            <main className="flex-1 overflow-x-hidden flex flex-col lg:rounded-[2rem] lg:border lg:border-white/5 lg:shadow-2xl lg:shadow-black bg-[#0a0a0a] w-full relative">
                {/* Grid Background */}
                <div className="absolute inset-0 w-full h-full pointer-events-none z-0 bg-grid-pattern opacity-50" />

                {/* Vignette */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0a]/50 to-[#0a0a0a] z-0 pointer-events-none" />

                <Navbar />

                <div className="relative z-10 flex flex-col pt-32">

                    {/* Minimal Hero for Blog using standard components/fonts */}
                    <div className="max-w-5xl mx-auto px-6 md:px-12 w-full text-left mb-12">
                        <div className="inline-flex items-center gap-2 mb-6 bg-zinc-900 border border-white/5 px-3 py-1.5 rounded-full">
                            <span className="font-mono-custom text-[10px] text-zinc-300 uppercase tracking-widest">
                                Updates & Insights
                            </span>
                        </div>
                        <h1 className="text-4xl md:text-6xl text-white font-tech font-light tracking-tight mb-6">
                            The FlowScale Blog
                        </h1>
                        <p className="text-xl text-zinc-400 font-light max-w-2xl">
                            Thoughts on the future of generative creative infrastructure, open-source AI, and building for modern pipelines.
                        </p>
                    </div>

                    <ArticleList articles={blogs} />

                    <div className="mt-20">
                        <PlatformFooter />
                    </div>
                </div>
            </main>
        </div>
    );
}
