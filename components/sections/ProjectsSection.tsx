"use client";
import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight, FiGithub } from "react-icons/fi";
import { motion } from "framer-motion";

export default function ProjectsSection() {
    const projects = [
        {
            title: "Dicoding Events App",
            description: "Android application providing information about upcoming events from Dicoding. Explore, bookmark, and receive notifications.",
            image: "/dicoding-events.png",
            link: "https://github.com/PeterNex14/dicoding-event-app",
            type: "mobile",
            tech: ["Kotlin", "Retrofit", "Room", "Android View"],
            scale: "scale-250",
            offset: "bottom-[20%] right-[-30%]"
        },
        {
            title: "Chirpy",
            description: "Social media backend API built with Go. Demonstrates robust backend systems, authentication, and RESTful API design.",
            image: "/chirpy.png",
            link: "https://github.com/PeterNex14/Chirpy.git",
            type: "backend",
            tech: ["Go", "PostgreSQL", "JWT", "REST API"],
            scale: "scale-200",
            offset: "bottom-[20%] right-[-30%]"
        },
        {
            title: "Blog Aggregator",
            description: "Gator is a CLI tool built in Go that functions as a personal RSS feed aggregator.",
            image: "/blog-aggregator.png",
            link: "https://github.com/PeterNex14/blog-aggregator.git",
            type: "cli",
            tech: ["Go", "PostgreSQL", "CLI", "RSS"],
            scale: "scale-200",
            offset: "bottom-[20%] right-[-30%]"
        },
        {
            title: "Pokedex CLI",
            description: "CLI application written in Go. Interacts with the PokeAPI to simulate exploring and catching Pokemon.",
            image: "/pokedex.png",
            link: "https://github.com/PeterNex14/pokedex-cli.git",
            type: "cli",
            tech: ["Go", "REST API", "CLI"],
            scale: "scale-200",
            offset: "bottom-[20%] right-[-30%]"
        },
        {
            title: "Expense Tracker CLI",
            description: "Personal expense tracker for the CLI. Manage finances, record income/expenses, and view history from the terminal.",
            image: "/expense-tracker.png",
            link: "https://github.com/PeterNex14/expenses-tracker-cli.git",
            type: "cli",
            tech: ["Go", "SQLite", "CLI"],
            scale: "scale-200",
            offset: "bottom-[20%] right-[-30%]"
        },
        {
            title: "AI Agent Boot",
            description: "CLI-based AI coding assistant. Leverages Gemini API to perform autonomous tasks on the local file system.",
            image: "/ai-agent.png",
            link: "https://github.com/PeterNex14/ai-coding-agent.git",
            type: "cli",
            tech: ["Go", "Gemini API", "CLI"],
            scale: "scale-200",
            offset: "bottom-[20%] right-[-30%]"
        },
        {
            title: "Static Site Generator",
            description: "Custom-built in Python. Converts raw Markdown content into a full HTML website ready for deployment.",
            image: "/static-site.png",
            link: "https://github.com/PeterNex14/static-site-generator.git",
            type: "web",
            tech: ["Python", "Markdown", "HTML"],
            scale: "scale-200",
            offset: "bottom-[20%] right-[-30%]"
        },
        {
            title: "Bookbot",
            description: "CLI tool that analyzes text files to gather statistics, reporting word counts and character frequencies.",
            image: "/bookbot.png",
            link: "https://github.com/PeterNex14/Bookbot.git",
            type: "cli",
            tech: ["Python", "CLI", "Data Analysis"],
            scale: "scale-200",
            offset: "bottom-[20%] right-[-50%]"
        },
        {
            title: "Klinik Anugerah (Mobile)",
            description: "Digital medical record app utilizing React Native to facilitate patient registration and viewing of health data.",
            image: "/mockup.png",
            link: "#",
            type: "mobile",
            tech: ["React Native", "TypeScript", "Redux"],
            scale: "scale-150",
            offset: "bottom-[-60%] right-[-30%] w-[140%] h-[140%]"
        },
        {
            title: "Klinik Anugerah (Web)",
            description: "Digital medical record dashboard utilizing NextJS to facilitate administration and standardized access for medical staff.",
            image: "/mockup_dashboard.png",
            link: "#",
            type: "web",
            tech: ["Next.js", "TailwindCSS", "PostgreSQL"],
            scale: "scale-140",
            offset: "bottom-[-35%] right-[-50%] w-[140%] h-[140%]"
        },
        {
            title: "My City App",
            description: "Practice project built with Android Jetpack Compose displaying categories of city places.",
            image: "/phone-category.png",
            link: "https://github.com/PeterNex14/my-city-app.git",
            type: "mobile",
            tech: ["Kotlin", "Jetpack Compose"],
            scale: "scale-185",
            offset: "bottom-[-10%] w-full h-[60%]"
        },
        {
            title: "Movies App",
            description: "Android app showing movie lists, details, and bookmarks built during Studi Independent Infinite Learning.",
            image: "/movies_app.png",
            link: "https://github.com/PeterNex14/MoviesApp.git",
            type: "mobile",
            tech: ["Kotlin", "Retrofit", "Glide"],
            scale: "scale-175",
            offset: "bottom-[-10%] w-full h-[60%]"
        }
    ];

    return (
        <section id="projects" className="relative w-full py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="font-sans text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 inline-block">
                        Featured Projects
                    </h2>
                    <div className="mt-4 w-24 h-1.5 bg-gradient-to-r from-orange-500 to-rose-500 rounded-full mx-auto" />
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {projects.map((project, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative flex flex-col justify-between rounded-[2rem] overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 pt-8 px-6 sm:px-8 shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_40px_rgba(249,115,22,0.15)] transition-all duration-500 w-full hover:-translate-y-2"
                        >
                            {/* Animated Gradient Border Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 via-transparent to-rose-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                            <div className="flex flex-row justify-between items-start gap-4 z-10 w-full">
                                <div className="flex-1 w-full max-w-[85%]">
                                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 line-clamp-2 transition-colors group-hover:text-orange-600">
                                        {project.title}
                                    </h3>
                                    <p className="text-sm text-gray-600 leading-relaxed font-mono">
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2 mt-4">
                                        {project.tech.map((tech, idx) => (
                                            <span key={idx} className="px-2.5 py-1 text-xs font-mono font-semibold text-orange-600 bg-orange-50/80 border border-orange-100/50 rounded-md">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                {project.link !== "#" && (
                                    <Link href={project.link} target="_blank" rel="noopener noreferrer" className="shrink-0 mt-1" aria-label="View Source">
                                        <div className="flex items-center justify-center w-10 h-10 bg-gray-100 hover:bg-gray-900 rounded-full transition-colors duration-300 group/btn">
                                            {project.link.includes('github') ? (
                                                <FiGithub className="text-gray-600 group-hover/btn:text-white w-5 h-5 transition-colors" />
                                            ) : (
                                                <FiArrowUpRight className="text-gray-600 group-hover/btn:text-white w-5 h-5 transition-colors" />
                                            )}
                                        </div>
                                    </Link>
                                )}
                            </div>

                            <div className="relative w-[calc(100%+3rem)] sm:w-[calc(100%+4rem)] h-[240px] sm:h-[300px] mt-8 overflow-hidden z-0 bg-gradient-to-b from-gray-50/10 to-gray-200/10 border-t border-white/5 group-hover:bg-white/5 transition-colors duration-500 shadow-inner -mx-6 sm:-mx-8 -mb-8">
                                {/* Ambient Radial Glow behind the image */}
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.15),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                                
                                <div className={`absolute ${project.offset} ${project.scale} ${project.type !== 'mobile' && project.type !== 'web' ? 'w-[130%] h-[50%]' : 'w-full h-[60%]'}`}>
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        className="object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.4)] group-hover:-translate-y-4 group-hover:scale-[1.02] group-hover:-rotate-1 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] origin-bottom"
                                    />
                                </div>
                                {/* Bottom stage fade */}
                                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#0A1633]/50 to-transparent pointer-events-none" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
