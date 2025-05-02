import React from "react";
import "./CardPortfolio.css";

const CardPortfolio = ({ card_title, card_image, card_text }) => {
  return (
    <div className="card_portfolio_container">
      <h3>{card_title}</h3>
      <div className="card_body">
        <div className="img_container">
          <img src={card_image} alt={card_title} />
        </div>
        <div className="text_container">
          <p>{card_text}</p>
        </div>
      </div>
    </div>
  );
};

export default CardPortfolio;
