import React, { useContext } from "react";
import "../PortfolioProjectsStyles.css";
import { Icon } from "@iconify/react";
import { useMediaQuery } from "react-responsive";
import { LanguageContext } from "../../../contexts/language-context";

export const LandingPage = () => {
  const isSmallScreen = useMediaQuery({ maxWidth: 1500 });
  const { desc } = useContext(LanguageContext);

  return (
    <div className="my-project-box">
      <div className="my-project-top-box">
        <div className="my-project-description-box">
          <h1>{desc["portfolio-details-header"]}</h1>
          <p className="my-project-details-description">
            {desc["portfolio-landing-page-detail-description"]}
          </p>
          {isSmallScreen ? (
            <div className="my-project-logo-box">
              <img
                className="my-project-logo-icon"
                src="images/landing-page-mobile-screen.png"
                alt={desc["portfolio-landing-page-screen-alt"]}
              />
            </div>
          ) : null}

          <h2 className="my-project-header-repository-link">
            {desc["portfolio-details-website-address"]}
          </h2>
          <div
            className="my-project-website-address"
            onClick={() => {
              window.open("https://lambrozewski.smallhost.pl/", "_blank");
            }}
          >
            https://lambrozewski.smallhost.pl/
          </div>
          <h2 className="my-project-header-repository-link">
            {desc["portfolio-details-design-address"]}
          </h2>
          <div
            className="my-project-website-address"
            onClick={() => {
              window.open("https://figmaland.com/", "_blank");
            }}
          >
            https://figmaland.com/
          </div>
          <h2 className="my-project-header-repository-link">
            {desc["portfolio-details-code-source-frontend"]}
          </h2>
          <div
            className="my-project-go-to-github-button"
            onClick={() => {
              window.open(
                "https://github.com/LukaszAmbrozewski/landing-page",
                "_blank"
              );
            }}
          >
            <Icon icon="akar-icons:github-fill" />
            <Icon icon="octicon:logo-github-16" />
          </div>
        </div>
        {isSmallScreen ? null : (
          <div className="my-project-logo-box">
            <img
              className="my-project-logo-icon"
              src="images/landing-page-mobile-screen.png"
              alt={desc["portfolio-invoice-app-screen-alt"]}
            />
          </div>
        )}
      </div>
      <div className="my-project-bottom-box">
        <h2 className="my-project-header-technology-stack">
          {desc["portfolio-details-technologies-header"]}
        </h2>
        <div className="my-project-technologies">
          <Icon
            className="my-project-technologies-icon"
            icon="akar-icons:javascript-fill"
          />
          <Icon
            className="my-project-technologies-icon"
            icon="file-icons:typescript-alt"
          />
          <Icon className="my-project-technologies-icon" icon="uil:react" />
          <Icon
            className="my-project-technologies-icon"
            icon="simple-icons:sass"
          />
          <Icon
            className="my-project-technologies-icon"
            icon="akar-icons:css-fill"
          />
          <Icon
            className="my-project-technologies-icon"
            icon="akar-icons:html-fill"
          />
          <Icon className="my-project-technologies-icon" icon="iconoir:figma" />
          <Icon
            className="my-project-technologies-icon"
            icon="simple-icons:gimp"
          />
        </div>
      </div>
    </div>
  );
};
