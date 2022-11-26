import React from "react";
import { Icon } from "@iconify/react";
import "../../TechnologiesBox/TechnologiesBox.css";

export const FrontendSection = () => {
  return (
    <div className="technologies-section">
      <h2 className="technologies-section-header-box">FRONTEND</h2>
      <div className="technologies-section-box">
        <p className="technologies-text">
          <Icon className="technologies-icon" icon="akar-icons:react-fill" />
          React
        </p>
        <p className="technologies-text">
          <Icon className="technologies-icon" icon="akar-icons:css-fill" />
          CSS
        </p>
        <p className="technologies-text">
          <Icon className="technologies-icon" icon="akar-icons:html-fill" />
          HTML
        </p>
      </div>
    </div>
  );
};
