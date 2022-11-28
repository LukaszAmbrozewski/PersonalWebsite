import React, { useContext } from "react";
import { MoreAboutMeBtn } from "../MoreAboutMeBtn/MoreAboutMeBtn";
import { LanguageContext } from "../../contexts/language-context";
import "../ComponentsStyles.css";
import "./HomeBox.css";
import BackgroundsImageGallery from "../BackgroundsImageGallery/BackgroundsImageGallery";

export const HomeBox = () => {
  const { desc } = useContext(LanguageContext);

  return (
    <>
      <BackgroundsImageGallery />
      <div className="home-box">
        <div className="home-text-box">
          <p className="home-box-small-text">
            {desc["main-first-home-box-text"]}
          </p>
          <p className="home-box-text">{desc["main-second-home-box-text"]}</p>
          <p className="home-box-small-text">
            {desc["main-third-home-box-text"]}
          </p>
        </div>
        <MoreAboutMeBtn />
      </div>
    </>
  );
};
