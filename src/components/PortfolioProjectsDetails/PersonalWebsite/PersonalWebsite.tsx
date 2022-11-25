import React from "react";
import "../PortfolioProjectsStyles.css";
import { Icon } from "@iconify/react";
import { useMediaQuery } from "react-responsive";

export const PersonalWebsite = () => {
  const isSmallScreen = useMediaQuery({ maxWidth: 1500 });

  return (
    <div className="my-project-box">
      <div className="my-project-top-box">
        <div className="my-project-description-box">
          <h1>O projekcie</h1>
          <p className="my-project-details-description">
            Strona lukaszambrozewski.com to strona prezentująca najważniejsze
            informacje o mojej osobie. Została zaprojektowana z wykorzystaniem
            programów Figma oraz Gimp. Strona wizytówka to idealne rozwiązanie
            dla osób, które chcą zaznaczyć swoją obecność w internecie.
            Responsywność strony sprawia, że użytkownik zobaczy ją w pełnej
            formie na każdym urządzeniu z dostępem do internetu. Dobrze
            stworzona strona internetowa to klucz do osiągnięcia sukcesu w
            internecie.
          </p>
          <h2 className="my-project-header-repository-link">
            Kod źródłowy - frontend
          </h2>
          <div
            className="my-project-go-to-github-button"
            onClick={() => {
              window.open(
                "https://github.com/LukaszAmbrozewski/PersonalWebsite",
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
            <Icon
              className="my-project-personal-website-logo-icon"
              icon="ant-design:code-outlined"
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
