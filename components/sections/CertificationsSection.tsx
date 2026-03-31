"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaAward, FaCertificate } from "react-icons/fa6";
import { FiExternalLink } from "react-icons/fi";
import React from "react";

const IconMap: Record<string, React.ElementType> = {
    FaAward: FaAward,
    FaCertificate: FaCertificate,
};

export default function CertificationsSection() {
    const [certifications, setCertifications] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCertifications = async () => {
            try {
                const res = await fetch('/api/certifications');
                if (res.ok) {
                    const data = await res.json();
                    setCertifications(data);
                }
            } catch (error) {
                console.error('Failed to fetch certifications:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchCertifications();
    }, []);

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
                                    {cert.icon && IconMap[cert.icon] ? (
                                        React.createElement(IconMap[cert.icon], { className: `w-8 h-8 ${cert.iconColor}` })
                                    ) : (
                                        <FaAward className={`w-8 h-8 ${cert.iconColor || 'text-gray-400'}`} />
                                    )}
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
                    {loading && Array.from({ length: 6 }).map((_, i) => (
                        <div key={i} className="h-[200px] rounded-3xl bg-gray-200 animate-pulse hidden sm:block"></div>
                    ))}
                </div>
            </div>
        </section>
    );
}
