"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const MainSection = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-12 my-4">
      <div className="col-span-7 place-self-center place-items-center grid lg:place-items-start">
        <h1 className="text-white max-w-2xl mb-4 lg:text-6xl text-4xl font-extrabold">
            Hello, I'm Aashi
        </h1>
        <p className="text-[#ADB7BE] mb-6 textl-lg lg:text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          voluptatum.
        </p>
        <div>
          <Link href="#contact" scroll={true}>
            <button className="px-6 py-3 rounded-full mr-4 bg-white hover:bg-slate-200 text-black">
              Contact Me
            </button>
          </Link>
          <a
            href="/Users/aashi/portfolio/Aashi_Singh_resume.pdf"
            title="Aashi_Singh_resume.pdf"
            target="_blank"
            className="px-6 py-3 rounded-full mr-4 bg-black hover:bg-slate-800 text-white border border-white"
          >
            Download Resume
          </a>
        </div>
      </div>
      <div className="col-span-5 place-self-center mt-4 lg:mt-0">
        <div className="bg-[#181818] lg:w-[400px] lg:h-[400px] w-[250px] h-[250px] rounded-full relative">
          <Image
            src='/public/images/cover-photo.png'
            alt="cover image"
            className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            width={300}
            height={300}
          />
        </div>
      </div>
    </section>
  );
};

export default MainSection;