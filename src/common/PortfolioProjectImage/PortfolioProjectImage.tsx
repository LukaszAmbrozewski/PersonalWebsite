import React from "react";
import "./PortfolioProjectImage.css";

interface Props {
  image: string;
  alt: string;
}

export const PortfolioProjectImage = (props: Props) => {
  return (
    <div className="portfolio-image-box">
      <img src={props.image} alt={props.alt} className="portfolio-image" />
    </div>
  );
};
