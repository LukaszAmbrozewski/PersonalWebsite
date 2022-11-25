import React, { useContext } from "react";
import "../PortfolioProjectsStyles.css";
import { Icon } from "@iconify/react";
import { useMediaQuery } from "react-responsive";
import { LanguageContext } from "../../../contexts/language-context";

export const InvoiceApp = () => {
  const isSmallScreen = useMediaQuery({ maxWidth: 1500 });
  const { desc } = useContext(LanguageContext);

  return (
    <div className="my-project-box">
      <div className="my-project-top-box">
        <div className="my-project-description-box">
          <h1>{desc["portfolio-details-header"]}</h1>
          <p className="my-project-details-description">
            {desc["portfolio-invoice-app-detail-description"]}
          </p>
          {isSmallScreen ? (
            <div className="my-project-logo-box">
              <img
                className="my-project-logo-icon"
                src="images/invoice-app/menu.png"
                alt={desc["portfolio-invoice-app-screen-alt"]}
              />
            </div>
          ) : null}
          <h2 className="my-project-header-repository-link">
            {desc["portfolio-invoice-app-functions-list-header"]}
            <p className="my-project-details-description my-project-function-list">
              <p>
                <Icon
                  className="my-project-function-list-icon"
                  icon="mdi:like"
                />
                {desc["portfolio-invoice-app-first-function"]}
              </p>
              <p>
                <Icon
                  className="my-project-function-list-icon"
                  icon="mdi:like"
                />
                {desc["portfolio-invoice-app-second-function"]}
              </p>
              <p>
                <Icon
                  className="my-project-function-list-icon"
                  icon="mdi:like"
                />
                {desc["portfolio-invoice-app-third-function"]}
              </p>
              <p>
                <Icon
                  className="my-project-function-list-icon"
                  icon="mdi:like"
                />
                {desc["portfolio-invoice-app-fourth-function"]}
              </p>
              <p>
                <Icon
                  className="my-project-function-list-icon"
                  icon="mdi:like"
                />
                {desc["portfolio-invoice-app-fifth-function"]}
              </p>
              <p>
                <Icon
                  className="my-project-function-list-icon"
                  icon="mdi:like"
                />
                {desc["portfolio-invoice-app-sixth-function"]}
              </p>
            </p>
          </h2>
          <h2 className="my-project-header-repository-link">
            {desc["portfolio-details-code-source-backend"]}
          </h2>
          <div
            className="my-project-go-to-github-button"
            onClick={() => {
              window.open(
                "https://github.com/LukaszAmbrozewski/InvoiceApp-backend",
                "_blank"
              );
            }}
          >
            <Icon icon="akar-icons:github-fill" />
            <Icon icon="octicon:logo-github-16" />
          </div>
          <h2 className="my-project-header-repository-link">
            {desc["portfolio-details-code-source-frontend"]}
          </h2>
          <div
            className="my-project-go-to-github-button"
            onClick={() => {
              window.open(
                "https://github.com/LukaszAmbrozewski/InvoiceApp-frontend",
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
              src="images/invoice-app/menu.png"
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
            icon="simple-icons:nestjs"
          />
          <Icon
            className="my-project-technologies-icon"
            icon="simple-icons:mysql"
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
