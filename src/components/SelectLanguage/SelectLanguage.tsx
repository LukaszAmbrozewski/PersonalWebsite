import React, { useContext, useState } from "react";
import { Icon } from "@iconify/react";
import "../ComponentsStyles.css";
import "./SelectLanguage.css";
import "../HeaderWithHiddenMenu/HeaderWithHiddenMenu.css";
import { LanguageContext } from "../../contexts/language-context";
import { useMediaQuery } from "react-responsive";

export const SelectLanguage = () => {
  const { activeLanguage, setActiveLanguage } = useContext(LanguageContext);
  const [showLanguagesList, setShowLanguagesList] = useState<boolean>(false);
  const isSmallScreen = useMediaQuery({ maxWidth: 1500 });

  const changeLanguage = (language: string) => {
    setActiveLanguage(language);
    showLanguages();
  };

  const showLanguages = () => {
    showLanguagesList
      ? setShowLanguagesList(false)
      : setShowLanguagesList(true);
  };

  return (
    <>
      {isSmallScreen ? (
        <>
          {showLanguagesList ? (
            <>
              <div
                onClick={showLanguages}
                className="small-menu-btn hidden-menu-lang-btn"
              >
                <p>{activeLanguage}</p>
                <Icon icon="akar-icons:chevron-down" />
              </div>
              <div>
                <div
                  onClick={() => changeLanguage("pl")}
                  className={
                    activeLanguage === "pl"
                      ? "language-btn active "
                      : "language-btn"
                  }
                >
                  Polski
                </div>
                <div
                  onClick={() => changeLanguage("en")}
                  className={
                    activeLanguage === "en"
                      ? "language-btn active "
                      : "language-btn"
                  }
                >
                  English
                </div>
                <div
                  onClick={() => changeLanguage("de")}
                  className={
                    activeLanguage === "de"
                      ? "language-btn active "
                      : "language-btn"
                  }
                >
                  Deutsch
                </div>
              </div>
            </>
          ) : (
            <div
              onClick={showLanguages}
              className={
                isSmallScreen
                  ? "small-menu-btn hidden-menu-lang-btn"
                  : "main-menu-btn main-menu-lang-btn"
              }
            >
              <p>{activeLanguage}</p>
              <Icon icon="akar-icons:chevron-down" />
            </div>
          )}
        </>
      ) : (
        <>
          {showLanguagesList ? (
            <>
              <div
                onClick={showLanguages}
                className="main-menu-btn main-menu-lang-btn"
              >
                <p>{activeLanguage}</p>
                <Icon icon="akar-icons:chevron-down" />
              </div>
              <div className="language-list-box">
                <div
                  onClick={() => changeLanguage("pl")}
                  className={
                    activeLanguage === "pl"
                      ? "language-btn active"
                      : "language-btn"
                  }
                >
                  pl
                </div>
                <div
                  onClick={() => changeLanguage("en")}
                  className={
                    activeLanguage === "en"
                      ? "language-btn active"
                      : "language-btn"
                  }
                >
                  en
                </div>
                <div
                  onClick={() => changeLanguage("de")}
                  className={
                    activeLanguage === "de"
                      ? "language-btn active"
                      : "language-btn"
                  }
                >
                  de
                </div>
              </div>
            </>
          ) : (
            <div
              onClick={showLanguages}
              className="main-menu-btn main-menu-lang-btn"
            >
              <p>{activeLanguage}</p>
              <Icon icon="akar-icons:chevron-down" />
            </div>
          )}
        </>
      )}
    </>
  );
};
