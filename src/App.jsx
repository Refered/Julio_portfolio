import { React, useState } from "react";
import "./App.css";

import NavBar from "./Sections/NavBar/NavBar";
import Home from "./Sections/Home/Home";
import About from "./Sections/About/About";
import Skills from "./Sections/Skills/Skills";
import Portfolio from "./Sections/Portfolio/Portfolio";
import Contact from "./Sections/Contact/Contact";

import { ReactComponent as NavOpen } from "./Icons/NavOpen.svg";

function App() {
  const [currentSection, setCurrentSection] = useState(0);
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className="app">
      <NavBar
        currentSection={currentSection}
        setCurrentSection={setCurrentSection}
        navOpen={navOpen}
      />
      <div
        className="section_carrousel"
        onClick={(e) => {
          if (!e.target.closest(".nav_open")) {
            setNavOpen(false);
          }
        }}
      >
        <span id="top" />
        <div className="nav_open" onClick={() => setNavOpen(true)}>
          <NavOpen />
        </div>
        <Home sectionState={currentSection === 0 ? "active" : "inactive"} />
        <About sectionState={currentSection === 1 ? "active" : "inactive"} />
        <Skills sectionState={currentSection === 2 ? "active" : "inactive"} />
        <Portfolio
          sectionState={currentSection === 3 ? "active" : "inactive"}
        />
        <Contact sectionState={currentSection === 4 ? "active" : "inactive"} />
      </div>
    </div>
  );
}

export default App;
