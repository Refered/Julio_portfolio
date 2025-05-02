import React from "react";
import "./Portfolio.css";

import CardPortfolioList from "../../Components/Card_Portfolio/CardPortfolioList.jsx";

const Portfolio = ({ sectionState }) => {
  return (
    <section className={`${sectionState}`}>
      <div className="portfolio_container">
        <div className="title_container">
          <h2>Portfolio</h2>
        </div>
        <div className="card_list_container">
          <CardPortfolioList />
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
