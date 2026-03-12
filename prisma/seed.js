const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  console.log('Seeding experiences...');

  const experiences = [
    {
      role: 'Software Developer Intern (Hybrid)',
      company: 'Renify',
      period: 'July 2024 – September 2024',
      description: [
        "React-based development and launch of the company's official profile website utilizing WordPress, optimizing external communication.",
        'Collaborated cross-functionally on the initial design phase for a new Document Manager web project.',
        'Designed a logical and intuitive user flow for document management, improving internal stakeholder usability.',
      ],
      order: 10,
    },
    {
      role: 'Head of the Organizing Committee TechoFest 2024',
      company: 'UNSRAT IT Community',
      period: 'April 2024 – November 2024',
      description: [
        'Successfully led and managed six core divisions ensuring team synergy and execution of all event stages.',
        'Directed the successful organization of the Clash of Informatics competition, significantly increasing participant engagement.',
        'Oversaw the Public Relation and Content Creator divisions to build event brand awareness.',
      ],
      order: 20,
    },
    {
      role: 'Assistant Lecturer (Hybrid)',
      company: 'Sam Ratulangi University',
      period: 'September 2023 – November 2023',
      description: [
        'Collaborated on large-scale technical instruction supporting the Database Practicum (300 students) and the Algorithm Practicum.',
        'Delivered foundational technical content for core Database Concepts and Algorithm & Programming fundamentals.',
        'Optimized learning processes through the creation and management of online schedules for assistance and live technical demos.',
      ],
      order: 30,
    },
    {
      role: 'Assistant Dev Leads & UI/UX Designer at TechoFest 2023',
      company: 'UNSRAT IT Community',
      period: 'September 2023 – November 2023',
      description: [
        'Facilitated daily scrum meetings for a cross-functional team of 46 members, ensuring project alignment.',
        'Drove a user-centric design strategy by conducting User Research to identify and synthesize user needs.',
        'Created and delivered key digital assets, including wireframes, interactive prototypes, and final visual designs.',
      ],
      order: 40,
    },
    {
      role: 'Co-Founder & Graphic Design',
      company: 'XZIGHT Organizer',
      period: 'April 2020 – August 2020',
      description: [
        'Co-founded and led the operational execution for 6 online esports tournaments.',
        'Directly managed event budgets and financials, successfully implementing cost-effective solutions.',
        'Developed and executed targeted digital marketing strategies across social media.',
      ],
      order: 50,
    },
  ];

  for (const exp of experiences) {
    await prisma.experience.create({
      data: exp,
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
