"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function NavigationBar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    const links = [
        { href: "/about", label: "About" },
        { href: "/projects", label: "Projects" },
        { href: "/experience", label: "Experience" },
        { href: "/skills", label: "Skills & Tech" },
    ];

    return (
        <nav className="pt-6 px-6 flex flex-row items-center justify-between relative z-50">
            {/* Left: Brand */}
            <Link
                href="/"
                className="font-sans text-2xl font-semibold text-gray-900 hover:text-orange-600 transition"
                onClick={() => setIsOpen(false)}
            >
                Gabsee
            </Link>

            {/* Desktop Links */}
            <div className="hidden md:flex flex-row gap-4 items-center">
                {links.map((link) => {
                    const isActive = pathname === link.href;
                    return (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setIsOpen(false)} // ✅ Close menu on click
                            className={`font-normal text-lg px-4 py-1 rounded-lg transition 
                                ${isActive
                                    ? "bg-orange-500 text-white shadow-md"
                                    : "hover:bg-orange-100 hover:text-black hover:shadow-md"
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
                className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition z-50"
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
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-20 left-0 w-full bg-white shadow-lg border-t border-gray-200 z-40"
                    >
                        <div className="flex flex-col items-center gap-3 py-4">
                            {links.map((link) => {
                                const isActive = pathname === link.href;
                                return (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        onClick={() => setIsOpen(false)} // ✅ Close when selecting
                                        className={`w-[90%] text-center font-medium text-lg py-2 rounded-md transition
                                            ${isActive
                                                ? "bg-orange-500 text-white shadow"
                                                : "hover:bg-orange-100 hover:text-black"
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
