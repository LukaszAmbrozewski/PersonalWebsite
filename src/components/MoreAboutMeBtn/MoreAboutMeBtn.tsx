import React, { useContext } from "react";
import "./MoreAboutMeBtn.css";
import { LanguageContext } from "../../contexts/language-context";
import { HashLink } from "react-router-hash-link";
import { Icon } from "@iconify/react";

export const MoreAboutMeBtn = () => {
  const { desc } = useContext(LanguageContext);

  return (
    <HashLink className="more-about-me-btn" smooth to="/#about-me">
      <div className="move-down-button">
        <Icon
          className="move-down-button-icon"
          icon="material-symbols:keyboard-arrow-down"
        />
      </div>
      <p>{desc["main-about-me-home-box-btn"]}</p>
    </HashLink>
  );
};
