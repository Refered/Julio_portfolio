import React from "react";
import "./Skills.css";

import CardSkillList from "../../Components/Card_Skill/CardSkillList.jsx";

const Skills = ({ sectionState }) => {
  return (
    <section className={`${sectionState}`}>
      <div className="skills_container">
        <div className="title_container">
          <h2>Skills</h2>
        </div>
        <div className="side_b">
          <CardSkillList />
        </div>
      </div>
    </section>
  );
};

export default Skills;
