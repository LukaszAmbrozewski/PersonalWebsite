import React from "react";
import { Header } from "../../components/Header/Header";
import { HomeBox } from "../../components/HomeBox/HomeBox";
import { AboutMeBox } from "../../components/AboutMeBox/AboutMeBox";
import { CooperationBox } from "../../components/CooperationBox/CooperationBox";
import { TechnologiesBox } from "../../components/TechnologiesBox/TechnologiesBox";
import { ContactBox } from "../../components/ContactBox/ContactBox";
import { PortfolioBox } from "../../components/PortfolioBox/PortfolioBox";

export const Home = () => {
  return (
    <>
      <section id="header">
        <Header />
      </section>
      <section id="home">
        <HomeBox />
      </section>
      <section id="about-me">
        <AboutMeBox />
      </section>
      {/*<section id="portfolio">*/}
      {/*  <PortfolioBox />*/}
      {/*</section>*/}
      {/*<section id="technologies">*/}
      {/*  <TechnologiesBox />*/}
      {/*</section>*/}
      {/*<section id="cooperation">*/}
      {/*  <CooperationBox />*/}
      {/*</section>*/}
      {/*<section id="contact">*/}
      {/*  <ContactBox />*/}
      {/*</section>*/}
    </>
  );
};
