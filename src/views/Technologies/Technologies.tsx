import React from 'react';
import {Header} from "../../components/Header/Header";
import {Footer} from "../../components/Footer/Footer";
import {TechnologiesBox} from "../../components/TechnologiesBox/TechnologiesBox";

export const Technologies = () => {
    return (
        <div>
            <Header/>
            <TechnologiesBox/>
            <Footer/>
        </div>
    )
}