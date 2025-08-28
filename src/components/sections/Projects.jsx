import React from "react";
import ProjectCard from "../ProjectCard.jsx";
import SpiderMan from "../../assets/spidy.jpg";
import Weather from "../../assets/weather.jpg";
import Ethereum from "../../assets/ethereum.jpg";
import Front from "../../assets/front.webp";
import RevealOnScroll from "../RevealOnScroll.jsx";

const Projects = () => {
  const projects = [
    {
      title: "Movie Browser",
      description:
        "A brief description of Project One. This project showcases my skills in React and Tailwind CSS.",
      image: SpiderMan,
      techStack: ["React", "Tailwind CSS", "JavaScript"],
    },
    {
      title: "Weather App",
      description:
        "Another cool project with different tech stack. This project showcases my skills in React and Tailwind CSS.",
      image: Weather,
      techStack: ["Next.js", "TypeScript", "Node.js"],
    },
    {
      title: "Crypto Tracker",
      description:
        "Another cool project with different tech stack. This project showcases my skills in React and Tailwind CSS.",
      image: Ethereum,
      techStack: ["Next.js", "TypeScript", "Node.js"],
    },
    {
      title: "Clearview CareHome",
      description:
        "Another cool project with different tech stack. This project showcases my skills in React and Tailwind CSS.",
      image: Front,
      techStack: ["Next.js", "TypeScript", "Node.js"],
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-center text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-green-800 bg-clip-text text-transparent leading-tight">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Projects;
