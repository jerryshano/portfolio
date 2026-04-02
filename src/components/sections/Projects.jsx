import React from "react";
import ProjectCard from "../ProjectCard.jsx";
import Document from "../../assets/document.jpg";
import Cart from "../../assets/cart.jpg";
import Front from "../../assets/front.webp";
import RevealOnScroll from "../RevealOnScroll.jsx";

const Projects = ({ onOpenCaseStudy }) => {
  const projects = [
    {
      title: "AI Documentation Assistant",
      description:
        "AI tool that helps developers quickly understand complex documentation through structured explanations, reducing time spent parsing dense technical content.",
      image: Document,
      techStack: ["Next.js", "Shadcn", "OpenAI API"],
      demo: "https://documentation-explainer-pd6p.vercel.app/",
      github: "https://github.com/jerryshano/Documentation-Explainer",
    },
    {
      title: "E-Commerce Platform",
      description:
        "Built a modern e-commerce shopping application with Redux Toolkit for data management. Implemented robust cart features.",
      image: Cart,
      techStack: ["React", "Tailwind", "Redux"],
      demo: "https://shopping-cart-ebon-eight.vercel.app/",
      github: "https://github.com/jerryshano/shopping-cart",
    },
    {
      title: "Clearview CareHome",
      description:
        "Live care home website with a responsive layout, semantic HTML/CSS, and clear navigation so families can explore services.",
      image: Front,
      techStack: ["HTML5", "Responsive", "CSS3"],
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
        <div className="w-full max-w-5xl mx-auto px-4">
          <h2 className="text-center text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-green-800 bg-clip-text text-transparent leading-tight">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                index={index}
                {...project}
                onCaseStudyClick={
                  index === 0 && onOpenCaseStudy ? onOpenCaseStudy : undefined
                }
              />
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Projects;
