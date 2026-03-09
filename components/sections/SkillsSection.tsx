"use client";
import SkillItem from "@/components/SkillItem";
import {
    BiLogoMongodb,
    BiLogoPostgresql,
    BiLogoSpringBoot,
    BiLogoTypescript,
} from "react-icons/bi";
import { DiDart } from "react-icons/di";
import { FaCss3Alt, FaDatabase, FaNodeJs } from "react-icons/fa";
import { FaHtml5, FaFlutter } from "react-icons/fa6";
import {
    RiJavascriptFill,
    RiNextjsFill,
    RiSupabaseFill,
    RiTailwindCssFill,
} from "react-icons/ri";
import { SiJetpackcompose, SiKotlin, SiPostman } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { motion } from "framer-motion";

export default function SkillsSection() {
    const frontend = [
        { icon: <FaHtml5 className="w-8 h-8" />, label: "HTML 5" },
        { icon: <FaCss3Alt className="w-8 h-8" />, label: "CSS 3" },
        { icon: <RiJavascriptFill className="w-8 h-8" />, label: "JavaScript" },
        { icon: <RiNextjsFill className="w-8 h-8" />, label: "Next.JS" },
        { icon: <RiTailwindCssFill className="w-8 h-8" />, label: "Tailwind" },
        { icon: <BiLogoTypescript className="w-8 h-8" />, label: "TypeScript" },
    ];

    const backend = [
        { icon: <FaNodeJs className="w-8 h-8" />, label: "Node.JS" },
        { icon: <BiLogoSpringBoot className="w-8 h-8" />, label: "Spring" },
        { icon: <BiLogoPostgresql className="w-8 h-8" />, label: "PostgreSQL" },
        { icon: <RiSupabaseFill className="w-8 h-8" />, label: "Supabase" },
        { icon: <BiLogoMongodb className="w-8 h-8" />, label: "MongoDB" },
        { icon: <SiPostman className="w-8 h-8" />, label: "Postman" },
    ];

    const android = [
        { icon: <SiKotlin className="w-8 h-8" />, label: "Kotlin" },
        { icon: <SiJetpackcompose className="w-8 h-8" />, label: "Compose" },
        { icon: <FaDatabase className="w-8 h-8" />, label: "Room" },
        { icon: <DiDart className="w-8 h-8" />, label: "Dart" },
        { icon: <FaFlutter className="w-8 h-8" />, label: "Flutter" },
        { icon: <TbBrandReactNative className="w-8 h-8" />, label: "React Native" },
    ];

    return (
        <section id="skills" className="relative w-full py-20 px-4 sm:px-6 lg:px-8 bg-white">
            {/* Background elements */}
            <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-30 mask-image:linear-gradient(to_bottom,transparent,black,transparent)" />
            
            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="font-sans text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 inline-block">
                        Skills & Technology
                    </h2>
                    <div className="mt-4 w-24 h-1.5 bg-gradient-to-r from-orange-500 to-rose-500 rounded-full mx-auto" />
                </motion.div>

                <div className="flex flex-col lg:flex-row gap-8 justify-center items-stretch">
                    {[
                        { title: "Frontend", data: frontend, color: "from-blue-500 to-indigo-500" },
                        { title: "Backend", data: backend, color: "from-emerald-500 to-teal-500" },
                        { title: "Mobile", data: android, color: "from-orange-500 to-rose-500" },
                    ].map((category, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.2, duration: 0.6, ease: "easeOut" }}
                            viewport={{ once: true }}
                            className="flex-1 flex flex-col p-6 sm:p-8 rounded-[2rem] text-center shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100 bg-white/80 backdrop-blur-xl hover:shadow-[0_8px_40px_rgb(0,0,0,0.12)] transition-all duration-300 relative group overflow-hidden"
                        >
                            <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${category.color} opacity-80`} />
                            
                            <h3 className="font-sans font-bold text-3xl mb-8 text-gray-800">
                                {category.title}
                            </h3>

                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 flex-1">
                                {category.data.map((item, j) => (
                                    <div key={j} className="flex flex-col items-center justify-center gap-3 p-4 rounded-2xl hover:bg-gray-50 transition-colors group/item">
                                        <div className="text-gray-600 group-hover/item:text-gray-900 transition-colors duration-300 drop-shadow-sm group-hover/item:drop-shadow-md group-hover/item:scale-110 transform">
                                            {item.icon}
                                        </div>
                                        <span className="font-mono text-xs sm:text-sm font-medium text-gray-500 group-hover/item:text-gray-800 transition-colors">
                                            {item.label}
                                        </span>
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
