import React from "react";
import ProjectCard from "../ProjectCard.jsx";
import SpiderMan from "../../assets/spidy.jpg";
import Weather from "../../assets/weather.jpg";
import Front from "../../assets/front.webp";
import RevealOnScroll from "../RevealOnScroll.jsx";

const Projects = () => {
  const projects = [
    {
      title: "Movie Browser",
      description:
        "Movie search app leveraging Context API for state management and local storage persistence",
      image: SpiderMan,
      techStack: ["React", "Tailwind CSS", "Axios"],
      demo: "https://movie-browser-jade.vercel.app/",
      github: "https://github.com/jerryshano/movie-browser",
    },
    {
      title: "Weather App",
      description:
        "Weather app demonstrating state, props, and API data fetching with city-based search functionality.",
      image: Weather,
      techStack: ["React", "Tailwind CSS", "Vite"],
      demo: "https://weather-app-new-lake.vercel.app/",
      github: "https://github.com/jerryshano/weather-app-new",
    },
    {
      title: "Clearview CareHome",
      description:
        "Static production site demonstrating clean UI design and attracting real client engagement.",
      image: Front,
      techStack: ["HTML", "CSS"],
      demo: "https://clearviewcarehome.com/",
      github: "https://github.com/jerryshano/clearview-app",
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
