import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import {Icon} from '@iconify/react';
import {useMediaQuery} from 'react-responsive'
import './MainMenu.css'
import {ShowMenuBtn} from "../ShowMenuBtn/ShowMenuBtn";
import {ActiveViewContext} from "../../contexts/active-view-context";

export const MainMenu = () => {
    const {activeView, setActiveView} = useContext(ActiveViewContext)
    const isSmallScreen = useMediaQuery({maxWidth: 1600})

    const changeActiveView = (view: string) => {
        setActiveView(view)
    }

    return (
        <>
            {isSmallScreen ? (
                <ShowMenuBtn/>
            ) : (
                <nav className='main-menu-box'>
                    <Link onClick={() => changeActiveView('home')} className={(activeView === 'home') ? 'main-menu-btn active' : 'main-menu-btn'} to='/'>home</Link>
                    <Link onClick={() => changeActiveView('about-me')} className={(activeView === 'about-me') ? 'main-menu-btn active' : 'main-menu-btn'} to='/about-me'>o mnie</Link>
                    <Link onClick={() => changeActiveView('portfolio')} className={(activeView === 'portfolio') ? 'main-menu-btn active' : 'main-menu-btn'} to='/portfolio'>portfolio</Link>
                    <Link onClick={() => changeActiveView('cooperation')} className={(activeView === 'cooperation') ? 'main-menu-btn active' : 'main-menu-btn'} to='/cooperation'>współpraca</Link>
                    <Link onClick={() => changeActiveView('technologies')} className={(activeView === 'technologies') ? 'main-menu-btn active' : 'main-menu-btn'} to='/technologies'>technologie</Link>
                    <Link onClick={() => changeActiveView('contact')} className={(activeView === 'contact') ? 'main-menu-btn active' : 'main-menu-btn'} to='/contact'>kontakt</Link>
                    <div className='main-menu-btn main-menu-lang-btn'>
                        <p>pl</p>
                        <Icon icon="akar-icons:chevron-down" />
                    </div>
                </nav>
            )}
        </>
    )
}