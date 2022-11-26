import React, { useContext } from "react";
import { Icon } from "@iconify/react";
import "../../TechnologiesBox/TechnologiesBox.css";
import { LanguageContext } from "../../../contexts/language-context";

export const DatabaseSection = () => {
  const { desc } = useContext(LanguageContext);

  return (
    <div className="technologies-section">
      <h2 className="technologies-section-header-box">
        {desc["technologies-header-database-section"]}
      </h2>
      <div className="technologies-section-box">
        <p className="technologies-text">
          <Icon className="technologies-icon" icon="cib:mysql" /> MySQL
        </p>
        <p className="technologies-text">
          <Icon className="technologies-icon" icon="bxl:mongodb" /> MongoDB
        </p>
        <p className="technologies-text">
          <img
            className="technologies-icon"
            src={"images/typeorm-seeklogo.com.svg"}
            alt=""
          />
          TypeORM
        </p>
      </div>
    </div>
  );
};
