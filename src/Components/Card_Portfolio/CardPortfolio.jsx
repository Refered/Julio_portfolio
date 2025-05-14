import React from "react";
import "./CardPortfolio.css";

const CardPortfolio = ({ card_title, card_image, card_text, card_link }) => {
  return (
    <div className="card_portfolio_container">
      <h3>{card_title}</h3>
      <a className="card_body" href={card_link} target="blank">
        <div className="img_container">
          <img src={card_image} alt={card_title} />
        </div>
        <div className="text_container">
          <p>{card_text}</p>
        </div>
      </a>
    </div>
  );
};

export default CardPortfolio;
