"use client";
import React from "react";
import GithubIcon from "../public/github-icon.svg";
import LinkedinIcon from "../public/linkedin-icon.svg";
import EmailIcon from "../public/email-icon.svg";
import DocumentIcon from "../public/document-icon.svg";
import Link from "next/link";
import Image from "next/image";
import { INVIEWSLIDE } from "../constants/index";
import { motion } from "motion/react";

const AboutCard = () => {
  return (
    <main className="relative font-inter antialiased flex flex-col justify-center overflow-hidden" id="about">
      <div className="relative mx-auto p-6 sm:p-20">
        {/* About Section */}
        <div className="flex flex-col sm:flex-row justify-center items-center bg-[#121212] p-5 rounded-lg transition duration-300 transform hover:scale-105">
          <div className="max-w-4xl rounded-lg overflow-hidden flex relative flex-col sm:flex-row">
            {/* Image Section */}
            <motion.div className="w-full sm:w-1/3 mb-6 sm:mb-0"
              {...INVIEWSLIDE(0, 0)}>
              <img 
                src="/cover-photo.png" 
                alt="About" 
                className="w-full h-full object-cover" 
              />
            </motion.div>

            {/* Content Section */}
            <div className="w-full sm:w-2/3 p-6 sm:ml-4">
              <h2 className="sm:text-lg text-base font-bold text-white mb-4">Hi, I'm</h2>
              <h2 className="sm:text-5xl text-2xl font-cursive font-bold text-white mb-4">Aashi Singh!</h2>
              <p className="text-gray-400 sm:text-base text-sm mb-6">
                I am a Computer Science and Engineering student at UC Irvine, graduating in 2025, with a passion for AI/ML, software development, and creating innovative solutions to address real-world challenges.
              </p>
              <p className="text-gray-400 sm:text-base text-sm mb-6">
                I have gained valuable experiences through internships and research, where I contributed to a variety of projects. These experiences have enhanced my skills in building scalable systems and collaborating with cross-functional teams. I am currently seeking new grad software engineering opportunities. Feel free to contact me and check out my work!
              </p>
              <div className="socials flex flex-row gap-4 z-10">
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

            <motion.div className="absolute bottom-1 right-2 z-50"
              {...INVIEWSLIDE(0, 0)}>
            <img 
              src="/anteater.png" 
              alt="Anteater" 
              width={100} 
              height={100} 
              className="object-cover" 
            />
          </motion.div>

          </div>

          {/* Sticky Image positioned at the Bottom Right of the Container */}
          
        </div>
      </div>
    </main>
  );
};

export default AboutCard;
