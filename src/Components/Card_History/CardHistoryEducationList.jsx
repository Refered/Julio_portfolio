import React from "react";
import CardHistory from "./CardHistory.jsx";
import data from "../../Data.json";

const CardHistoryEducationList = () => {
  const cardsData = data.about_section.cards_education;

  return Object.entries(cardsData).map(([key, card]) => (
    <CardHistory
      key={key}
      card_date={card.card_date}
      card_title={card.card_title}
      card_text={card.card_text}
    />
  ));
};

export default CardHistoryEducationList;
