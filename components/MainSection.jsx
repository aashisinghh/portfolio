"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import GithubIcon from "../public/github-icon.svg";
import LinkedinIcon from "../public/linkedin-icon.svg";
import EmailIcon from "../public/email-icon.svg";
import DocumentIcon from "../public/document-icon.svg";
import { INVIEWSLIDE, TYPEWRITER } from "../constants/index";
import { motion } from "motion/react";

const MainSection = () => {
  return (
    <section className="h-screen w-full grid grid-cols-1 lg:grid-cols-12 my-4 -mt-1">
      <div className="col-span-1 lg:col-span-7 place-self-center place-items-center lg:place-items-start px-4">
        <div className="flex flex-wrap items-center gap-4 mb-6 justify-center lg:justify-start">
          <div className="socials flex flex-row pt-8 gap-4">
            <Link href="mailto:aashi30singh@gmail.com" target="_blank">
              <Image src={EmailIcon} alt="Email" width={32} height={32} title="Email" />
            </Link>
            <Link href="https://github.com/aashisinghh" target="_blank">
              <Image src={GithubIcon} alt="Github" width={32} height={32} title="Github" />
            </Link>
            <Link href="https://linkedin.com/in/aashisingh" target="_blank">
              <Image src={LinkedinIcon} alt="LinkedIn" width={32} height={32} title="LinkedIn" />
            </Link>
            <Link href="/Aashi_Singh_resume.pdf" target="_blank">
              <Image src={DocumentIcon} alt="Resume" width={32} height={32} title="Resume" />
            </Link>
          </div>
        </div>
        <h1 className="text-white max-w-2xl font-extrabold mb-4 text-center lg:text-left">
          <motion.span
            {...INVIEWSLIDE(0, 0)}
            className="text-3xl lg:text-4xl"
          >
            Hello, I'm
          </motion.span>
          <br />
          <motion.span
            {...INVIEWSLIDE(0, 0)}
            className="text-5xl sm:text-7xl lg:text-8xl text-white bg-clip-text text-transparent"
          >
            Aashi Singh
          </motion.span>
        </h1>
        <p className="bg-clip-text text-transparent bg-gradient-to-br from-[#feac5e] via-[#c779d0] to-[#4bc0c8] mb-3 text-xl lg:text-2xl text-center lg:text-left">
          <TYPEWRITER
            words={["Software Engineer"]}
            typeSpeed={150}
            cursor={true}
            cursorStyle={"|"}
          />
        </p>
        <p className="text-gray-400 text-base md:text-lg text-center lg:text-left">
          Bachelor of Science in Computer Science and Engineering
        </p>
        <p className="text-gray-400 text-base md:text-lg text-center lg:text-left mb-6">
          University of California, Irvine, 2025
        </p>
      </div>
      <motion.div
        {...INVIEWSLIDE(100, 0)}
        className="col-span-1 lg:col-span-5 place-self-center mt-0 sm:mt-0"
      >
        <div className="bg-[#181818] sm:w-[200px] md:w-[250px] lg:w-[300px] h-[150px] sm:h-[200px] md:h-[250px] lg:h-[300px] rounded-full relative mx-auto overflow-hidden">
          <Image
            src="/cover-photo.png"
            alt="cover image"
            className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 object-cover"
            width={400}
            height={400}
          />
          {/* <div className="!overflow-visible z-[100]">
            <Image
              src="/anteater.png"
              alt="Overlapping Image"
              className="!overflow-visible"
              width={120}
              height={120}
            />
          </div> */}
        </div>

      </motion.div>
    </section>
  );
};

export default MainSection;
