import Image from "next/image";
import Navbar from "@/components/Navbar";
import MainSection from "@/components/MainSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <main className="overflow-hidden relative flex min-h-screen flex-col antialiased selection:bg-[#add8e6] selection:text-black font-custom ">
      <div className="fixed inset-0 -z-10 h-full w-full [background:radial-gradient(130%_130%_at_50%_10%,#000_40%,#849_100%)]"></div>
      <Navbar />
        <MainSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
    </main>
  );
}

// "use client";

// import { useEffect, useRef } from "react";
// import * as THREE from "three";
// import BIRDS from "vanta/dist/vanta.birds.min";
// import Navbar from "@/components/Navbar";
// import MainSection from "@/components/MainSection";
// import AboutSection from "@/components/AboutSection";
// import ExperienceSection from "@/components/ExperienceSection";
// import ProjectsSection from "@/components/ProjectsSection";
// import ContactSection from "@/components/ContactSection";

// export default function Home() {
//   const vantaRef = useRef(null);
//   const vantaEffect = useRef(null);

//   useEffect(() => {
//     if (!vantaEffect.current) {
//       vantaEffect.current = BIRDS({
//         el: vantaRef.current,
//         THREE,
//         mouseControls: true,
//         touchControls: true,
//         gyroControls: false,
//         minHeight: 200.0,
//         minWidth: 200.0,
//         scale: 1.0,
//         scaleMobile: 1.0,
//         backgroundColor: 0x16162f,
//         color1: 0x5c3c82,
//         color2: 0xeba6b6,
//         colorMode: "variance",
//         birdSize: 1.2,
//         wingSpan: 20.0,
//         speedLimit: 2.0,
//         alignment: 60.0,
//         cohesion: 28.0,
//         separation: 50.0,
//         quantity: 4.0
//       });
//     }

//     return () => {
//       vantaEffect.current?.destroy();
//       vantaEffect.current = null;
//     };
//   }, []);

//   return (
//     <main className="overflow-hidden relative flex min-h-screen flex-col antialiased selection:bg-[#add8e6] selection:text-black font-custom">
//       <div ref={vantaRef} className="fixed inset-0 -z-50 h-full w-full"></div>
//       <Navbar />
//       <MainSection />
//       <AboutSection />
//       <ExperienceSection />
//       <ProjectsSection />
//       <ContactSection />
//     </main>
//   );
// }
