import React, { useContext } from "react";
import "./PortfolioBox.css";
import { LanguageContext } from "../../contexts/language-context";
import { SectionHeader } from "../../common/SectionHeader/SectionHeader";
import { PortfolioProjectInformation } from "../../common/PortfolioProjectInformation/PortfolioProjectInformation";
import { InvoiceApp } from "../PortfolioProjectsDetails/InvoiceApp/InvoiceApp";
import { PersonalWebsite } from "../PortfolioProjectsDetails/PersonalWebsite/PersonalWebsite";

export const PortfolioBox = () => {
  const { desc } = useContext(LanguageContext);

  return (
    <div className="portfolio-box">
      <SectionHeader text="PORTFOLIO" />

      <PortfolioProjectInformation
        alt="portfolio image 1"
        description="To fullstackowa aplikacja ułatwiająca zarządzanie fakturami. Składa się z części frontendowej, backendowej oraz bazy danych. Osobiście wykonałem cały proces tworzenia aplikacji: od zaprojektowania widoków, wszystkich funkcjonalności, bazy danych, aż do pełnej realizacji projektu. Aplikacja została wykonana w podejściu mobile first i jest w pełni responsywna."
        image="/images/portfolio-image-1.jpg"
        title="InvoiceApp"
        showDetails={() => {}}
        side="left"
        detailsComponent={<InvoiceApp />}
      />
      <PortfolioProjectInformation
        alt="portfolio image 1"
        description="To strona internetowa, na której przedstawiam swoją osobę. Zawiera wszelkie niezbędne informacje dotyczące technologii w jakich pracuję. Na stronie znajdują się również dane kontaktowe oraz portfolio, przedstawiające projekty nad którymi pracowałem."
        image="/images/portfolio-image-1.jpg"
        title="Strona osobista"
        showDetails={() => {}}
        side="right"
        detailsComponent={<PersonalWebsite />}
      />
    </div>
  );
};
