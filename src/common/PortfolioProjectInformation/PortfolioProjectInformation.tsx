import React, { useContext, useState } from "react";
import "./PortfolioProjectInformation.css";
import { PortfolioProjectImage } from "../PortfolioProjectImage/PortfolioProjectImage";
import { PortfolioProjectDescription } from "../PortfolioProjectDescription/PortfolioProjectDescription";
import { useMediaQuery } from "react-responsive";
import { LanguageContext } from "../../contexts/language-context";

interface Props {
  image: string;
  alt: string;
  title: string;
  description: string;
  showDetails: () => void;
  side: "left" | "right";
  detailsComponent: JSX.Element;
}

export const PortfolioProjectInformation = (props: Props) => {
  const [showDetails, setShowDetails] = useState<boolean>(false);
  const isSmallScreen = useMediaQuery({ maxWidth: 1500 });
  const { desc } = useContext(LanguageContext);

  const showButtonText = showDetails
    ? desc["portfolio-section-hide-button-text"]
    : desc["portfolio-section-show-button-text"];

  const showAllDetails = () => {
    showDetails ? setShowDetails(false) : setShowDetails(true);
  };

  return (
    <>
      {isSmallScreen ? (
        <>
          <div className="portfolio-one-project-box">
            <PortfolioProjectImage image={props.image} alt={props.alt} />
            <PortfolioProjectDescription
              description={props.description}
              title={props.title}
              showDetails={showAllDetails}
              showButtonText={showButtonText}
            />
          </div>
          {showDetails ? (
            <div className="more-details-box">{props.detailsComponent}</div>
          ) : null}
        </>
      ) : (
        <div className="project-information-box">
          <div className="portfolio-one-project-box">
            {props.side === "left" ? (
              <>
                <PortfolioProjectDescription
                  description={props.description}
                  title={props.title}
                  showDetails={showAllDetails}
                  showButtonText={showButtonText}
                />
                <PortfolioProjectImage image={props.image} alt={props.alt} />
              </>
            ) : (
              <>
                <PortfolioProjectImage image={props.image} alt={props.alt} />
                <PortfolioProjectDescription
                  description={props.description}
                  title={props.title}
                  showDetails={showAllDetails}
                  showButtonText={showButtonText}
                />
              </>
            )}
          </div>
          {showDetails ? (
            <article className="more-details-box">
              {props.detailsComponent}
            </article>
          ) : null}
        </div>
      )}
    </>
  );
};
