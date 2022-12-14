import React, { useContext } from "react";
import "./PortfolioBox.css";
import { LanguageContext } from "../../contexts/language-context";
import { SectionHeader } from "../../common/SectionHeader/SectionHeader";
import { PortfolioProjectInformation } from "../../common/PortfolioProjectInformation/PortfolioProjectInformation";
import { InvoiceApp } from "../PortfolioProjectsDetails/InvoiceApp/InvoiceApp";
import { PersonalWebsite } from "../PortfolioProjectsDetails/PersonalWebsite/PersonalWebsite";
import { LandingPage } from "../PortfolioProjectsDetails/LandingPage/LandingPage";

export const PortfolioBox = () => {
  const { desc } = useContext(LanguageContext);

  return (
    <div className="portfolio-box">
      <SectionHeader text={desc["portfolio-section-main-header"]} />
      <PortfolioProjectInformation
        alt={desc["portfolio-landing-page-image-alt"]}
        description={desc["portfolio-landing-page-description"]}
        image="/images/screen-landing-page.png"
        title={desc["portfolio-landing-page-title"]}
        showDetails={() => {}}
        side="left"
        detailsComponent={<LandingPage />}
      />
      <PortfolioProjectInformation
        alt={desc["portfolio-invoice-app-image-alt"]}
        description={desc["portfolio-invoice-app-description"]}
        image="/images/invoiceapp.png"
        title={desc["portfolio-invoice-app-title"]}
        showDetails={() => {}}
        side="right"
        detailsComponent={<InvoiceApp />}
      />
      <PortfolioProjectInformation
        alt={desc["portfolio-personal-website-image-alt"]}
        description={desc["portfolio-personal-website-description"]}
        image="/images/personalwebsite.png"
        title={desc["portfolio-personal-website-title"]}
        showDetails={() => {}}
        side="left"
        detailsComponent={<PersonalWebsite />}
      />
    </div>
  );
};
