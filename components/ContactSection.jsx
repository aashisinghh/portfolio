"use client";
import React, { useState } from "react";
import GithubIcon from "../public/github-icon.svg";
import LinkedinIcon from "../public/linkedin-icon.svg";
import EmailIcon from "../public/email-icon.svg";
import DocumentIcon from "../public/document-icon.svg";
import Link from "next/link";
import Image from "next/image";

const ContactSection = () => {
  return (
    <section id="contact" className="flex flex-col items-center pt-24 gap-6 relative">
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-1/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10 text-center">
        <h5 className="text-xl font-bold text-white my-2">Contact</h5>
        <p className="text-[#ADB7BE]">
          Irvine, CA  |  aashi30singh@gmail.com  |  (949)-351-9672
        </p>
      </div>
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
    </section>
  );
};

export default ContactSection;
