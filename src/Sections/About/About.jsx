import React from "react";
import "./About.css";

import data from "../../Data.json";
import Button from "../../Components/Button/Button.jsx";
import CardDataList from "../../Components/Card_Data/CardDataList.jsx";
import CardHistoryEducationList from "../../Components/Card_History/CardHistoryEducationList.jsx";
import CardHistoryExperienceList from "../../Components/Card_History/CardHistoryExperienceList.jsx";

const About = ({ sectionState, setCurrentSection }) => {
  const aboutData = data.about_section;

  return (
    <section className={`${sectionState}`}>
      <div className="about_container">
        <div className="title_container">
          <h2>About</h2>
        </div>
        <div className="side_a">
          <div className="text_container">
            <h3>
              {aboutData.presentation} <span>{aboutData.job_title}</span>
            </h3>
            <p>{aboutData.description}</p>
          </div>
          <div className="data_container">
            <CardDataList />
          </div>
        </div>
        <div className="side_b">
          <div className="education_container">
            <h3>Education</h3>
            <div className="card_history_container">
              <div className="card_history_list">
                <CardHistoryEducationList />
              </div>
            </div>
          </div>
          <div className="experience_container">
            <h3>Experience</h3>
            <div className="card_history_container">
              <div className="card_history_list">
                <CardHistoryExperienceList />
              </div>
            </div>
          </div>
        </div>
        <a className="button_container" href="#top">
          <Button text="Contact Me" onclick={() => setCurrentSection(4)} />
        </a>
      </div>
    </section>
  );
};

export default About;
