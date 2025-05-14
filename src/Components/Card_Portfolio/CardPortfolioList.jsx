import React from "react";
import CardPortfolio from "./CardPortfolio.jsx";

import test from "../../Images/test.png";

const CardPortfolioList = () => {
  const cards = [
    {
      card_title: "title",
      card_image: test,
      card_text: "lorem ipsum dolor sit amet",
      card_link: "",
      id: "card1",
    },
    {
      card_title: "title",
      card_image: test,
      card_text: "lorem ipsum dolor sit amet",
      card_link: "",
      id: "card2",
    },
    {
      card_title: "title",
      card_image: test,
      card_text: "lorem ipsum dolor sit amet",
      card_link: "",
      id: "card3",
    },
    {
      card_title: "title",
      card_image: test,
      card_text: "lorem ipsum dolor sit amet",
      card_link: "",
      id: "card4",
    },
    {
      card_title: "title",
      card_image: test,
      card_text: "lorem ipsum dolor sit amet",
      card_link: "",
      id: "card5",
    },
  ];

  return cards.map(({ id, ...cardsprops }) => (
    <CardPortfolio key={id} {...cardsprops} />
  ));
};

export default CardPortfolioList;
