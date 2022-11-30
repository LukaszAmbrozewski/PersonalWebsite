import React from "react";
import "./PortfolioProjectDescription.css";
import "../../components/ComponentsStyles.css";

interface Props {
  title: string;
  description: string;
  showDetails: () => void;
  showButtonText: string;
}

export const PortfolioProjectDescription = (props: Props) => {
  return (
    <div className="portfolio-project-description">
      <h1 className="portfolio-one-section-header">{props.title}</h1>
      <article className="portfolio-one-section-description">
        {props.description}
      </article>
      <button
        className="portfolio-one-section-more-button"
        onClick={props.showDetails}
      >
        {props.showButtonText}
      </button>
    </div>
  );
};
