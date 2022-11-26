import React, { useContext } from "react";
import "../ComponentsStyles.css";
import { SectionHeader } from "../../common/SectionHeader/SectionHeader";
import { LanguageContext } from "../../contexts/language-context";
import { Icon } from "@iconify/react";
import "./CooperationBox.css";

export const CooperationBox = () => {
  const { desc } = useContext(LanguageContext);

  return (
    <>
      <div className="cooperation-box">
        <SectionHeader text={desc["cooperation-header"]} />
        <div>
          <Icon
            className="cooperation-icon"
            icon="fluent:people-team-32-filled"
          />
        </div>
        <p className="cooperation-text">{desc["cooperation-first-text"]}</p>
        <div>
          <Icon className="cooperation-icon" icon="mdi:web" />
        </div>
        <p className="cooperation-text">{desc["cooperation-second-text"]}</p>
      </div>
    </>
  );
};
