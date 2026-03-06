"use client";
import Link from "next/link";
import { Icon } from "@iconify/react";

export default function PlatformFooter() {
    const links = {
        product: [
            { label: "How It Works", href: "#" },
            { label: "Open Source", href: "#" },
            { label: "Enterprise", href: "#" }
        ],
        resources: [
            { label: "Documentation", href: "#" },
            { label: "GitHub", href: "#" }
        ],
        company: [
            { label: "FlowScale", href: "/about" },
            { label: "Blog", href: "/blog" }
        ],
        legal: [
            { label: "Privacy", href: "#" },
            { label: "Terms", href: "#" }
        ]
    };

    return (
        <footer className="relative z-20 bg-[#080809] border-t border-white/5 py-16 px-6 md:px-12">
            <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-8 mb-16">

                {/* Brand */}
                <div className="col-span-2 md:col-span-1 flex flex-col gap-4">
                    <div className="flex items-center gap-2">
                        <img src="/logo-dark.png" alt="FlowScale" className="h-6 w-auto opacity-80" />
                        <span className="text-white font-tech font-bold tracking-tight">FlowScale</span>
                    </div>
                    <p className="text-zinc-500 text-sm">
                        AI Operating System for the Creative Pipeline
                    </p>
                </div>

                {/* Links */}
                <div className="flex flex-col gap-4">
                    <h4 className="text-white font-medium text-sm font-tech">Product</h4>
                    <ul className="space-y-3">
                        {links.product.map((link, idx) => (
                            <li key={idx}>
                                <Link href={link.href} className="text-zinc-400 hover:text-white text-sm transition-colors">
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="flex flex-col gap-4">
                    <h4 className="text-white font-medium text-sm font-tech">Resources</h4>
                    <ul className="space-y-3">
                        {links.resources.map((link, idx) => (
                            <li key={idx}>
                                <Link href={link.href} className="text-zinc-400 hover:text-white text-sm transition-colors flex items-center gap-1.5">
                                    {link.label}
                                    {link.label === "GitHub" && <Icon icon="simple-icons:github" className="w-3 h-3" />}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="flex flex-col gap-4">
                    <h4 className="text-white font-medium text-sm font-tech">Company</h4>
                    <ul className="space-y-3">
                        {links.company.map((link, idx) => (
                            <li key={idx}>
                                <Link href={link.href} className="text-zinc-400 hover:text-white text-sm transition-colors">
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="flex flex-col gap-4">
                    <h4 className="text-white font-medium text-sm font-tech">Legal</h4>
                    <ul className="space-y-3">
                        {links.legal.map((link, idx) => (
                            <li key={idx}>
                                <Link href={link.href} className="text-zinc-400 hover:text-white text-sm transition-colors">
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>

            {/* Bottom Bar */}
            <div className="max-w-7xl mx-auto border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="text-zinc-600 text-xs font-mono-custom uppercase tracking-widest">
                    &copy; {new Date().getFullYear()} FlowScale AI. All rights reserved.
                </p>
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                    <span className="text-emerald-500 text-xs font-mono-custom uppercase tracking-widest">Systems Normal</span>
                </div>
            </div>
        </footer>
    );
}
