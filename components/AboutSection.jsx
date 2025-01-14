"use client";
import React, { useState, useTransition } from "react";
import Image from "next/image";

const AboutSection = () => {
  return (
    <section className="text-white">
      <div className="gap-8 items-center py-8 px-4 xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-16">
        <Image 
          src="/public/images/cover-photo.png" 
          alt="about image"
          width={500} 
          height={500} 
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-white text-base md:text-lg">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
          Maecenas porttitor congue massa. Fusce posuere, magna sed 
          pulvinar ultricies, purus lectus malesuada libero, sit amet 
          commodo magna eros quis urna.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;