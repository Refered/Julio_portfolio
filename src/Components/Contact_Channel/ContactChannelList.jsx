import React from "react";
import ContactChannel from "./ContactChannel.jsx";
import data from "../../Data.json";

const ContactChannelList = () => {
  const cardsData = data.contact_section.cards;

  return Object.entries(cardsData).map(([key, card]) => (
    <ContactChannel
      key={key}
      card_icon={card.card_icon}
      card_text={card.card_text}
      card_link={card.card_link}
    />
  ));
};

export default ContactChannelList;
