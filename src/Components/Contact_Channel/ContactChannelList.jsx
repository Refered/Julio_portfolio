import React from "react";
import ContactChannel from "./ContactChannel.jsx";

const ContactChannelList = () => {
  const cards = [
    {
      card_icon: "icon",
      card_text: "lorem ipsum dolor sit amet.",
      id: "card1",
    },
    {
      card_icon: "icon",
      card_text: "lorem ipsum dolor sit amet.",
      id: "card2",
    },
    {
      card_icon: "icon",
      card_text: "lorem ipsum dolor sit amet.",
      id: "card3",
    },
  ];

  return cards.map(({ id, ...cardsprops }) => (
    <ContactChannel key={id} {...cardsprops} />
  ));
};

export default ContactChannelList;
