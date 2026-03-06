import Navbar from "@/components/MinimalNavbar";
import PlatformFooter from "@/components/platform/PlatformFooter";
import { getBlogPostBySlug, getBlogSlugs, BlogPost } from "@/lib/blog";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Icon } from "@iconify/react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

// For static export generation
export async function generateStaticParams() {
    const slugs = getBlogSlugs();
    return slugs.map((slug) => ({
        slug: slug.replace(/\.md$/, ""),
    }));
}

export default async function ArticlePage(props: { params: Promise<{ slug: string }> }) {
    const params = await props.params;
    const post = getBlogPostBySlug(params.slug);

    if (!post) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-black lg:p-6 xl:p-8 2xl:p-10 flex flex-col">
            <main className="flex-1 overflow-x-hidden flex flex-col lg:rounded-[2rem] lg:border lg:border-white/5 lg:shadow-2xl lg:shadow-black bg-[#0a0a0a] w-full relative">

                {/* Grid Background */}
                <div className="absolute inset-0 w-full h-full pointer-events-none z-0 bg-grid-pattern opacity-50" />

                {/* Vignette */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0a]/50 to-[#0a0a0a] z-0 pointer-events-none" />

                {/* Subtle Emerald glow for the header area */}
                <div className="absolute top-0 left-0 w-full h-[500px] bg-emerald-500/5 blur-[150px] pointer-events-none z-0" />

                <Navbar />

                <div className="relative z-10 flex flex-col pt-32 pb-24">
                    <article className="max-w-4xl mx-auto px-6 md:px-12 w-full">

                        {/* Back Button */}
                        <Link
                            href="/blog"
                            className="inline-flex items-center gap-2 text-zinc-500 hover:text-white transition-colors text-sm font-mono-custom mb-12"
                        >
                            <Icon icon="solar:arrow-left-linear" />
                            Back to Blog
                        </Link>

                        {/* Article Header */}
                        <header className="mb-12 md:mb-16">
                            <div className="flex items-center gap-4 text-zinc-500 font-mono-custom text-xs mb-6">
                                <span>{post.date}</span>
                                <span className="w-1 h-1 rounded-full bg-zinc-800"></span>
                                <span>{post.readTime}</span>
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-7xl text-white font-tech tracking-tight leading-[1.1] mb-8">
                                {post.title}
                            </h1>

                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-500">
                                    <Icon icon="solar:pen-bold-duotone" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-sm text-zinc-200 font-medium">{post.author}</span>
                                    <span className="text-xs text-zinc-500">FlowScale</span>
                                </div>
                            </div>
                        </header>

                        {/* Cover Image in Article */}
                        {post.coverImage && (
                            <div className="mb-16 w-full h-[300px] md:h-[500px] rounded-2xl overflow-hidden border border-white/5 relative bg-zinc-900 shadow-2xl">
                                <img
                                    src={post.coverImage}
                                    alt={post.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        )}

                        {/* Article Content - rendered with ReactMarkdown */}
                        {/* Using @tailwindcss/typography .prose classes for elegant formatting */}
                        <div className="prose prose-invert prose-emerald prose-lg md:prose-xl max-w-none text-zinc-300 font-light leading-relaxed font-sans prose-headings:font-tech prose-headings:font-light prose-h3:text-zinc-200 prose-p:mb-8">
                            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                                {post.content}
                            </ReactMarkdown>
                        </div>

                        {/* Article Footer & Share */}
                        <footer className="mt-24 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-6">
                            <div className="flex items-center gap-2 text-zinc-400 text-sm">
                                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                                End of transmission
                            </div>
                            <div className="flex gap-4">
                                <button className="w-10 h-10 rounded-full border border-white/5 bg-zinc-900/50 flex items-center justify-center text-zinc-400 hover:text-white hover:border-white/20 transition-all">
                                    <Icon icon="simple-icons:x" width="16" />
                                </button>
                                <button className="w-10 h-10 rounded-full border border-white/5 bg-zinc-900/50 flex items-center justify-center text-zinc-400 hover:text-white hover:border-white/20 transition-all">
                                    <Icon icon="simple-icons:linkedin" width="16" />
                                </button>
                                <button className="w-10 h-10 rounded-full border border-white/5 bg-zinc-900/50 flex items-center justify-center text-zinc-400 hover:text-white hover:border-white/20 transition-all">
                                    <Icon icon="solar:link-bold-duotone" width="18" />
                                </button>
                            </div>
                        </footer>

                    </article>
                </div>

                <PlatformFooter />
            </main>
        </div>
    );
}
