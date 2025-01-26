"use client";
import React from 'react';
import Image from 'next/image';
import { INVIEWSLIDE } from "../constants/index";
import { motion } from "motion/react";

const projects = [
    {
        title: "Web Crawler and Search Engine",
        description: "Developed the core logic of a multithreaded Python web crawler to index 50,000+ UCI domain pages, increasing crawler speed by 5 times by adding 5 threads to a single-threaded baseline. Built a SimHash algorithm to detect duplicates and avoided 80% of crawler traps during deployment. Engineered a search engine from scratch with <30ms query response time for 50,000+ pages.",
        image: '/searchengine.gif',
        // link: "https://www.filmate.club/",
        techStack: ["Python", "C++", "Threading", "Flask", "JavaScript", "HTML/CSS"],
    },
    {
      title: "GlucoGuard",
      description: "Developed a mobile application for an automated glucose delivery device, providing a flexible UI for monitoring nocturnal hypoglycemic episodes and receiving alerts. Engineered a logistic regression ML model to predict optimal glucose administration times, leveraging data from the Dexcom API and Firebase. Implemented a Flask server to simulate bluetooth communication on a Raspberry Pi.",
      image: '/glucoguard.png',
      link: "https://docs.google.com/presentation/d/1Zqc5Ua1vgUs_oG18x9vr4XdF1Pmi6V-MnmFGzapmAXw/edit#slide=id.g4dfce81f19_0_45",
      techStack: ["React Native", "TypeScript", "Python", "Flask", "Figma", "HTML/CSS", "ML", "Dexcom API", "Firebase", "Raspberry Pi"],
    },
    {
        title: "Sudoku AI Solver",
        description: "Developed an AI system to solve Sudoku puzzles. Implemented heuristics and backtracking for efficient solution navigation, reducing average solve time by 40%.",
        image: '/sudoku.gif',
        // link: "https://yujisatojr.itch.io/highspeedchase",
        techStack: ["Python", "Flask", "JavaScript", "HTML/CSS"],
    },
    {
        title: "Edsight",
        description: "Edsight is a free visual analytics platform designed to spur insight, learning, and decision-making for teachers and professional development facilitators. Edsight works with five practical measures developed and tested by researchers and educators.",
        image: '/edsight.png',
        link: "https://www.edsight.io/",
        techStack: ["Python", "React", "OpenAI API", "Prompt Engineering", "Research"],
    },
    {
      title: "Predicting Hospital Readmissions for Diabetes Patients",
      description: "Conducted an analysis of various classification algorithms to predict hospital readmissions using a diabetes dataset. Evaluated models including logistic regression, decision trees, and random forests for performance metrics such as accuracy, precision, recall, and F1-score. Optimized model parameters and employed feature engineering to enhance predictive accuracy.",
      image: "/diabetes.png",
      link: "/diabetes-report.pdf",
      techStack: ["Machine Learning", "Python", "Pandas", "Scikit-learn", "Matplotlib"]
    },
    {
      title: "Microcontroller-Based Calculator",
      description: "Designed and implemented a functional calculator using the Tiva C microcontroller. Integrated a 16x2 LCD for result display and a 4x4 matrix keypad for user input. Developed embedded C code to handle arithmetic operations, input validation, and real-time display updates. Utilized GPIO for interfacing the LCD and keypad, ensuring efficient and responsive operation.",
      image: "/calculator.png",
      // link: "/diabetes-report.pdf",
      techStack: ["Tiva C", "Embedded C"]
    },
    {
        title: "Columns Game",
        description: "Created a puzzle-based columns game using PyGame libraries in Python, including UI design and visual elements. Incorporated various game mechanics using object-oriented programming.",
        image: '/columns.gif',
        // link: "https://yujisatojr.itch.io/highspeedchase",
        techStack: ["Python", "PyGame", "OOP"],
    },
    {
        title: "Flix",
        description: "Flix is a movie browsing app that pulls data from The Movie Database API, allowing users to explore now-playing films and view detailed movie information and posters. Users can scroll through a list of movies, tap for more details, and toggle between a list and grid view using a CollectionView.",
        image: '/flix.gif',
        link: "https://github.com/aashisinghh/Flix",
        techStack: ["Swift", "TMDb API"],
    },
    // {
    //     title: "Parstagram",
    //     description: "This photo viewing app integrates with a custom Parse backend, enabling users to sign up, log in, and post photos with captions while viewing a global feed and interacting with comments. Features include user authentication, persistent login across app restarts, viewing the latest posts, and adding comments to shared photos.",
    //     // image: '/public/images/cover-photo.png',
    //     link: "https://github.com/aashisinghh/Instagram",
    //     techStack: ["Swift", "Parse SDK", "OAuth"],
    // },
    // {
    //     title: "Twitter Clone",
    //     description: "This Twitter clone allows users to compose, favorite, and retweet tweets while providing a seamless experience with features like login persistence across app restarts, infinite tweet loading, and a pull-to-refresh option. It includes a stylish launch screen, user profile integration, and the ability to view tweets with profile pictures, usernames, and text.",
    //     // image: '/public/images/cover-photo.png',
    //     link: "https://github.com/aashisinghh/Twitter",
    //     techStack: ["Swift", "OAuth", "Twitter API"],
    // },
];

const Project = () => {
  return (
    <div className="projects-container px-4 sm:px-12 md:px-24 py-10" id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        Projects
      </h2>
      <div className="projects-grid grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-screen-xl mx-auto">
        {projects.map((project, index) => (
          <div key={index} className="transition duration-300 transform hover:scale-105">
          <motion.div
            key={index}
            className="project-box bg-[#121212] bg-opacity-50 shadow-md p-6 rounded-lg max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto"
            {...INVIEWSLIDE(index % 2 === 0 ? -100 : 100, 0)}
          >
            <div className="relative w-full h-80 mb-4">
              <Image
                src={project.image}
                alt="thumbnail"
                layout="fill"
                objectFit="contain"
                className="rounded-lg"
              />
            </div>
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-xl font-bold text-white">{project.title}</h2>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block bg-gray-500 text-white px-2 py-2 text-sm rounded-md hover:bg-gray-700"
                >
                  <img src={"/arrow-icon.svg"} alt="Arrow" width={16} height={16} />
                </a>
              )}
            </div>
            <p className="text-gray-400 mb-4">{project.description}</p>
    
            <div className="flex flex-wrap justify-start">
              {project.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="bg-gray-800 text-gray-300 text-sm px-3 py-1 rounded-full mr-2 mb-2"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
