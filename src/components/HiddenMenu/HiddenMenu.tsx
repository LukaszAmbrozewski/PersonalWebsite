import React, {useContext, useState} from 'react';
import {Icon} from "@iconify/react";
import './HiddenMenu.css';
import {Link} from "react-router-dom";
import {ActiveViewContext} from "../../contexts/active-view-context";
import {LanguageContext} from "../../contexts/language-context";
import {SelectLanguage} from "../SelectLanguage/SelectLanguage";

export const HiddenMenu = () => {
    const [showOptions, setShowOptions] = useState<boolean>(false);
    const {activeView, setActiveView} = useContext(ActiveViewContext)
    const {desc} = useContext(LanguageContext);

    const show = () => {
        showOptions ? setShowOptions(false) : setShowOptions(true);
    }

    const changeActiveView = (view: string) => {
        setActiveView(view)
    }

    return (
            <>
                {showOptions ? (
                    <>
                        <button onClick={show} className='small-main-btn'>
                            <Icon icon="dashicons:menu-alt"/>
                        </button>
                        <div className='small-menu-box'>
                            <Link onClick={() => changeActiveView('home')}
                                  className={(activeView === 'home') ? 'small-menu-btn active' : 'small-menu-btn'}
                                  to='/'>{desc["main-home-btn"]}</Link>
                            <Link onClick={() => changeActiveView('about-me')}
                                  className={(activeView === 'about-me') ? 'small-menu-btn active' : 'small-menu-btn'}
                                  to='/about-me'>{desc["main-about-me-btn"]}</Link>
                            <Link onClick={() => changeActiveView('portfolio')}
                                  className={(activeView === 'portfolio') ? 'small-menu-btn active' : 'small-menu-btn'}
                                  to='/portfolio'>{desc["main-portfolio-btn"]}</Link>
                            <Link onClick={() => changeActiveView('cooperation')}
                                  className={(activeView === 'cooperation') ? 'small-menu-btn active' : 'small-menu-btn'}
                                  to='/cooperation'>{desc["main-cooperation-btn"]}</Link>
                            <Link onClick={() => changeActiveView('technologies')}
                                  className={(activeView === 'technologies') ? 'small-menu-btn active' : 'small-menu-btn'}
                                  to='/technologies'>{desc["main-technologies-btn"]}</Link>
                            <Link onClick={() => changeActiveView('contact')}
                                  className={(activeView === 'contact') ? 'small-menu-btn active' : 'small-menu-btn'}
                                  to='/contact'>{desc["main-contact-btn"]}</Link>
                            <SelectLanguage/>
                        </div>
                    </>
                ) : (
                    <button onClick={show} className='small-main-btn'>
                        <Icon icon="dashicons:menu-alt"/>
                    </button>
                )}
            </>


    )
}