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

  const sections = [
    { component: Home, props: {} },
    {
      component: About,
      props: { setCurrentSection },
    },
    { component: Skills, props: {} },
    { component: Portfolio, props: {} },
    { component: Contact, props: {} },
  ];

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
        {sections.map((Section, index) => {
          const SectionComponent = Section.component;
          return (
            <SectionComponent
              key={`section_${index}`}
              sectionState={currentSection === index ? "active" : "inactive"}
              {...Section.props}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
