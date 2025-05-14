import React from "react";
import CardSkill from "./CardSkill.jsx";

const CardSkillList = () => {
  const cards = [
    {
      card_icon: "icon",
      card_title: "title",
      card_text:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      id: "card1",
    },
    {
      card_icon: "icon",
      card_title: "title",
      card_text:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      id: "card2",
    },
    {
      card_icon: "icon",
      card_title: "title",
      card_text:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      id: "card3",
    },
    {
      card_icon: "icon",
      card_title: "title",
      card_text:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      id: "card4",
    },
    {
      card_icon: "icon",
      card_title: "title",
      card_text:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      id: "card5",
    },
    {
      card_icon: "icon",
      card_title: "title",
      card_text:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      id: "card6",
    },
    {
      card_icon: "icon",
      card_title: "title",
      card_text:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      id: "card7",
    },
  ];

  return cards.map(({ id, ...cardsprops }) => (
    <CardSkill key={id} {...cardsprops} />
  ));
};

export default CardSkillList;
