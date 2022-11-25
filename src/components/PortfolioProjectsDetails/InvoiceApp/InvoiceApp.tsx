import React from "react";
import "../PortfolioProjectsStyles.css";
import { Icon } from "@iconify/react";
import { useMediaQuery } from "react-responsive";

export const InvoiceApp = () => {
  const isSmallScreen = useMediaQuery({ maxWidth: 1500 });

  return (
    <div className="my-project-box">
      <div className="my-project-top-box">
        <div className="my-project-description-box">
          <h1>O projekcie</h1>
          <p className="my-project-details-description">
            InvoiceApp to fullstackowa aplikacja ułatwiająca zarządzanie
            fakutrami. Składa się z części frontendowej backendowej oraz bazy
            danych. Osobiście wykonałem cały proces tworzenia aplikacji, od
            zaprojektowania widoków, wszystkich funkcjonalności, bazy danych aż
            do pełnej realizacji projektu. Aplikacja została wykonana w
            podejściu mobile first i jest w pełni repsonsywna.
          </p>
          {isSmallScreen ? (
            <div className="my-project-logo-box">
              <img
                className="my-project-logo-icon"
                src="images/invoice-app/menu.png"
                alt="screen invoiceapp aplication"
              />
            </div>
          ) : null}
          <h2 className="my-project-header-repository-link">
            Funkcje aplikacji:
            <p className="my-project-details-description my-project-function-list">
              <p>
                <Icon
                  className="my-project-function-list-icon"
                  icon="mdi:like"
                />
                Tworzenie własnej bazy klientów,
              </p>
              <p>
                <Icon
                  className="my-project-function-list-icon"
                  icon="mdi:like"
                />
                Proste dodawanie nowych faktur,
              </p>
              <p>
                <Icon
                  className="my-project-function-list-icon"
                  icon="mdi:like"
                />
                Możliwość dodawania i edycji klientów,
              </p>
              <p>
                <Icon
                  className="my-project-function-list-icon"
                  icon="mdi:like"
                />
                Łatwy dostęp do wszystkich fakutr,
              </p>
              <p>
                <Icon
                  className="my-project-function-list-icon"
                  icon="mdi:like"
                />
                Śledzenie historii aktywności użytkownika,
              </p>
              <p>
                <Icon
                  className="my-project-function-list-icon"
                  icon="mdi:like"
                />
                Analiza statystyk każdego miesiąca,
              </p>
            </p>
          </h2>
          <h2 className="my-project-header-repository-link">
            Kod źródłowy - backend
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
            Kod źródłowy - frontend
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
              alt="screen invoiceapp aplication"
            />
          </div>
        )}
      </div>
      <div className="my-project-bottom-box">
        <h2 className="my-project-header-technology-stack">
          Wykorzystane technologie i narzędzia
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
