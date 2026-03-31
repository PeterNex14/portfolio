const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  console.log('Seeding experiences...');

  const experiences = [
    {
      role: 'Software Developer Intern (Hybrid)',
      company: 'Renify',
      startDate: new Date('2024-07-01'),
      endDate: new Date('2024-09-01'),
      description: [
        "React-based development and launch of the company's official profile website utilizing WordPress, optimizing external communication.",
        'Collaborated cross-functionally on the initial design phase for a new Document Manager web project.',
        'Designed a logical and intuitive user flow for document management, improving internal stakeholder usability.',
      ],
    },
    {
      role: 'Head of the Organizing Committee TechoFest 2024',
      company: 'UNSRAT IT Community',
      startDate: new Date('2024-04-01'),
      endDate: new Date('2024-11-01'),
      description: [
        'Successfully led and managed six core divisions ensuring team synergy and execution of all event stages.',
        'Directed the successful organization of the Clash of Informatics competition, significantly increasing participant engagement.',
        'Oversaw the Public Relation and Content Creator divisions to build event brand awareness.',
      ],
    },
    {
      role: 'Assistant Lecturer (Hybrid)',
      company: 'Sam Ratulangi University',
      startDate: new Date('2023-09-01'),
      endDate: new Date('2023-11-01'),
      description: [
        'Collaborated on large-scale technical instruction supporting the Database Practicum (300 students) and the Algorithm Practicum.',
        'Delivered foundational technical content for core Database Concepts and Algorithm & Programming fundamentals.',
        'Optimized learning processes through the creation and management of online schedules for assistance and live technical demos.',
      ],
    },
    {
      role: 'Assistant Dev Leads & UI/UX Designer at TechoFest 2023',
      company: 'UNSRAT IT Community',
      startDate: new Date('2023-09-01'),
      endDate: new Date('2023-11-01'),
      description: [
        'Facilitated daily scrum meetings for a cross-functional team of 46 members, ensuring project alignment.',
        'Drove a user-centric design strategy by conducting User Research to identify and synthesize user needs.',
        'Created and delivered key digital assets, including wireframes, interactive prototypes, and final visual designs.',
      ],
    },
    {
      role: 'Co-Founder & Graphic Design',
      company: 'XZIGHT Organizer',
      startDate: new Date('2020-04-01'),
      endDate: new Date('2020-08-01'),
      description: [
        'Co-founded and led the operational execution for 6 online esports tournaments.',
        'Directly managed event budgets and financials, successfully implementing cost-effective solutions.',
        'Developed and executed targeted digital marketing strategies across social media.',
      ],
    },
  ];

  console.log('Seeding projects...');
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

  for (const exp of experiences) {
    await prisma.experience.create({
      data: exp,
    });
  }

  for (const proj of projects) {
    await prisma.project.create({
      data: proj,
    });
  }

  console.log('Seeding skills...');
  const skills = [
    { label: "HTML 5", icon: "FaHtml5", category: "frontend" },
    { label: "CSS 3", icon: "FaCss3Alt", category: "frontend" },
    { label: "JavaScript", icon: "RiJavascriptFill", category: "frontend" },
    { label: "Next.JS", icon: "RiNextjsFill", category: "frontend" },
    { label: "Tailwind", icon: "RiTailwindCssFill", category: "frontend" },
    { label: "TypeScript", icon: "BiLogoTypescript", category: "frontend" },

    { label: "Node.JS", icon: "FaNodeJs", category: "backend" },
    { label: "Spring", icon: "BiLogoSpringBoot", category: "backend" },
    { label: "PostgreSQL", icon: "BiLogoPostgresql", category: "backend" },
    { label: "Supabase", icon: "RiSupabaseFill", category: "backend" },
    { label: "MongoDB", icon: "BiLogoMongodb", category: "backend" },
    { label: "Postman", icon: "SiPostman", category: "backend" },

    { label: "Kotlin", icon: "SiKotlin", category: "mobile" },
    { label: "Compose", icon: "SiJetpackcompose", category: "mobile" },
    { label: "Room", icon: "FaDatabase", category: "mobile" },
    { label: "Dart", icon: "DiDart", category: "mobile" },
    { label: "Flutter", icon: "FaFlutter", category: "mobile" },
    { label: "React Native", icon: "TbBrandReactNative", category: "mobile" },
  ];

  for (const skill of skills) {
    await prisma.skill.create({
      data: skill,
    });
  }

  console.log('Seeding certifications...');
  const certifications = [
    {
        title: "Belajar Membuat Aplikasi Android untuk Pemula",
        issuer: "Dicoding",
        date: "2023",
        icon: "FaAward",
        iconColor: "text-orange-500",
    },
    {
        title: "Belajar Fundamental Aplikasi Android",
        issuer: "Dicoding",
        date: "2023",
        icon: "FaAward",
        iconColor: "text-rose-500",
    },
    {
        title: "Belajar Pengembangan Aplikasi Android Intermediate",
        issuer: "Dicoding",
        date: "2023",
        icon: "FaCertificate",
        iconColor: "text-purple-500",
    },
    {
        title: "Menjadi Android Developer Expert",
        issuer: "Dicoding",
        date: "2024",
        icon: "FaCertificate",
        iconColor: "text-blue-500",
    },
    {
        title: "Belajar Dasar Git dengan GitHub",
        issuer: "Dicoding",
        date: "2023",
        icon: "FaAward",
        iconColor: "text-gray-700",
    },
    {
        title: "Google UX Design Professional Certificate",
        issuer: "Coursera",
        date: "2023",
        icon: "FaCertificate",
        iconColor: "text-emerald-500",
    }
  ];

  for (const cert of certifications) {
    await prisma.certification.create({
      data: cert,
    });
  }

  console.log('Seeding completed!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
