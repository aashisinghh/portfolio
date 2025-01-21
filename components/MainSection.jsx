"use client";

import React from "react";
import { INVIEWSLIDE, TYPEWRITER } from "../constants/index";
import { motion } from "motion/react";

const MainSection = () => {
  return (
    <section className="h-screen w-full flex flex-col items-center justify-center my-4">
      <div className="text-center">
        <h1 className="text-white font-extrabold mb-4">
          <motion.span
            {...INVIEWSLIDE(0, 0)}
            className="font-cursive text-5xl sm:text-7xl lg:text-8xl text-white bg-clip-text text-transparent"
          >
            Aashi Singh
          </motion.span>
        </h1>
        <p className="bg-clip-text text-transparent bg-gradient-to-br from-[#feac5e] via-[#c779d0] to-[#4bc0c8] text-xl lg:text-2xl">
          <TYPEWRITER
            words={["Software Engineer"]}
            typeSpeed={150}
            cursor={true}
            cursorStyle={"|"}
          />
        </p>
      </div>
    </section>
  );
};

export default MainSection;
