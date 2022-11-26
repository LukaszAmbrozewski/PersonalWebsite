import React, { useContext } from "react";
import { Icon } from "@iconify/react";
import "../../TechnologiesBox/TechnologiesBox.css";
import { LanguageContext } from "../../../contexts/language-context";

export const DesignSection = () => {
  const { desc } = useContext(LanguageContext);

  return (
    <div className="technologies-section technologies-section-gray-border">
      <h2 className="technologies-section-header-box technologies-section-gray-background">
        {desc["technologies-header-design-section"]}
      </h2>
      <div className="technologies-section-box">
        <p className="technologies-text">
          <Icon className="technologies-icon" icon="ph:figma-logo" /> Figma
        </p>
        <p className="technologies-text">
          <Icon className="technologies-icon" icon="simple-icons:gimp" />
          Gimp
        </p>
        <p className="technologies-text">
          <Icon className="technologies-icon" icon="mdi:material-ui" />
          Material UI
        </p>
      </div>
    </div>
  );
};
