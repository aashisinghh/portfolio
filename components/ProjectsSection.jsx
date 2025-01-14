"use client";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";

const projectsData = [
  {
    id: 1,
    title: "Project 1",
    description: "Project 1 description",
    image: "/images/projects/1.png"
  },
  {
    id: 2,
    title: "Project 2",
    description: "Project 2 description",
    image: "/images/projects/2.png"
  },
  {
    id: 3,
    title: "Project 3",
    description: "Project 3 description",
    image: "/images/projects/3.png"
  },
  {
    id: 4,
    title: "Project 4",
    description: "Project 4 description",
    image: "/images/projects/4.png"
  },
  {
    id: 5,
    title: "Project 5",
    description: "Project 5 descriptions",
    image: "/images/projects/5.png"
  },
  {
    id: 6,
    title: "Project 6",
    description: "Project 6 description",
    image: "/images/projects/6.png"
  },
];

const ProjectsSection = () => {
  return (
    <>
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        Projects
      </h2>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {projectsData.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
          />
        ))}
      </div>
    </>
  );
};

export default ProjectsSection;