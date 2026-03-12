import HeroSection from "@/components/sections/HeroSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import SkillsSection from "@/components/sections/SkillsSection";
import CertificationsSection from "@/components/sections/CertificationsSection";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen overflow-x-hidden">
      <HeroSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <CertificationsSection />
      
      {/* 🔹 Footer */}
      <footer className="w-full py-8 text-center text-gray-500 font-mono text-sm bg-gray-50 border-t border-gray-200/60 transition-colors">
        <p>© {new Date().getFullYear()} Peter Gabriel Sompotan. Designed & Built with ❤️</p>
      </footer>
    </main>
  );
}
