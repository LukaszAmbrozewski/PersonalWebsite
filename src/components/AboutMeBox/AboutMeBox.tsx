import React, { useContext } from "react";
import "../ComponentsStyles.css";
import { LanguageContext } from "../../contexts/language-context";
import { SectionHeader } from "../../common/SectionHeader/SectionHeader";
import "./AboutMeBox.css";

export const AboutMeBox = () => {
  const { desc } = useContext(LanguageContext);

  return (
    <>
      <SectionHeader text="O MNIE" />
      <img
        className="author-photo"
        src="images/myphoto.png"
        alt="Photo author"
      />
      <div className="about-me-box-sections">
        <div className="about-me-one-section">
          <div className="one-section-header">PROGRAMOWANIE</div>
          <article className="one-section-text">
            Pisaniem kodu interesowałem się już w szkole podstawowej. Swoją
            poważną przygodę z programowaniem rozpocząłem wiosną 2021 roku. W
            swojej pracy wykorzystuję technologie ekosystemu JavaScript:
            TypeScript, React.js, Node.js, NestJS, Express.js, oraz relacyjne i
            nierelacyjne bazy danych: MySQL i MongoDB. Jestem otwarty na ciekawe
            i wymagające zadania, które udoskonalą moje umiejętności.
          </article>
        </div>
        <div className="about-me-one-section orange-border">
          <div className="one-section-header orange-section">PRYWATNIE</div>
          <article className="one-section-text">
            Programowanie jest czymś co sprawia mi ogromną satysfakcje, a
            specyfika pracy programisty to coś, co idealnie wpisuje się w moje
            predyspozycje zawodowe. Oderwaniem od pracy jest dla mnie gra na
            gitarze, wycieczki rowerowe oraz spędzanie czasu z rodziną.
          </article>
        </div>
        <div className="about-me-one-section">
          <div className="one-section-header">SPOŁECZNIE</div>
          <article className="one-section-text">
            Zostałem frontend developerem w zespole tworzącym projekty społeczne
            dla organizacji NeuroN Foundation. Nasz zespół składa się z ponad
            pięćdziesięciu specjalistów z różnych obszarów IT. Działalność w
            fundacji umożliwia mi łączenie pomocy innym ludziom z rozwojem
            swojej pasji, jaką jest programowanie.
          </article>
        </div>
      </div>
    </>
  );
};
