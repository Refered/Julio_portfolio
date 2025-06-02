import React from "react";
import "./Home.css";

import data from "../../Data.json";
import Button from "../../Components/Button/Button.jsx";

const Home = ({ sectionState }) => {
  const homeData = data.home_section;

  return (
    <section className={`${sectionState}`}>
      <div className="home_container">
        <div className="side_a">
          <h1>
            {homeData.greet} <span>{homeData.name}</span>
          </h1>
          <p>{homeData.introduction}</p>
          <div className="buttons_container">
            {homeData.cv_link && (
              <a
                className="button_container"
                href={homeData.cv_link}
                target="blank"
              >
                <Button text="See my CV" />
              </a>
            )}
            {homeData.demo_reel_link && (
              <a
                className="button_container"
                href={homeData.demo_reel_link}
                target="blank"
              >
                <Button text="See my Demo reel" />
              </a>
            )}
          </div>
        </div>
        <div className="side_b">
          <div className="img_container">
            <img src={`/Images/${homeData.photo}`} alt="homeImage" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
