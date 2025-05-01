import { React, useState } from "react";
import "./App.css";

import NavBar from "./Sections/NavBar/NavBar";
import Home from "./Sections/Home/Home";
import About from "./Sections/About/About";
import Skills from "./Sections/Skills/Skills";
import Portfolio from "./Sections/Portfolio/Portfolio";
import Contact from "./Sections/Contact/Contact";

function App() {
  const [currentSection, setCurrentSection] = useState(0);

  return (
    <div className="app">
      <NavBar setCurrentSection={setCurrentSection} />
      <div className="section_carrousel">
        <Home sectionState={currentSection == 0 ? "active" : "inactive"} />
        <About sectionState={currentSection == 1 ? "active" : "inactive"} />
        <Skills sectionState={currentSection == 2 ? "active" : "inactive"} />
        <Portfolio sectionState={currentSection == 3 ? "active" : "inactive"} />
        <Contact sectionState={currentSection == 4 ? "active" : "inactive"} />
      </div>
    </div>
  );
}

export default App;
