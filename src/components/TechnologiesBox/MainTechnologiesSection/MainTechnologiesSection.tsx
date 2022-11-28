import React from "react";
import { Icon } from "@iconify/react";
import "../../TechnologiesBox/TechnologiesBox.css";

export const MainTechnologiesSection = () => {
  return (
    <div className="technologies-main-section">
      <p className="technologies-text">
        <Icon
          className="main-technologies-icon"
          icon="akar-icons:javascript-fill"
        />
        JavaScript
      </p>
      <p className="technologies-text">
        <Icon
          className="main-technologies-icon"
          icon="akar-icons:typescript-fill"
        />
        TypeScript
      </p>
    </div>
  );
};
