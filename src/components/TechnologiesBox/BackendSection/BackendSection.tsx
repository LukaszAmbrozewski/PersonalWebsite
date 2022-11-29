import React from "react";
import { Icon } from "@iconify/react";
import "../../TechnologiesBox/TechnologiesBox.css";

export const BackendSection = () => {
  return (
    <div className="technologies-section technologies-section-gray-border main-hover-effect">
      <h2 className="technologies-section-header-box technologies-section-gray-background">
        BACKEND
      </h2>
      <div className="technologies-section-box">
        <p className="technologies-text">
          <Icon className="technologies-icon" icon="akar-icons:node-fill" />
          Node.js
        </p>
        <p className="technologies-text">
          <Icon className="technologies-icon" icon="file-icons:nestjs" />
          NestJS
        </p>
        <p className="technologies-text">
          <Icon className="technologies-icon" icon="simple-icons:express" />
          Express.js
        </p>
      </div>
    </div>
  );
};
