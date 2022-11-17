import React, {useContext} from 'react';
import './MoreAboutMeBtn.css'
import {LanguageContext} from "../../contexts/language-context";
import {HashLink} from "react-router-hash-link";

export const MoreAboutMeBtn = () => {
    const {desc} = useContext(LanguageContext);

    return (
        <HashLink className='more-about-me-btn' smooth to="/#about-me">{desc["main-about-me-home-box-btn"]}</HashLink>
    )
}