import React from "react";
import RevealOnScroll from "../RevealOnScroll.jsx";

const About = () => {
  const frontendSkills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Tailwind CSS",
    "Shadcn",
    "Sass",
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-green-800 bg-clip-text text-transparent leading-tight">
            About Me
          </h2>
          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all duration-300">
            <p className="text-gray-300 mb-4">
              I am a passionate developer with a love for creating
            </p>
            <div className="rounded-xl p-6 hover:translate-y-1 transition-transform duration-300">
              <h3 className="text-xl font-bold mb-4">Frontend</h3>
              <div className="flex flex-wrap gap-2 mt-2">
                {frontendSkills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm hover:bg-blue-400/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all duration-300 cursor-pointer"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="p-6 rounded-xl hover:translate-y-1 transition-transform duration-300">
              <h3 className="text-xl mb-4 font-bold">🏫 Education</h3>
              <ul className="list-disc list-inside text-left text-gray-300 space-y-2">
                <li>
                  <strong>B.S. in Computer Science</strong> - California State
                  University Monterey Bay
                </li>
                <li>
                  Relevant Coursework: Data Structures, Algorithms, Web
                  Development
                </li>
              </ul>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default About;
