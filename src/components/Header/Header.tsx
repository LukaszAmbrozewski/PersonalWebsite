import React from 'react';
import './Header.css'
import {Logo} from "../Logo/Logo";
import {MainMenu} from "../MainMenu/MainMenu";

export const Header = () => {
    return(
        <div className='header-box'>
            <Logo/>
            <MainMenu/>
        </div>
    )
}