"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type Experience = {
    id: string;
    role: string;
    company: string;
    startDate: string;
    endDate: string | null;
    description: string[];
};

export default function ExperienceSection() {
    const [experiences, setExperiences] = useState<Experience[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchExperiences = async () => {
            try {
                // Front-end fetching from the back-end API route
                const res = await fetch('/api/experiences');
                if (!res.ok) throw new Error('Failed to fetch data');
                const data = await res.json();
                setExperiences(data);
            } catch (error) {
                console.error("Error fetching experiences:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchExperiences();
    }, []);

    if (loading) {
        return (
            <section id="experience" className="relative w-full flex flex-col px-4 sm:px-6 py-20 bg-gray-50/50 min-h-[500px] items-center justify-center">
                <div className="w-8 h-8 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
            </section>
        );
    }

    return (
        <section id="experience" className="relative w-full flex flex-col px-4 sm:px-6 py-20 bg-gray-50/50">
            {/* Background Aesthetics */}
            <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-gradient-to-b from-orange-100 to-transparent opacity-60 rounded-full blur-[100px] pointer-events-none -z-10" />
            <div className="absolute bottom-20 left-0 w-[50%] h-[30%] bg-gradient-to-tr from-blue-100 to-transparent opacity-60 rounded-full blur-[120px] pointer-events-none -z-10" />

            <div className="max-w-6xl mx-auto w-full">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="font-sans text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 inline-block">
                        Experience
                    </h2>
                    <div className="mt-4 w-24 h-1.5 bg-gradient-to-r from-orange-500 to-rose-500 rounded-full mx-auto" />
                </motion.div>

                <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {experiences.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.6,
                                delay: i * 0.15,
                                ease: "easeOut",
                            }}
                            viewport={{ once: true }}
                            className="group relative flex flex-col p-6 sm:p-8 rounded-3xl bg-white/80 backdrop-blur-sm border border-gray-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-2 z-10 overflow-hidden"
                        >
                            {/* Decorative Top Accent */}
                            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-gray-200 to-gray-200 group-hover:from-orange-500 group-hover:to-rose-500 transition-colors duration-500" />
                            
                            <h3 className="font-sans text-2xl font-bold text-gray-900 mb-1">{item.company}</h3>
                            <p className="font-mono text-sm sm:text-base font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-rose-500 mb-2">{item.role}</p>
                            <span className="inline-block px-3 py-1 mb-6 text-xs font-mono font-medium text-gray-500 bg-gray-100 rounded-full w-max">
                                {new Date(item.startDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                                {' - '}
                                {item.endDate ? new Date(item.endDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' }) : 'Present'}
                            </span>
                            
                            <div className="flex flex-col gap-3">
                                {item.description.map((desc, j) => (
                                    <div key={j} className="flex flex-row gap-3 items-start group/item">
                                        <div className="mt-1.5 w-1.5 h-1.5 bg-gray-300 group-hover/item:bg-orange-500 rounded-full shrink-0 transition-colors" />
                                        <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
