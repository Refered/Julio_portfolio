import React from "react";
import CardHistory from "./CardHistory.jsx";

const CardHistoryEducationList = () => {
  const cards = [
    {
      card_date: "Date",
      card_title: "Title",
      card_text: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      id: "card1",
    },
    {
      card_date: "Date",
      card_title: "Title",
      card_text: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      id: "card2",
    },
    {
      card_date: "Date",
      card_title: "Title",
      card_text: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      id: "card3",
    },
    {
      card_date: "Date",
      card_title: "Title",
      card_text: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      id: "card4",
    },
  ];

  return cards.map(({ id, ...cardsprops }) => (
    <CardHistory key={id} {...cardsprops} />
  ));
};

export default CardHistoryEducationList;
