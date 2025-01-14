"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import GithubIcon from "../public/github-icon.svg";
import LinkedinIcon from "../public/linkedin-icon.svg";
import EmailIcon from "../public/email-icon.svg";
import DocumentIcon from "../public/document-icon.svg";
const MainSection = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-12 my-4">
      <div className="col-span-7 place-self-center place-items-center grid lg:place-items-start">
        <div className="flex items-center gap-4 mb-6">
          <div className="socials flex flex-row gap-4 z-10">
            <Link href='mailto:aashi30singh@gmail.com' target="_blank">
              <Image src={EmailIcon} alt="Email Icon" width={32} height={32} />
            </Link>
            <Link href="https://github.com/aashisinghh" target="_blank">
              <Image src={GithubIcon} alt="Github Icon" width={32} height={32} />
            </Link>
            <Link href="https://linkedin.com/in/aashisingh" target="_blank">
              <Image src={LinkedinIcon} alt="Linkedin Icon" width={32} height={32} />
            </Link>
            <Link href="/Aashi_Singh_resume.pdf" target="_blank">
              <Image src={DocumentIcon} alt="Resume Icon" width={32} height={32} />
            </Link>
          </div>
        </div>
        <h1 className="text-white max-w-2xl font-extrabold mb-6">
          <span className="text-3xl lg:text-4xl">Hello, I'm</span>
          <br />
          <span className="text-7xl lg:text-8xl bg-gradient-to-br from-[#feac5e] via-[#c779d0] to-[#4bc0c8] bg-clip-text text-transparent">
            Aashi Singh</span>
        </h1>
        <p className="text-white mb-6 textl-lg lg:text-xl">
          Aspiring Software Engineer
        </p>
        <p className="text-gray-500 text-base md:text-lg">
          I am currently pursuing a Bachelor's degree in Computer Science and Engineering at the University of California, 
          Irvine, with an expected graduation in June 2025. I am excited to expand my knowledge and contribute to advancements in technology.        
        </p>
        
      </div>
      <div className="col-span-5 place-self-center mt-4 lg:mt-0">
        <div className="bg-[#181818] lg:w-[400px] lg:h-[400px] w-[250px] h-[250px] rounded-full relative overflow-hidden">
          <Image
            src='/cover-photo.png'
            alt="cover image"
            className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 object-cover"
            width={400}
            height={400}
          />
        </div>
      </div>

      {/* <div className="col-span-5 place-self-center mt-4 lg:mt-0">
        <div className="bg-[#181818] lg:w-[400px] lg:h-[400px] w-[250px] h-[250px] rounded-full relative">
          <Image
            src='/cover-photo.png'
            alt="cover image"
            className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            width={300}
            height={300}
          />
        </div>
      </div> */}
    </section>
  );
};

export default MainSection;
