import React from "react";
import ContactChannel from "./ContactChannel.jsx";

const ContactChannelList = () => {
  const cards = [
    {
      card_icon: "icon",
      card_text: "lorem ipsum dolor sit amet.",
      card_link: "",
      id: "card1",
    },
    {
      card_icon: "icon",
      card_text: "lorem ipsum dolor sit amet.",
      card_link: "",
      id: "card2",
    },
    {
      card_icon: "icon",
      card_text: "lorem ipsum dolor sit amet.",
      card_link: "",
      id: "card3",
    },
  ];

  return cards.map(({ id, ...cardsprops }) => (
    <ContactChannel key={id} {...cardsprops} />
  ));
};

export default ContactChannelList;
