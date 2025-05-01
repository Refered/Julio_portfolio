import React from "react";
import "./NavBar.css";

import { ReactComponent as HomeIcon } from "../../Icons/Home.svg";
import { ReactComponent as AboutIcon } from "../../Icons/UserCircle.svg";
import { ReactComponent as SkillsIcon } from "../../Icons/LineSegments.svg";
import { ReactComponent as PortfolioIcon } from "../../Icons/Briefcase.svg";
import { ReactComponent as ContactIcon } from "../../Icons/ChatsCircle.svg";

const NavBar = ({ setCurrentSection }) => {
  return (
    <nav>
      <div className="logo_container">Julio Portfolio</div>
      <div className="nav_list">
        <div className="list_element">
          <HomeIcon viewBox="0 0 32 32" />
          <p onClick={() => setCurrentSection(0)}>Home</p>
        </div>
        <div className="list_element">
          <AboutIcon viewBox="0 0 32 32" />
          <p onClick={() => setCurrentSection(1)}>About</p>
        </div>
        <div className="list_element">
          <SkillsIcon viewBox="0 0 32 32" />
          <p onClick={() => setCurrentSection(2)}>Skills</p>
        </div>
        <div className="list_element">
          <PortfolioIcon viewBox="0 0 32 32" />
          <p onClick={() => setCurrentSection(3)}>Portfolio</p>
        </div>
        <div className="list_element">
          <ContactIcon viewBox="0 0 32 32" />
          <p onClick={() => setCurrentSection(4)}>Contact</p>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
