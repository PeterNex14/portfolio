"use client";
import { motion } from "framer-motion";
import { FaCertificate } from "react-icons/fa6";
import { FiExternalLink } from "react-icons/fi";

export default function CertificationsSection() {
    const certifications = [
        {
            title: "Belajar Fundamental Aplikasi Android",
            issuer: "Dicoding",
            date: "March 2026 - 2029",
            icon: <FaCertificate className="w-8 h-8 text-blue-500" />
        },
        {
            title: "Memulai Pemrograman dengan Python",
            issuer: "Dicoding",
            date: "February 2026 - 2029",
            icon: <FaCertificate className="w-8 h-8 text-yellow-500" />
        },
        {
            title: "Belajar Dasar AI",
            issuer: "Dicoding",
            date: "February 2026 - 2029",
            icon: <FaCertificate className="w-8 h-8 text-purple-500" />
        },
        {
            title: "Belajar Dasar Git dengan GitHub",
            issuer: "Dicoding",
            date: "February 2026 - 2029",
            icon: <FaCertificate className="w-8 h-8 text-red-500" />
        },
        {
            title: "Pengenalan ke Logika Pemrograman (Programming Logic 101)",
            issuer: "Dicoding",
            date: "February 2026 - 2029",
            icon: <FaCertificate className="w-8 h-8 text-indigo-500" />
        },
        {
            title: "Memulai Dasar Pemrograman untuk Menjadi Pengembang Software",
            issuer: "Dicoding",
            date: "February 2026 - 2029",
            icon: <FaCertificate className="w-8 h-8 text-cyan-500" />
        },
        {
            title: "Membangun Aplikasi Gen AI dengan Microsoft Azure",
            issuer: "Dicoding",
            date: "October 2025 - 2028",
            icon: <FaCertificate className="w-8 h-8 text-sky-500" />
        },
        {
            title: "Belajar Penerapan Data Science dengan Microsoft Fabric",
            issuer: "Dicoding",
            date: "October 2025 - 2028",
            icon: <FaCertificate className="w-8 h-8 text-fuchsia-500" />
        },
        {
            title: "Belajar Membuat Aplikasi Android untuk Pemula",
            issuer: "Dicoding",
            date: "October 2025 - 2028",
            icon: <FaCertificate className="w-8 h-8 text-orange-500" />
        },
        {
            title: "Memulai Pemrograman dengan Kotlin",
            issuer: "Dicoding",
            date: "October 2025 - 2028",
            icon: <FaCertificate className="w-8 h-8 text-violet-500" />
        },
        {
            title: "Belajar Membuat Aplikasi Flutter untuk Pemula",
            issuer: "Dicoding",
            date: "November 2023 - 2026",
            icon: <FaCertificate className="w-8 h-8 text-teal-500" />
        },
        {
            title: "Memulai Pemrograman dengan Dart",
            issuer: "Dicoding",
            date: "October 2023 - 2026",
            icon: <FaCertificate className="w-8 h-8 text-rose-500" />
        },
        {
            title: "Belajar Dasar Structured Query Language (SQL)",
            issuer: "Dicoding",
            date: "September 2023 - 2026",
            icon: <FaCertificate className="w-8 h-8 text-emerald-500" />
        }
    ];

    return (
        <section id="certifications" className="relative w-full py-20 px-4 sm:px-6 lg:px-8 bg-gray-50/50">
            <div className="max-w-7xl mx-auto">
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="font-sans text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 inline-block">
                        Certifications
                    </h2>
                    <div className="mt-4 w-24 h-1.5 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full mx-auto" />
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {certifications.map((cert, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative flex flex-col p-5 sm:p-6 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300"
                        >
                            <div className="flex justify-between items-start mb-4">
                                <div className="p-3 bg-gray-50 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                                    {cert.icon}
                                </div>
                                <span className="text-xs font-mono font-bold text-gray-400 bg-gray-50 px-3 py-1 rounded-full">
                                    {cert.date}
                                </span>
                            </div>
                            
                            <h3 className="font-sans text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                                {cert.title}
                            </h3>
                            <p className="font-mono text-sm font-medium text-gray-500 mt-auto">
                                Issued by {cert.issuer}
                            </p>

                            {/* Hover accent edge */}
                            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gray-200 to-transparent group-hover:via-emerald-400 transition-all duration-500 rounded-b-3xl" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
