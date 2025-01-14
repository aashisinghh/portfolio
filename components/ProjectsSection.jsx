"use client";
import React from 'react';
import Image from 'next/image';

const projects = [
    {
        title: "Web Crawler and Search Engine",
        description: "Developed the core logic of a multithreaded Python web crawler to index 50,000+ UCI domain pages, increasing crawler speed by 5 times by adding 5 threads to a single-threaded baseline. Built a SimHash algorithm to detect duplicates and avoided 80% of crawler traps during deployment. Engineered a search engine from scratch with <30ms query response time for 50,000+ pages.",
        image: '/public/images/cover-photo.png',
        // link: "https://www.filmate.club/",
        techStack: ["Python", "C++", "Threading", "Flask", "JavaScript", "HTML/CSS"],
    },
    {
        title: "Sudoku AI Solver",
        description: "Developed an AI system to solve Sudoku puzzles, ranking top 8% among 100+ teams in terms of efficiency/effectiveness. Implemented heuristics and backtracking for efficient solution navigation, reducing average solve time by 40%.",
        image: '/public/images/cover-photo.png',
        // link: "https://yujisatojr.itch.io/highspeedchase",
        techStack: ["Python", "Flask", "JavaScript", "HTML/CSS"],
    },
];

function Project() {
    return (
        <div className="projects-container px-10 py-5 text-center" id="projects">
            <h1 className="text-4xl font-bold mb-8 md:mb-12">Projects</h1>
            <div className="projects-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-12">
                {projects.map((project, index) => (
                    <div key={index} className="project text-left">
                        <a href={project.link} target="_blank" rel="noreferrer">
                            <div className="relative w-full h-64">
                                <Image
                                    src={project.image}
                                    alt="thumbnail"
                                    layout="fill"
                                    objectFit="cover"
                                    className="rounded-lg"
                                />
                            </div>
                        </a>
                        <a href={project.link} target="_blank" rel="noreferrer">
                            <h2 className="text-xl mt-4 hover:underline, font-bold">{project.title}</h2>
                        </a>
                        <p className="text-gray-500 mt-2">{project.description}</p>

                        {/* Tech Stack Section */}
                        <div className="flex flex-wrap mt-4 justify-start">
                          {project.techStack.map((tech, idx) => (
                            <span key={idx} className="bg-gray-200 text-gray-700 text-sm px-3 py-1 rounded-full mr-2 mb-2">
                              {tech}
                            </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Project;
