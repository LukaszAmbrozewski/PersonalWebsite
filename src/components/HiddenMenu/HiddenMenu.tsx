import React, {useContext, useState} from 'react';
import {Icon} from "@iconify/react";
import './HiddenMenu.css';
import {LanguageContext} from "../../contexts/language-context";
import {SelectLanguage} from "../SelectLanguage/SelectLanguage";
import {HashLink} from "react-router-hash-link";

export const HiddenMenu = () => {
    const [showOptions, setShowOptions] = useState<boolean>(false);
    const {desc} = useContext(LanguageContext);

    const show = () => {
        showOptions ? setShowOptions(false) : setShowOptions(true);
    }

    return (
            <>
                {showOptions ? (
                    <>
                        <button onClick={show} className='small-main-btn'>
                            <Icon icon="dashicons:menu-alt"/>
                        </button>
                        <div className='small-menu-box'>
                            <HashLink onClick={() => show()} className='small-menu-btn' smooth to="/#header">{desc["main-home-btn"]}</HashLink>
                            <HashLink onClick={() => show()} className='small-menu-btn' smooth to="/#about-me">{desc["main-about-me-btn"]}</HashLink>
                            <HashLink onClick={() => show()} className='small-menu-btn' smooth to="/#portfolio">{desc["main-portfolio-btn"]}</HashLink>
                            <HashLink onClick={() => show()} className='small-menu-btn' smooth to="/#technologies">{desc["main-technologies-btn"]}</HashLink>
                            <HashLink onClick={() => show()} className='small-menu-btn' smooth to="/#cooperation">{desc["main-cooperation-btn"]}</HashLink>
                            <HashLink onClick={() => show()} className='small-menu-btn' smooth to="/#contact">{desc["main-contact-btn"]}</HashLink>
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