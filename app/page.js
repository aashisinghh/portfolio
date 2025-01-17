import Image from "next/image";
import Navbar from "@/components/Navbar";
import MainSection from "@/components/MainSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <main className="overflow-x-hidden relative flex min-h-screen flex-col antialiased selection:bg-[#add8e6] selection:text-black font-custom">
      <div className="fixed inset-0 -z-10 h-full w-full [background:radial-gradient(130%_130%_at_50%_10%,#000_40%,#849_100%)]"></div>
      <Navbar />
        <MainSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
    </main>
  );
}
