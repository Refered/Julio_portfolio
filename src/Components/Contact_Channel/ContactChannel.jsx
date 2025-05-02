import React from "react";
import "./ContactChannel.css";

const ContactChannel = ({ card_icon, card_text }) => {
  return (
    <div className="contact_channel_container">
      <div className="icon_container">{card_icon}</div>
      <div className="text_container">
        <p>{card_text}</p>
      </div>
    </div>
  );
};

export default ContactChannel;
