// import Image from "next/image";
// import Navbar from "@/components/Navbar";
// import MainSection from "@/components/MainSection";
// import AboutSection from "@/components/AboutSection";
// import ExperienceSection from "@/components/ExperienceSection";
// import ProjectsSection from "@/components/ProjectsSection";
// import ContactSection from "@/components/ContactSection";

// export default function Home() {
//   return (
//     <main className="overflow-hidden relative flex min-h-screen flex-col antialiased selection:bg-[#add8e6] selection:text-black font-custom ">
//       <div className="fixed inset-0 -z-10 h-full w-full [background:radial-gradient(130%_130%_at_50%_10%,#000_40%,#849_100%)]"></div>
//       <Navbar />
//         <MainSection />
//         <AboutSection />
//         <ExperienceSection />
//         <ProjectsSection />
//         <ContactSection />
//     </main>
//   );
// }

"use client";
import { useEffect } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import MainSection from "@/components/MainSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";


export default function Home() {
  useEffect(() => {
    // Dynamically load the Vanta script
    const script1 = document.createElement("script");
    script1.src = "https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js";
    script1.async = true;
    document.body.appendChild(script1);

    const script2 = document.createElement("script");
    script2.src = "https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.birds.min.js";
    script2.async = true;
    document.body.appendChild(script2);

    script2.onload = () => {
      // Initialize the Vanta Birds effect after script loads
      VANTA.BIRDS({
        el: "#vanta-background", // Target the div with this id
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        backgroundColor: 0x0,
        color1: 0x6b3078,
        color2: 0x3ba6bb,
        colorMode: "variance",
        birdSize: 1.20,
        wingSpan: 20.00,
        speedLimit: 3.00,
        alignment: 60.00,
        cohesion: 28.00,
      });
    };

    return () => {
      // Clean up the scripts when the component unmounts
      document.body.removeChild(script1);
      document.body.removeChild(script2);
    };
  }, []);

  return (
    <main className="overflow-hidden relative flex min-h-screen flex-col antialiased selection:bg-[#add8e6] selection:text-black font-custom">
      {/* Set a div with the id for Vanta effect */}
      <div id="vanta-background" className="fixed inset-0 -z-10 h-full w-full"></div>
      <Navbar />
      <MainSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}
