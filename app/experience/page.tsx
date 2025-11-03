"use client";

import { motion } from "framer-motion";

export default function ExperiencesPage() {
    const experiences = [
        {
            role: "Software Developer Intern (Hybrid)",
            company: "Renify",
            period: "July 2024 – September 2024",
            description: [
                "Successfully developed and launched the company's official profile website utilizing WordPress. This initiative standardized the digital brand presence and optimized external communication.",
                "Collaborated cross-functionally on the initial design phase for a new Document Manager web project, contributing to the creation of comprehensive UI/UX specifications and defining core functional requirements to enhance organizational efficiency.",
                "Focused on designing a logical and intuitive user flow for document management, demonstrating an understanding of digital process optimization and improving internal stakeholder usability"
            ]
        },
        {
            role: "Head of the Organizing Committee TechoFest 2024",
            company: "UNSRAT IT Community",
            period: "April 2024 – November 2024",
            description: [
                "Successfully led and managed six core divisions—including Content Creator, Funds, Public Relation, and Event Creative—ensuring team synergy and the smooth execution of all event stages.",
                "Directed the successful organization of the Clash of Informatics competition, an innovative adaptation of the 'Clash of Champions' format focused on Informatics material, which served as a major highlight and significantly increased participant engagement.",
                "Held full accountability for project resources, including budget management, logistics, and comprehensive scheduling, ensuring high event quality within defined constraints.",
                "Oversaw the Public Relation and Content Creator divisions to build event brand awareness, foster relations with external stakeholders, and deliver clear, effective communication to the participant community."
            ]
        },
        {
            role: "Assistant Lecturer (Hybrid)",
            company: "Sam Ratulangi University",
            period: "September 2023 – November 2023",
            description: [
                "Collaborated on large-scale technical instruction by supporting the delivery of the Database Practicum (300 students) and the Algorithm & Programming Practicum (120 students)",
                "Delivered foundational technical content for core Database Concepts and Algorithm & Programming fundamentals, directly contributing to the technical development of over 420 total students.",
                "Contributed to instructional team efficiency by collaborating with a cohort of 43 student assistants to successfully organize weekly class meetings, practical sessions, and technical demonstrations.",
                "Optimized learning processes through the creation and management of online schedules for assistance, live technical demos, and post-test sessions, ensuring consistent content delivery and effective student evaluation."
            ]
        },
        {
            role: "Assistant Dev Leads & UI/UX Designer at TechoFest 2023 Project Team (Hybrid)",
            company: "UNSRAT IT Community",
            period: "September 2023 – November 2023",
            description: [
                "Collaborated on facilitating daily scrum meetings for a cross-functional team of 46 members, ensuring project alignment, efficient task delegation, and accelerated velocity in a hybrid work environment.",
                "Supported the coordination and execution of technical tasks across the project team, ensuring efficient resource allocation and timely delivery of key project milestones.",
                "Drove a user-centric design strategy by conducting User Research to identify and synthesize user needs, directly informing product features and enhancing the overall digital experience.",
                "Created and delivered key digital assets, including wireframes, interactive prototypes, and final visual designs for the user interface, ensuring high-fidelity outputs and adherence to specifications."
            ]
        },
        {
            role: "Co-Founder & Graphic Design",
            company: "XZIGHT Organizer",
            period: "April 2020 – August 2020",
            description: [
                "Co-founded and led the operational execution for 6 online esports tournaments, demonstrating initiative and entrepreneurial leadership in a fast - paced digital segment.",
                "Directly managed event budgets and financials, successfully implementing cost-effective solutions to maintain high-quality attendee experience and ensure project viability.",
                "Developed and executed targeted digital marketing and promotional strategies across social media, directly resulting in increased event attendance and active community engagement.",
                "Designed all social media assets to generate brand awareness, successfully attracting potential sponsors and securing partnerships, demonstrating strong communication and stakeholder engagement skills."
            ]
        },
    ];

    return (
        <div className="min-h-screen w-full flex flex-col px-6 pt-4 gap-6">
            <p
                className="text-center font-sans text-3xl sm:text-4xl md:text-5xl p-4 sm:p-6"
            >
                Experience
            </p>
            <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Blobs */}
                <div className="-z-10 absolute top-0 left-0 w-[60%] h-[10%] bg-orange-400 opacity-20 blur-[100px]" />
                <div className="absolute bottom-0 right-0 w-[10%] h-[40%] bg-blue-400 opacity-40 blur-[120px]" />

                {experiences.map((item, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.6,
                            delay: i * 0.2, // 👈 this causes each card to appear one after another
                            ease: "easeOut",
                        }}
                        viewport={{ once: true }}
                        className="w-full flex flex-col p-6 rounded-2xl bg-white shadow-md hover:shadow-xl transition"
                    >
                        <p className="font-sans text-2xl text-gray-900">{item.company}</p>
                        <p className="font-mono text-gray-600">{item.role}</p>
                        <p className="mb-4 text-gray-400">{item.period}</p>
                        <div className="flex flex-col gap-2">
                            {item.description.map((desc, j) => (
                                <div key={j} className="flex flex-row gap-3 items-start">
                                    <div className="mt-2 w-3 h-3 bg-orange-600 rounded-full shrink-0" />
                                    <p className="text-gray-700 leading-relaxed">{desc}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}