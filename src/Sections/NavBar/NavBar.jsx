import React from "react";
import "./NavBar.css";

import data from "../../Data.json";

import { ReactComponent as HomeIcon } from "../../Icons/Home.svg";
import { ReactComponent as AboutIcon } from "../../Icons/UserCircle.svg";
import { ReactComponent as SkillsIcon } from "../../Icons/LineSegments.svg";
import { ReactComponent as PortfolioIcon } from "../../Icons/Briefcase.svg";
import { ReactComponent as ContactIcon } from "../../Icons/ChatsCircle.svg";
// import { ReactComponent as NavClose } from "../../Icons/NavClose.svg";

const NavBar = ({ currentSection, setCurrentSection, navOpen, setNavOpen }) => {
  const navData = data.portfolio_owner;
  return (
    <nav className={navOpen ? "active" : "inactive"}>
      <div className="logo_container">
        <p>
          <span>{navData.left}</span> {navData.right}
        </p>
      </div>
      <div className="nav_list">
        <a
          href="#top"
          className="list_element"
          onClick={() => {
            setCurrentSection(0);
            setNavOpen(false);
          }}
        >
          <HomeIcon
            viewBox="0 0 32 32"
            className={currentSection === 0 ? "" : "unselected"}
          />
          <p>Home</p>
        </a>
        <a
          href="#top"
          className="list_element"
          onClick={() => {
            setCurrentSection(1);
            setNavOpen(false);
          }}
        >
          <AboutIcon
            viewBox="0 0 32 32"
            className={currentSection === 1 ? "" : "unselected"}
          />
          <p>About</p>
        </a>
        <a
          href="#top"
          className="list_element"
          onClick={() => {
            setCurrentSection(2);
            setNavOpen(false);
          }}
        >
          <SkillsIcon
            viewBox="0 0 32 32"
            className={currentSection === 2 ? "" : "unselected"}
          />
          <p>Skills</p>
        </a>
        <a
          href="#top"
          className="list_element"
          onClick={() => {
            setCurrentSection(3);
            setNavOpen(false);
          }}
        >
          <PortfolioIcon
            viewBox="0 0 32 32"
            className={currentSection === 3 ? "" : "unselected"}
          />
          <p>Portfolio</p>
        </a>
        <a
          href="#top"
          className="list_element"
          onClick={() => {
            setCurrentSection(4);
            setNavOpen(false);
          }}
        >
          <ContactIcon
            viewBox="0 0 32 32"
            className={currentSection === 4 ? "" : "unselected"}
          />
          <p>Contact</p>
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
