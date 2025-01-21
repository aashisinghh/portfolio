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
// import { useEffect } from "react";
// import Image from "next/image";
// import Navbar from "@/components/Navbar";
// import MainSection from "@/components/MainSection";
// import AboutSection from "@/components/AboutSection";
// import ExperienceSection from "@/components/ExperienceSection";
// import ProjectsSection from "@/components/ProjectsSection";
// import ContactSection from "@/components/ContactSection";
// import BIRDS from "vanta/dist/vanta.birds.min";
// import * as THREE from "three";


// export const Home = () => {
//   const [vantaEffect, setVantaEffect] = useState(0);
//   const vantaRef = useRef(null);

//   useEffect(() => {
//     if (!vantaEffect) {
//       setVantaEffect(
//         BIRDS({
//           el: vantaRef.current,
//           THREE: THREE,
//           mouseControls: true,
//           touchControls: true,
//           gyroControls: false,
//           minHeight: 600.0,
//           minWidth: 600.0,
//           scale: 1.0,
//           scaleMobile: 1.0,
//           color1: "#ff0000",
//           color2: "#00ff00"
//         })
//       );
//     }
//     return () => {
//       if (vantaEffect) vantaEffect.destroy();
//     };
//   }, [vantaEffect]);


//   return (
//     <main className="overflow-hidden relative flex min-h-screen flex-col antialiased selection:bg-[#add8e6] selection:text-black font-custom">
//       {/* Set a div with the id for Vanta effect */}
//       <div ref={vantaRef} className="fixed inset-0 -z-10 h-full w-full"></div>
//       <Navbar />
//       <MainSection />
//       <AboutSection />
//       <ExperienceSection />
//       <ProjectsSection />
//       <ContactSection />
//     </main>
//   );
// }
