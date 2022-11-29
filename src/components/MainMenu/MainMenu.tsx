import React, { useContext } from "react";
import { SelectLanguage } from "../SelectLanguage/SelectLanguage";
import "./MainMenu.css";
import "../ComponentsStyles.css";
import { LanguageContext } from "../../contexts/language-context";
import { HashLink } from "react-router-hash-link";

export const MainMenu = () => {
  const { desc } = useContext(LanguageContext);

  return (
    <nav className="main-menu-box">
      <HashLink className="main-menu-btn" smooth to="/#home">
        {desc["main-home-btn"]}
      </HashLink>
      <HashLink className="main-menu-btn" smooth to="/#about-me">
        {desc["main-about-me-btn"]}
      </HashLink>
      <HashLink className="main-menu-btn" smooth to="/#portfolio">
        {desc["main-portfolio-btn"]}
      </HashLink>
      <HashLink className="main-menu-btn" smooth to="/#technologies">
        {desc["main-technologies-btn"]}
      </HashLink>
      <HashLink className="main-menu-btn" smooth to="/#cooperation">
        {desc["main-cooperation-btn"]}
      </HashLink>
      <HashLink className="main-menu-btn" smooth to="/#contact">
        {desc["main-contact-btn"]}
      </HashLink>
      <SelectLanguage />
    </nav>
  );
};
