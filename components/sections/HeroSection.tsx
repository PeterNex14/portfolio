"use client";
import SkillsFieldComponents from "@/components/FieldAnimation";
import { MdEmail } from "react-icons/md";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaBluesky } from "react-icons/fa6";
import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section id="about" className="relative flex flex-col pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      
      {/* 🔹 Background Gradients for depth and aesthetic */}
      <div className="absolute top-20 right-0 w-[50%] h-[50%] bg-orange-400 opacity-20 blur-[120px] rounded-full -z-10 pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[40%] h-[40%] bg-blue-500 opacity-20 blur-[120px] rounded-full -z-10 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-purple-500 opacity-10 blur-[150px] rounded-full -z-10 pointer-events-none" />

      {/* Hero Content (First half of the section) */}
      <div className="flex flex-col md:flex-row flex-1 p-2 md:p-6 gap-6 md:gap-10">
        {/* Left Intro Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          className="relative flex-1 bg-white/40 backdrop-blur-3xl border border-white/50 rounded-3xl p-6 sm:p-8 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden order-2 md:order-1"
        >
          <div className="relative z-10 flex flex-col justify-between h-full">
            <div className="flex flex-col gap-2">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-mono font-medium text-gray-900 tracking-tight">
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-rose-500 font-bold">Gabsee</span>
              </h1>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-mono font-bold text-gray-800 mb-6 drop-shadow-sm min-h-[80px] sm:min-h-[60px] md:min-h-[80px]">
                <SkillsFieldComponents />
              </h2>
              <p className="font-mono text-gray-600 mb-6 text-sm sm:text-base leading-relaxed max-w-2xl">
                Results-driven Software Developer specializing in robust Backend
                systems and native Android applications. Proficient in Go,
                Kotlin, and modern architectural patterns — dedicated to building
                scalable APIs and delivering smooth, high-performance mobile
                experiences that scale.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex flex-wrap gap-4 mt-6">
              {[
                { href: "mailto:peternex42@gmail.com", icon: <MdEmail className="w-5 h-5 sm:w-6 sm:h-6" />, color: "hover:text-red-500" },
                { href: "https://www.instagram.com/petersompotan", icon: <FaInstagram className="w-5 h-5 sm:w-6 sm:h-6" />, color: "hover:text-pink-500" },
                { href: "https://www.linkedin.com/in/gabsee", icon: <FaLinkedin className="w-5 h-5 sm:w-6 sm:h-6" />, color: "hover:text-blue-600" },
                { href: "https://bsky.app/profile/pemodev.bsky.social", icon: <FaBluesky className="w-5 h-5 sm:w-6 sm:h-6" />, color: "hover:text-sky-500" },
              ].map(({ href, icon, color }, index) => (
                <a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 sm:p-4 bg-white shadow-md border border-gray-100 rounded-full text-gray-600
                    transition-all duration-300 ease-in-out 
                    hover:-translate-y-2 hover:scale-110 hover:shadow-xl ${color}`}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right Section Hero Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          className="relative w-full md:w-[35%] h-72 sm:h-96 md:h-auto order-1 md:order-2 group rounded-3xl overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10 rounded-3xl pointer-events-none" />
          <Image
            src="/foto.JPG"
            fill
            sizes="(max-width: 768px) 100vw, 35vw"
            priority
            alt="Foto"
            className="object-cover rounded-3xl shadow-xl transition-transform duration-700 group-hover:scale-105"
          />
        </motion.div>
      </div>

      {/* About Section Extension */}
      <div className="flex flex-col md:flex-row p-2 md:p-6 gap-10 md:gap-20 mt-16 pb-20 items-center">
         {/* 🔹 About Image */}
         <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative w-full md:w-1/2 h-64 md:h-[400px] flex justify-center order-2 md:order-1"
         >
            <div className="absolute inset-0 bg-gradient-to-tr from-orange-100 to-rose-100 rounded-[3rem] -rotate-3 scale-95 blur-sm -z-10" />
            <Image
                src="/foto_design.png"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                alt="Foto"
                className="object-contain drop-shadow-2xl"
            />
        </motion.div>

        {/* 🔹 About Text & Stats */}
        <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-6 md:w-1/2 order-1 md:order-2 text-center md:text-left"
        >
            <h2 className="font-sans text-4xl sm:text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">
                About Me
            </h2>

            <div className="font-mono text-sm md:text-base leading-relaxed text-gray-600 space-y-4">
                <p>
                    My name is Peter Gabriel Sompotan, and I am a Computer Science graduate specializing in Software Development.
                    I am deeply passionate about building the complete product lifecycle: from architecting resilient API services and database structures in Go, to crafting seamless, reactive native mobile experiences using Kotlin and Jetpack Compose.
                </p>
                <p>
                    I focus on creating technically robust, scalable systems that solve real-world problems.
                    Whether it is optimizing backend performance or ensuring smooth, offline-first mobile interactions, I am a curious engineer eager to tackle complex technical challenges and continuously evolve my skillset.
                </p>
            </div>

            {/* 🔹 Stats Section */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6 mt-4">
                {[
                    { value: "4+", label: "Years Learning" },
                    { value: "3+", label: "Contribute Events" },
                    { value: "5+", label: "Contribute Projects" },
                    { value: "10+", label: "Technology Stacks" },
                ].map((item, i) => (
                    <motion.div
                        key={i}
                        whileHover={{ y: -5, scale: 1.02 }}
                        className="flex flex-col justify-center items-center bg-white/70 backdrop-blur-md shadow-sm border border-gray-100 rounded-2xl p-4 sm:p-5 gap-1 
                        hover:shadow-xl hover:bg-white hover:border-orange-100 transition-all duration-300"
                    >
                        <p className="font-sans font-bold text-3xl sm:text-4xl text-orange-500">{item.value}</p>
                        <p className="font-mono text-xs sm:text-sm text-gray-500 font-medium">{item.label}</p>
                    </motion.div>
                ))}
            </div>
        </motion.div>
      </div>

    </section>
  );
}
