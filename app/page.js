import Image from "next/image";
import Navbar from "@/components/Navbar";
import MainSection from "@/components/MainSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";

// export default function Home() {
//   return (
//     // <div class="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
//     <main className="relative flex min-h-screen flex-col font-custom top-0 z-[-2] w-screen [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)] bg-fixed">
//       <Navbar />
//       <div className="w-screen">
    
//         <MainSection />
//         <ExperienceSection />
//         <ProjectsSection />
//         <ContactSection />
//       </div>
//     </main>
//   );
// }

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col antialiased selection:bg-[#add8e6] selection:text-black font-custom">
      <div className="fixed inset-0 -z-10 h-full w-full [background:radial-gradient(130%_130%_at_50%_10%,#000_40%,#53a_100%)]"></div>
      <Navbar />
        <MainSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
    </main>
  );
}
