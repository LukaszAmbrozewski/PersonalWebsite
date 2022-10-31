import React, {useContext, useState} from 'react';
import {Icon} from "@iconify/react";
import './ShowMenuBtn.css';
import {Link} from "react-router-dom";
import {ActiveViewContext} from "../../contexts/active-view-context";

export const ShowMenuBtn = () => {
    const [showOptions, setShowOptions] = useState<boolean>(false);
    const {activeView, setActiveView} = useContext(ActiveViewContext)

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
                                  to='/'>home</Link>
                            <Link onClick={() => changeActiveView('about-me')}
                                  className={(activeView === 'about-me') ? 'small-menu-btn active' : 'small-menu-btn'}
                                  to='/about-me'>o mnie</Link>
                            <Link onClick={() => changeActiveView('portfolio')}
                                  className={(activeView === 'portfolio') ? 'small-menu-btn active' : 'small-menu-btn'}
                                  to='/portfolio'>portfolio</Link>
                            <Link onClick={() => changeActiveView('cooperation')}
                                  className={(activeView === 'cooperation') ? 'small-menu-btn active' : 'small-menu-btn'}
                                  to='/cooperation'>współpraca</Link>
                            <Link onClick={() => changeActiveView('technologies')}
                                  className={(activeView === 'technologies') ? 'small-menu-btn active' : 'small-menu-btn'}
                                  to='/technologies'>technologie</Link>
                            <Link onClick={() => changeActiveView('contact')}
                                  className={(activeView === 'contact') ? 'small-menu-btn active' : 'small-menu-btn'}
                                  to='/contact'>kontakt</Link>
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