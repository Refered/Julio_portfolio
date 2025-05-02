import React from "react";
import "./CardSkill.css";

const CardSkill = ({ card_icon, card_title, card_text }) => {
  return (
    <div className="card_skill_container">
      <div className="icon_container">{card_icon}</div>
      <div className="text_container">
        <h3>{card_title}</h3>
        <p>{card_text}</p>
      </div>
    </div>
  );
};

export default CardSkill;
