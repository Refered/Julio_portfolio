import React from "react";
import "./CardData.css";

const CardData = ({ card_title, card_text }) => {
  return (
    <div className="card_data_container">
      <p>{`${card_title}: ${card_text}`}</p>
    </div>
  );
};

export default CardData;
