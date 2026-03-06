"use client";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { BlogPost } from "@/lib/blog";

export default function ArticleList({ articles }: { articles: BlogPost[] }) {
    return (
        <div className="max-w-5xl mx-auto py-16 px-6 md:px-12 relative z-20">

            {/* Decorative Top Line */}
            <div className="flex items-center gap-4 mb-16 opacity-50">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                <div className="h-[1px] flex-1 bg-gradient-to-r from-emerald-500/50 to-transparent"></div>
            </div>

            <div className="flex flex-col gap-16 md:gap-24">
                {articles.map((article) => (
                    <article
                        key={article.slug}
                        className="group relative flex flex-col md:flex-row gap-8 md:gap-16 items-start transition-all duration-300"
                    >
                        {/* Read Time / Date Column */}
                        <div className="w-full md:w-32 shrink-0 flex flex-col gap-2 pt-2 text-zinc-500 font-mono-custom text-xs">
                            <span>{article.date}</span>
                            <span className="opacity-50">— {article.readTime}</span>
                        </div>

                        {/* Content Column */}
                        <div className="flex-1 w-full">
                            <Link href={`/blog/${article.slug}`} className="block">

                                {/* Cover Image in List */}
                                {article.coverImage && (
                                    <div className="w-full h-[240px] md:h-[320px] rounded-2xl overflow-hidden mb-8 border border-white/5 relative bg-zinc-900 group-hover:border-white/10 transition-colors">
                                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
                                        <img
                                            src={article.coverImage}
                                            alt={article.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                                        />
                                    </div>
                                )}

                                <h3 className="text-2xl md:text-3xl text-zinc-200 group-hover:text-emerald-400 font-tech font-light mb-4 transition-colors">
                                    {article.title}
                                </h3>
                                <p className="text-zinc-400 text-base md:text-lg leading-relaxed font-light mb-6 line-clamp-3">
                                    {article.excerpt}
                                </p>

                                <div className="flex items-center gap-2 text-emerald-500 text-sm font-medium font-mono-custom opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300">
                                    Read Article <Icon icon="solar:arrow-right-linear" />
                                </div>
                            </Link>
                        </div>
                    </article>
                ))}
            </div>

        </div>
    );
}
