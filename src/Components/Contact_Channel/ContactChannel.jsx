import React from "react";
import "./ContactChannel.css";

const ContactChannel = ({ card_icon, card_text, card_link }) => {
  return (
    <div className="contact_channel_container">
      <a className="icon_container" href={card_link} target="blank">
        {card_icon}
      </a>
      <div className="text_container">
        <p>{card_text}</p>
      </div>
    </div>
  );
};

export default ContactChannel;
