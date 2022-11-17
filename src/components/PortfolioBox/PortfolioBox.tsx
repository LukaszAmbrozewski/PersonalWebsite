import React, {useContext} from 'react';
import './PortfolioBox.css'
import {LanguageContext} from "../../contexts/language-context";

export const PortfolioBox = () => {
    const {desc} = useContext(LanguageContext);

    return(
        <div className="portfolio-box">
            <h1 className='portfolio-h1'>{desc["portfolio-main-header"]}</h1>
            <h1 className='portfolio-h1 portfolio-h2'>{desc["portfolio-first-project-header"]}</h1>
            <p className='portfolio-project-description'>{desc["portfolio-first-project-description"]}</p>
            <p>
                <img className='portfolio-phone-app-image' src="images/invoice-app/menu.png" alt="screen menu z aplikacji invoiceapp"/>
                <img className='portfolio-phone-app-image' src="images/invoice-app/clients.png" alt="screen listy klientów z aplikacji invoiceapp"/>
            </p>
        </div>
    )
}