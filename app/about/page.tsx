"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutPage() {
    return (
        <div className="p-6 min-h-screen flex items-center justify-center">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative flex flex-col md:flex-row rounded-2xl gap-10 md:gap-20 w-full max-w-7xl"
            >
                {/* 🔹 Background Gradient Blob */}
                <div className="absolute bottom-0 left-0 w-[80%] md:w-[40%] h-[50%] md:h-[60%] opacity-40 blur-[100px] -z-10
          bg-[linear-gradient(90deg,#DA6835_0%,#CE2764_54%,#6422A6_100%)]" />

                {/* 🔹 Image Section */}
                <div className="relative w-full h-64 md:h-auto flex justify-center">
                    <Image
                        src="/foto_design.png"
                        fill
                        alt="Foto"
                        className="object-contain rounded-2xl"
                    />
                </div>

                {/* 🔹 Text Section */}
                <div className="flex flex-col gap-6 md:gap-10 justify-center pr-0 md:pr-10 text-center md:text-left">
                    <p className="font-sans text-4xl md:text-6xl">About Me</p>

                    <p className="font-mono text-sm md:text-base leading-relaxed text-gray-700">
                        My name is Peter Gabriel Sompotan, and I am a Computer Science graduate specializing in Software Development.
                        I build apps primarily using Kotlin and Jetpack Compose, familiar with Dart for Flutter, TypeScript with React Native and Next.JS.
                    </p>

                    <p className="font-mono text-sm md:text-base leading-relaxed text-gray-700">
                        I focus on creating clean, user-friendly apps that solve real-world problems and continuously improve through learning.
                        I am curious and motivated to tackle challenges where mobile apps can enhance users’ productivity,
                        and I am eager to grow as a developer, advance toward becoming a software engineer, and contribute to impactful projects.
                    </p>

                    <p className="font-mono text-sm md:text-base leading-relaxed text-gray-700">
                        Outside of coding, I enjoy reading self-improvement books and engaging in social activities and networking.
                    </p>

                    {/* 🔹 Stats Section */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 w-full max-w-3xl mx-auto md:mx-0">
                        {[
                            { value: "4+", label: "Years Learning" },
                            { value: "3+", label: "Contribute Events" },
                            { value: "5+", label: "Contribute Projects" },
                            { value: "10+", label: "Technology Stacks" },
                        ].map((item, i) => (
                            <div
                                key={i}
                                className="flex flex-col justify-center items-center shadow-md rounded-2xl p-4 sm:p-6 h-28 sm:h-32 gap-2 
                transition delay-150 duration-300 ease-in-out 
                hover:-translate-y-1 hover:scale-105 hover:bg-gray-50 hover:shadow-2xl"
                            >
                                <p className="font-sans text-2xl sm:text-4xl">{item.value}</p>
                                <p className="text-sm sm:text-base">{item.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
