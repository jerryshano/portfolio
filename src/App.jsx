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

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <Router>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      <div
        className={`min-h-screen transition-opacity duration-700 bg-black text-gray-200${isLoaded ? "opacity-100" : "opacity-0"}`}
      >
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Home />
        <About />
        <Projects />
        <Contact />
      </div>
    </Router>
  );
}

export default App;
