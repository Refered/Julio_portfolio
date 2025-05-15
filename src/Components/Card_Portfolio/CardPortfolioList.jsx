import React from "react";
import CardPortfolio from "./CardPortfolio.jsx";
import data from "../../Data.json";

const CardPortfolioList = () => {
  const cardsData = data.portfolio_section.cards;

  return Object.entries(cardsData).map(([key, card]) => (
    <CardPortfolio
      key={key}
      card_title={card.card_title}
      card_image={`/Images/${card.card_image}`}
      card_text={card.card_text}
      card_link={card.card_link}
    />
  ));
};

export default CardPortfolioList;
