import React from "react";
import "./About.css";

import Button from "../../Components/Button/Button.jsx";
import CardDataList from "../../Components/Card_Data/CardDataList.jsx";
import CardHistoryEducationList from "../../Components/Card_History/CardHistoryEducationList.jsx";
import CardHistoryExperienceList from "../../Components/Card_History/CardHistoryExperienceList.jsx";

const About = ({ sectionState, setCurrentSection }) => {
  return (
    <section className={`${sectionState}`}>
      <div className="about_container">
        <div className="title_container">
          <h2>About</h2>
        </div>
        <div className="side_a">
          <div className="text_container">
            <h3>
              I'm Julio Tonatiuh Aguilera Ordoñez a{" "}
              <span>Junior Technical Game Designer</span>
            </h3>
            <p>
              lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem
              ipsum lorem ipsum dolor sit amet, consectetur adipiscing elit.
              lorem ipsum dolor sit amet, consectetur adipiscing elit. dolor sit
              amet, consectetur adipiscing elit.
            </p>
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
