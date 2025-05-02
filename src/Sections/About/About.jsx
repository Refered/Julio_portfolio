import React from "react";
import "./About.css";

const About = ({ sectionState }) => {
  return (
    <section className={`${sectionState}`}>
      <div className="about_container">
        <div className="title_container">
          <h2>About</h2>
        </div>
      </div>
    </section>
  );
};

export default About;
