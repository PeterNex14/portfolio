"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function NavigationBar() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("");

    const links = [
        { href: "#about", label: "About" },
        { href: "#experience", label: "Experience" },
        { href: "#projects", label: "Projects" },
        { href: "#skills", label: "Skills & Tech" },
        { href: "#certifications", label: "Certifications" },
    ];

    useEffect(() => {
        const handleScroll = () => {
            const sections = links.map(l => l.href.substring(1));
            let current = "";
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    // Consider it active if top is within the upper 40% of the screen
                    if (rect.top <= window.innerHeight * 0.4) {
                        current = "#" + section;
                    }
                }
            }
            // If user scrolled to the absolute bottom, highlight the last section
            if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 50) {
                current = links[links.length - 1].href;
            }
            // Default to "About" section when at the very top
            if (window.scrollY < 50) {
                current = links[0].href;
            }
            setActiveSection(current);
        };
        window.addEventListener("scroll", handleScroll);
        // trigger once initially
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className="fixed top-6 left-0 right-0 z-50 bg-transparent py-2 px-6 flex flex-row items-center justify-between transition-all duration-300">
            {/* Left: Brand (Removed per request) */}

            {/* Center: Desktop Links */}
            <div className="hidden md:flex flex-row gap-2 items-center absolute left-1/2 -translate-x-1/2 bg-white/30 backdrop-blur-md p-1.5 rounded-full border border-white/40 shadow-sm">
                {links.map((link) => {
                    const isActive = activeSection === link.href;
                    return (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`relative px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                                isActive
                                    ? "text-white bg-gradient-to-r from-orange-500 to-rose-500 shadow-md shadow-orange-500/20"
                                    : "text-gray-600 hover:text-gray-900 hover:bg-white/40"
                            }`}
                        >
                            {link.label}
                        </Link>
                    );
                })}
            </div>

            {/* Mobile Menu Button */}
            <button
                onClick={() => setIsOpen((prev) => !prev)}
                className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition focus:outline-none"
            >
                {isOpen ? (
                    <X className="w-6 h-6 text-gray-800" />
                ) : (
                    <Menu className="w-6 h-6 text-gray-800" />
                )}
            </button>

            {/* Mobile Menu Drawer */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        key="mobile-menu"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl shadow-xl border-t border-gray-100 z-40"
                    >
                        <div className="flex flex-col items-center gap-2 py-6 px-4">
                            {links.map((link) => {
                                const isActive = activeSection === link.href;
                                return (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className={`w-full text-center font-semibold text-lg py-3 rounded-xl transition-all duration-300 ${
                                            isActive
                                                ? "bg-gradient-to-r from-orange-500 to-rose-500 text-white shadow-lg shadow-orange-500/30"
                                                : "text-gray-700 hover:bg-gray-100"
                                        }`}
                                    >
                                        {link.label}
                                    </Link>
                                );
                            })}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
