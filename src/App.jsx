import "./App.css";
import LoadingScreen from "./components/LoadingScreen.jsx";
import "./index.css";
import { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./components/sections/Home";
import About from "./components/sections/About";
import Contact from "./components/sections/Contact";
import Projects from "./components/sections/Projects";
import MobileMenu from "./components/MobileMenu.jsx";
import Navbar from "./components/Navbar";
import AICaseStudy from "./components/AICaseStudy.jsx";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <Router>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      <div
        className={`min-h-screen transition-opacity duration-700 bg-black text-gray-200${isLoaded ? "opacity-100" : "opacity-0"}`}
      >
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        {selectedProject === "ai-docs" ? (
          <AICaseStudy onBack={() => setSelectedProject(null)} />
        ) : (
          <>
            <Home />
            <About />
            <Projects onOpenCaseStudy={() => setSelectedProject("ai-docs")} />
            <Contact />
          </>
        )}
      </div>
    </Router>
  );
}

export default App;
