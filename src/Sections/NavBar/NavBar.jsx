import React from "react";
import "./NavBar.css";

import { ReactComponent as HomeIcon } from "../../Icons/Home.svg";
import { ReactComponent as AboutIcon } from "../../Icons/UserCircle.svg";
import { ReactComponent as SkillsIcon } from "../../Icons/LineSegments.svg";
import { ReactComponent as PortfolioIcon } from "../../Icons/Briefcase.svg";
import { ReactComponent as ContactIcon } from "../../Icons/ChatsCircle.svg";
import { ReactComponent as NavClose } from "../../Icons/NavClose.svg";

const NavBar = ({ currentSection, setCurrentSection, navOpen, setNavOpen }) => {
  return (
    <nav className={navOpen ? "active" : "inactive"}>
      <div className="logo_container">Julio Portfolio</div>
      <div className="nav_list">
        <div className="list_element" onClick={() => setCurrentSection(0)}>
          <HomeIcon
            viewBox="0 0 32 32"
            className={currentSection === 0 ? "" : "unselected"}
          />
          <p>Home</p>
        </div>
        <div className="list_element" onClick={() => setCurrentSection(1)}>
          <AboutIcon
            viewBox="0 0 32 32"
            className={currentSection === 1 ? "" : "unselected"}
          />
          <p>About</p>
        </div>
        <div className="list_element" onClick={() => setCurrentSection(2)}>
          <SkillsIcon
            viewBox="0 0 32 32"
            className={currentSection === 2 ? "" : "unselected"}
          />
          <p>Skills</p>
        </div>
        <div className="list_element" onClick={() => setCurrentSection(3)}>
          <PortfolioIcon
            viewBox="0 0 32 32"
            className={currentSection === 3 ? "" : "unselected"}
          />
          <p>Portfolio</p>
        </div>
        <div className="list_element" onClick={() => setCurrentSection(4)}>
          <ContactIcon
            viewBox="0 0 32 32"
            className={currentSection === 4 ? "" : "unselected"}
          />
          <p>Contact</p>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
