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
            lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum
            lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum
            dolor sit amet, consectetur adipiscing elit. dolor sit amet,
            consectetur adipiscing elit.
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
