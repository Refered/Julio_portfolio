import React from "react";
import CardData from "./CardData.jsx";
import data from "../../Data.json";

const CardDataList = () => {
  const cardsData = data.about_section.cards_info;

  return Object.entries(cardsData).map(([key, card]) => (
    <CardData
      key={key}
      card_title={card.card_title}
      card_text={card.card_text}
    />
  ));
};

export default CardDataList;
