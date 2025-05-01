import React from "react";
import "./Home.css";

import Button from "../../Components/Button/Button.jsx";

const Home = ({ sectionState }) => {
  return (
    <section className={`${sectionState}`}>
      <div className="home_container">
        <div className="side_a">
          <h1>
            Hello, my name is <span>Julio Tonatiuh Aguilera Ordoñez</span>
          </h1>
          <p>
            I'm a Game Developer with extensive experience for over 2 years. My
            expertise is related to Game Development, Game Design, Software
            Development and many more...
          </p>
          <div className="button_container">
            <Button text="See my CV" onclick={null} />
          </div>
        </div>
        <div className="side_b">
          <div className="image_container"></div>
        </div>
      </div>
    </section>
  );
};

export default Home;
