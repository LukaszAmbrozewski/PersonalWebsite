import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import './MoreAboutMeBtn.css'
import {ActiveViewContext} from "../../contexts/active-view-context";
import {LanguageContext} from "../../contexts/language-context";

export const MoreAboutMeBtn = () => {
    const {setActiveView} = useContext(ActiveViewContext)
    const {desc} = useContext(LanguageContext);

    const changeActiveView = (view: string) => {
        setActiveView(view)
    }

    return(
        <Link to='/about-me' onClick={() => changeActiveView('about-me')} className='more-about-me-btn'>{desc["main-about-me-home-box-btn"]}</Link>
    )
}