import Image from "next/image";
import Navbar from "@/components/Navbar";
import MainSection from "@/components/MainSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mx-auto mt-24 px-12 py-4">
        <MainSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </div>
    </main>
  );
}