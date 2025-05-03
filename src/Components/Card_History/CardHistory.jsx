import React from "react";
import "./CardHistory.css";

import { ReactComponent as Bookmark } from "../../Icons/Bookmark.svg";

const CardHistory = ({ card_date, card_title, card_text }) => {
  return (
    <div className="card_history_block">
      <div className="date_container">
        <Bookmark viewBox="7 0 32 32" />
        <p>{card_date}</p>
      </div>
      <h4>{card_title}</h4>
      <p>{card_text}</p>
    </div>
  );
};

export default CardHistory;
