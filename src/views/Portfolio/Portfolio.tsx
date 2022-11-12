import React from 'react';
import {Header} from "../../components/Header/Header";
import {PortfolioBox} from "../../components/PortfolioBox/PortfolioBox";
import {Footer} from "../../components/Footer/Footer";

export const Portfolio = () => {
    return(
        <>
            <Header/>
            <PortfolioBox/>
            <Footer/>
        </>
    )
}