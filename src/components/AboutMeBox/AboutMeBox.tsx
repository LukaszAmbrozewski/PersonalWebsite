import React, { useContext } from "react";
import "../ComponentsStyles.css";
import { LanguageContext } from "../../contexts/language-context";
import { SectionHeader } from "../../common/SectionHeader/SectionHeader";
import "./AboutMeBox.css";

export const AboutMeBox = () => {
  const { desc } = useContext(LanguageContext);

  return (
    <div className="about-me-box">
      <SectionHeader text={desc["about-me-header"]} />
      <img
        className="author-photo"
        src="images/myphoto.png"
        alt="Photo author"
      />
      <div className="about-me-box-sections">
        <div className="about-me-one-section main-hover-effect">
          <div className="one-section-header">
            {desc["about-me-programming-section-header"]}
          </div>
          <article className="one-section-text">
            {desc["about-me-programming-section-description"]}
          </article>
        </div>
        <div className="about-me-one-section orange-border main-hover-effect">
          <div className="one-section-header orange-section">
            {desc["about-me-private-section-header"]}
          </div>
          <article className="one-section-text">
            {desc["about-me-private-section-description"]}
          </article>
        </div>
        <div className="about-me-one-section main-hover-effect">
          <div className="one-section-header">
            {desc["about-me-social-section-header"]}
          </div>
          <article className="one-section-text">
            {desc["about-me-social-section-description"]}
          </article>
        </div>
      </div>
    </div>
  );
};
