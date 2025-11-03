"use client";
import SkillItem from "@/components/SkillItem";
import { BiLogoMongodb, BiLogoPostgresql, BiLogoSpringBoot, BiLogoTypescript } from "react-icons/bi";
import { DiDart } from "react-icons/di";
import { FaCss3Alt, FaDatabase, FaNodeJs } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa6";
import { FaFlutter } from "react-icons/fa6";
import { RiJavascriptFill, RiNextjsFill, RiSupabaseFill, RiTailwindCssFill } from "react-icons/ri";
import { SiJetpackcompose, SiKotlin, SiPostman } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { motion } from "framer-motion";

export default function SkillsPage() {
    const frontend = [
        { icon: <FaHtml5 className="w-7 h-7" />, label: "HTML 5" },
        { icon: <FaCss3Alt className="w-7 h-7" />, label: "CSS 3" },
        { icon: <RiJavascriptFill className="w-7 h-7" />, label: "JavaScript" },
        { icon: <RiNextjsFill className="w-7 h-7" />, label: "Next.JS" },
        { icon: <RiTailwindCssFill className="w-7 h-7" />, label: "Tailwind" },
        { icon: <BiLogoTypescript className="w-7 h-7" />, label: "TypeScript" },
    ];

    const backend = [
        { icon: <FaNodeJs className="w-7 h-7" />, label: "Node.JS" },
        { icon: <BiLogoSpringBoot className="w-7 h-7" />, label: "Spring" },
        { icon: <BiLogoPostgresql className="w-7 h-7" />, label: "PostgreSQL" },
        { icon: <RiSupabaseFill className="w-7 h-7" />, label: "Supabase" },
        { icon: <BiLogoMongodb className="w-7 h-7" />, label: "MongoDB" },
        { icon: <SiPostman className="w-7 h-7" />, label: "Postman" },
    ];

    const android = [
        { icon: <SiKotlin className="w-7 h-7" />, label: "Kotlin" },
        { icon: <SiJetpackcompose className="w-7 h-7" />, label: "Compose" },
        { icon: <FaDatabase className="w-7 h-7" />, label: "Room" },
        { icon: <DiDart className="w-7 h-7" />, label: "Dart" },
        { icon: <FaFlutter className="w-7 h-7" />, label: "Flutter" },
        { icon: <TbBrandReactNative className="w-7 h-7" />, label: "React Native" },
    ];

    const cardVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.3,
                duration: 0.5,
                ease: "easeOut",
            },
        }),
    };

    return (
        <div className="flex flex-col min-h-screen w-full px-4 sm:px-6 py-10">
            {/* Title */}
            <p className="font-sans text-3xl sm:text-4xl text-center mb-8">
                Skills & Technology
            </p>

            {/* Skill Categories */}
            <div className="flex flex-col md:flex-row gap-6 md:gap-4 justify-center items-stretch">
                {[
                    { title: "Frontend", data: frontend },
                    { title: "Backend", data: backend },
                    { title: "Android", data: android },
                ].map((category, i) => (
                    <motion.div
                        key={i}
                        custom={i}
                        variants={cardVariants}
                        initial="hidden"
                        animate="visible"
                        className="flex flex-col items-center justify-between
                                   p-6 w-full md:w-1/3 rounded-2xl text-center 
                                   shadow-lg border border-gray-100 bg-white/70 backdrop-blur-sm 
                                   hover:shadow-2xl transition-all duration-300"
                    >
                        <p className="font-mono font-bold text-2xl sm:text-3xl mb-4">
                            {category.title}
                        </p>

                        {/* Grid adjusts by screen size */}
                        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-3 gap-3 sm:gap-4">
                            {category.data.map((item, j) => (
                                <SkillItem key={j} icon={item.icon} label={item.label} />
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
