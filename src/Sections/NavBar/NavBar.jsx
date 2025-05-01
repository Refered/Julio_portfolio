import React from "react";
import "./NavBar.css";

const NavBar = ({ setCurrentSection }) => {
  return (
    <nav>
      <p onClick={() => setCurrentSection(0)}>Home</p>
      <p onClick={() => setCurrentSection(1)}>About</p>
      <p onClick={() => setCurrentSection(2)}>Skills</p>
      <p onClick={() => setCurrentSection(3)}>Portfolio</p>
      <p onClick={() => setCurrentSection(4)}>Contact</p>
    </nav>
  );
};

export default NavBar;
