import React from "react";
import CardPortfolio from "./CardPortfolio.jsx";

import test from "../../Images/test.png";

const CardPortfolioList = () => {
  const cards = [
    {
      card_title: "title",
      card_image: test,
      card_text: "lorem ipsum dolor sit amet",
      id: "card1",
    },
    {
      card_title: "",
      card_image: "",
      card_text: "",
      id: "card2",
    },
    {
      card_title: "",
      card_image: "",
      card_text: "",
      id: "card3",
    },
    {
      card_title: "",
      card_image: "",
      card_text: "",
      id: "card4",
    },
    {
      card_title: "",
      card_image: "",
      card_text: "",
      id: "card5",
    },
    {
      card_title: "",
      card_image: "",
      card_text: "",
      id: "card6",
    },
  ];

  return cards.map(({ id, ...cardsprops }) => (
    <CardPortfolio key={id} {...cardsprops} />
  ));
};

export default CardPortfolioList;
