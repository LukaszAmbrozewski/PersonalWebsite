import React, { useContext } from "react";
import "./TechnologiesBox.css";
import { LanguageContext } from "../../contexts/language-context";
import { SectionHeader } from "../../common/SectionHeader/SectionHeader";
import { BackendSection } from "./BackendSection/BackendSection";
import { FrontendSection } from "./FrontendSection/FrontendSection";
import { DatabaseSection } from "./DatabaseSection/DatabaseSection";
import { DesignSection } from "./DesignSection/DesignSection";
import { MainTechnologiesSection } from "./MainTechnologiesSection/MainTechnologiesSection";
import { useMediaQuery } from "react-responsive";

export const TechnologiesBox = () => {
  const { desc } = useContext(LanguageContext);
  const isSmallScreen = useMediaQuery({ maxWidth: 1500 });

  return (
    <div className="technologies-box">
      <SectionHeader text={desc["technologies-header"]} />
      <MainTechnologiesSection />
      <>
        {isSmallScreen ? (
          <>
            <FrontendSection />
            <BackendSection />
            <DesignSection />
            <DatabaseSection />
          </>
        ) : (
          <>
            <div className="technologies-section-box-two-section">
              <FrontendSection />
              <BackendSection />
            </div>
            <div className="technologies-section-box-two-section">
              <DesignSection />
              <DatabaseSection />
            </div>
          </>
        )}
      </>
    </div>
  );
};
