import React, { useContext, useEffect, useState } from "react";
import { Logo } from "../Logo/Logo";
import { Icon } from "@iconify/react";
import { HashLink } from "react-router-hash-link";
import { SelectLanguage } from "../SelectLanguage/SelectLanguage";
import { LanguageContext } from "../../contexts/language-context";
import { useMediaQuery } from "react-responsive";
import "./HeaderWithHiddenMenu.css";
import "../ComponentsStyles.css";

export const HeaderWithHiddenMenu = () => {
  const [activeHiddenMenu, setActiveHiddenMenu] = useState<boolean>(false);
  const isSmallScreen = useMediaQuery({ maxWidth: 1500 });
  const [closeMenuAnimationBox, setCloseMenuAnimationBox] =
    useState<boolean>(false);
  const { desc } = useContext(LanguageContext);

  const closeHeaderAnimationEffect = () => {
    setCloseMenuAnimationBox(true);
    setTimeout(() => {
      setCloseMenuAnimationBox(false);
    }, 700);
  };

  const changeMenuVisibility = () => {
    if (activeHiddenMenu) {
      setActiveHiddenMenu(false);
      closeHeaderAnimationEffect();
    } else {
      setActiveHiddenMenu(true);
    }
  };

  useEffect(() => {
    if (isSmallScreen) {
      setActiveHiddenMenu(false);
    }
  }, [isSmallScreen]);

  return (
    <>
      {activeHiddenMenu ? (
        <div className="header-with-open-hidden-menu">
          <div className="top-section-hidden-header">
            <Logo />
            <button onClick={changeMenuVisibility} className="small-main-btn">
              <Icon icon="ic:baseline-close" />
            </button>
          </div>
          <div className="small-menu-box">
            <div className="small-menu-separator" />
            <HashLink
              onClick={() => changeMenuVisibility()}
              className="small-menu-btn"
              smooth
              to="/#header"
            >
              {desc["main-home-btn"]}
            </HashLink>
            <HashLink
              onClick={() => changeMenuVisibility()}
              className="small-menu-btn"
              smooth
              to="/#about-me"
            >
              {desc["main-about-me-btn"]}
            </HashLink>
            <HashLink
              onClick={() => changeMenuVisibility()}
              className="small-menu-btn"
              smooth
              to="/#portfolio"
            >
              {desc["main-portfolio-btn"]}
            </HashLink>
            <HashLink
              onClick={() => changeMenuVisibility()}
              className="small-menu-btn"
              smooth
              to="/#technologies"
            >
              {desc["main-technologies-btn"]}
            </HashLink>
            <HashLink
              onClick={() => changeMenuVisibility()}
              className="small-menu-btn"
              smooth
              to="/#cooperation"
            >
              {desc["main-cooperation-btn"]}
            </HashLink>
            <HashLink
              onClick={() => changeMenuVisibility()}
              className="small-menu-btn"
              smooth
              to="/#contact"
            >
              {desc["main-contact-btn"]}
            </HashLink>
            <SelectLanguage />
          </div>
        </div>
      ) : (
        <div
          className={
            closeMenuAnimationBox
              ? "header-box header-box-animation"
              : "header-box"
          }
        >
          <Logo />
          <button onClick={changeMenuVisibility} className="small-main-btn">
            <Icon icon="dashicons:menu-alt" />
          </button>
        </div>
      )}
    </>
  );
};
