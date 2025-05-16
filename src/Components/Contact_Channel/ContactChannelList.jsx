import React, { useState, useEffect } from "react";
import ContactChannel from "./ContactChannel.jsx";
import data from "../../Data.json";

const ContactChannelList = () => {
  const cardsData = data.contact_section.cards;
  const cardEntries = Object.entries(cardsData);
  const [itemsPerRow, setItemsPerRow] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.matchMedia("(max-width: 55rem)").matches) {
        setItemsPerRow(2);
      } else {
        setItemsPerRow(3);
      }
    };

    // Set initial value
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Clean up
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Split the cards into groups based on itemsPerRow
  const rows = [];
  for (let i = 0; i < cardEntries.length; i += itemsPerRow) {
    const rowCards = cardEntries.slice(i, i + itemsPerRow);
    rows.push(rowCards);
  }

  return rows.map((row, rowIndex) => (
    <div key={`row-${rowIndex}`} className="contact_channel_row">
      {row.map(([key, card]) => (
        <ContactChannel
          key={key}
          card_icon={card.card_icon}
          card_text={card.card_text}
          card_link={card.card_link}
        />
      ))}
    </div>
  ));
};

export default ContactChannelList;
