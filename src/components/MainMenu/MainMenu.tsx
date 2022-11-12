import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import {useMediaQuery} from 'react-responsive'
import {HiddenMenu} from "../HiddenMenu/HiddenMenu";
import {ActiveViewContext} from "../../contexts/active-view-context";
import {SelectLanguage} from "../SelectLanguage/SelectLanguage";
import './MainMenu.css'
import '../ComponentsStyles.css'
import {LanguageContext} from "../../contexts/language-context";

export const MainMenu = () => {
    const {activeView, setActiveView} = useContext(ActiveViewContext)
    const {desc} = useContext(LanguageContext);
    const isSmallScreen = useMediaQuery({maxWidth: 1600})

    const changeActiveView = (view: string) => {
        setActiveView(view)
    }

    return (
        <>
            {isSmallScreen ? (
                <HiddenMenu/>
            ) : (
                <nav className='main-menu-box'>
                    <Link onClick={() => changeActiveView('home')} className={(activeView === 'home') ? 'main-menu-btn active' : 'main-menu-btn'} to='/'>{desc["main-home-btn"]}</Link>
                    <Link onClick={() => changeActiveView('about-me')} className={(activeView === 'about-me') ? 'main-menu-btn active' : 'main-menu-btn'} to='/about-me'>{desc["main-about-me-btn"]}</Link>
                    <Link onClick={() => changeActiveView('portfolio')} className={(activeView === 'portfolio') ? 'main-menu-btn active' : 'main-menu-btn'} to='/portfolio'>{desc["main-portfolio-btn"]}</Link>
                    <Link onClick={() => changeActiveView('cooperation')} className={(activeView === 'cooperation') ? 'main-menu-btn active' : 'main-menu-btn'} to='/cooperation'>{desc["main-cooperation-btn"]}</Link>
                    <Link onClick={() => changeActiveView('technologies')} className={(activeView === 'technologies') ? 'main-menu-btn active' : 'main-menu-btn'} to='/technologies'>{desc["main-technologies-btn"]}</Link>
                    <Link onClick={() => changeActiveView('contact')} className={(activeView === 'contact') ? 'main-menu-btn active' : 'main-menu-btn'} to='/contact'>{desc["main-contact-btn"]}</Link>
                    <SelectLanguage/>
                </nav>
            )}
        </>
    )
}