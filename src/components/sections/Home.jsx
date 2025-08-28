import React from "react";
import RevealOnScroll from "../RevealOnScroll.jsx";

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          <h1 className="text-5xl md:text-7xl mb-6 font-bold bg-gradient-to-r from-blue-600 to-green-800 bg-clip-text text-transparent leading-tight animate-gradient-x">
            Hi, I'm Jerry Kankelborg
          </h1>
          <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
            A passionate software developer specializing in building exceptional
            digital experiences.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="#projects"
              className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 font-medium transition relative overflow-hidden hover:translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.7)]"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200  hover:translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-400/10"
            >
              Contact Me
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Home;
