import React from "react";
import CardSkill from "./CardSkill.jsx";
import data from "../../Data.json";

const CardSkillList = () => {
  const cardsData = data.skills_section.cards;

  return Object.entries(cardsData).map(([key, card]) => (
    <CardSkill
      key={key}
      card_icon={card.card_icon}
      card_title={card.card_title}
      card_text={card.card_text}
    />
  ));
};

export default CardSkillList;
