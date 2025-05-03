import React from "react";
import CardData from "./CardData.jsx";

const CardDataList = () => {
  const cards = [
    {
      card_title: "Birthday",
      card_text: "??????????",
      id: "card1",
    },
    {
      card_title: "Mascots",
      card_text: "??????????",
      id: "card2",
    },
    {
      card_title: "Favorite Video Game",
      card_text: "??????????",
      id: "card3",
    },
    {
      card_title: "Email",
      card_text: "??????????",
      id: "card4",
    },
    {
      card_title: "City",
      card_text: "??????????",
      id: "card5",
    },
    {
      card_title: "Degree",
      card_text: "??????????",
      id: "card6",
    },
  ];

  return cards.map(({ id, ...cardsprops }) => (
    <CardData key={id} {...cardsprops} />
  ));
};

export default CardDataList;
