import React from "react";
import "./PortfolioProjectDescription.css";

interface Props {
  title: string;
  description: string;
  showDetails: () => void;
}

export const PortfolioProjectDescription = (props: Props) => {
  return (
    <div className="portfolio-project-description">
      <h1 className="portfolio-one-section-header">InvoiceApp</h1>
      <p className="portfolio-one-section-description">{props.description}</p>
      <button
        className="portfolio-one-section-more-button"
        onClick={props.showDetails}
      >
        Więcej o projekcie
      </button>
    </div>
  );
};
