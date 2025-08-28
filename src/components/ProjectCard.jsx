import React from "react";

const ProjectCard = ({
  title,
  image,
  description,
  techStack,
  demo,
  github,
}) => {
  return (
    <div className=" bg-gray-800 border border-white/10 hover:translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300">
      <img
        src={image}
        alt="Project 1"
        className="w-full h-48 object-cover object-top"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
        {techStack.map((tech) => (
          <span
            key={tech}
            className="inline-block bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm mr-2 mb-2 hover:bg-blue-400/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all duration-300 cursor-pointer"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="flex justify-center items-center gap-8 pb-4">
        <a
          href={demo}
          className="text-blue-400  hover:text-blue-700 font-medium transition-colors hover:translate-y-0.5 "
          target="_blank"
          rel="noopener noreferrer"
        >
          View Project →
        </a>
        <a
          href={github}
          className="text-blue-400  hover:text-blue-700 font-medium transition-colors hover:translate-y-0.5 "
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub Repo →
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
