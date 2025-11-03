"use client";
import SkillsFieldComponents from "@/components/FieldAnimation";
import { MdEmail } from "react-icons/md";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaBluesky } from "react-icons/fa6";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex flex-col md:flex-row flex-1 p-6 md:p-10 gap-6 md:gap-10">
        {/* Left Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="relative flex-1 bg-gray-100 rounded-2xl p-6 sm:p-8 md:p-10 overflow-hidden order-2 md:order-1"
        >
          {/* Background Blobs */}
          <div className="absolute top-0 right-0 w-[70%] h-[60%] bg-orange-400 opacity-40 blur-[100px]" />
          <div className="absolute bottom-0 right-0 w-[50%] h-[50%] bg-blue-400 opacity-20 blur-[120px]" />
          <div className="absolute bottom-10 right-0 w-[60%] h-[60%] bg-black opacity-10 blur-[80px]" />

          {/* Content */}
          <div className="relative z-10 flex flex-col justify-between h-full">
            <div className="flex flex-col gap-2">
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-mono font-medium text-gray-900">
                Hi, I'm Gabsee
              </h1>
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-mono font-bold text-gray-900 mb-4">
                <SkillsFieldComponents />
              </h2>
              <p className="font-mono text-gray-700 mb-6 text-sm sm:text-base leading-relaxed">
                High-achieving Software Developer dedicated to building elegant
                and highly functional solutions across the mobile and web
                ecosystem. Proficient in Kotlin, Jetpack, Next.JS, and testing
                practices — delivering sophisticated UIs that resonate with
                users.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mt-4">
              {[
                {
                  href: "mailto:peternex42@gmail.com",
                  icon: <MdEmail className="w-6 h-6" />,
                },
                {
                  href: "https://www.instagram.com/petersompotan",
                  icon: <FaInstagram className="w-6 h-6" />,
                },
                {
                  href: "https://www.linkedin.com/in/gabsee",
                  icon: <FaLinkedin className="w-6 h-6" />,
                },
                {
                  href: "https://bsky.app/profile/pemodev.bsky.social",
                  icon: <FaBluesky className="w-6 h-6" />,
                },
              ].map(({ href, icon }, index) => (
                <a
                  key={index}
                  href={href}
                  className="p-3 sm:p-4 shadow-md border border-gray-300 rounded-full 
                    transition-all duration-300 ease-in-out 
                    hover:-translate-y-1 hover:scale-110 hover:bg-gray-300 hover:shadow-2xl"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          className="relative w-full md:w-[40%] h-64 sm:h-80 md:h-auto order-1 md:order-2"
        >
          <Image
            src="/foto.JPG"
            fill
            alt="Foto"
            className="object-cover rounded-3xl shadow-md"
          />
        </motion.div>
      </main>
    </div>
  );
}
