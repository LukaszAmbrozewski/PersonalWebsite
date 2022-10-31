import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import './MoreAboutMeBtn.css'
import {ActiveViewContext} from "../../contexts/active-view-context";

export const MoreAboutMeBtn = () => {
    const {activeView, setActiveView} = useContext(ActiveViewContext)


    const changeActiveView = (view: string) => {
        setActiveView(view)
    }

    return(
        <Link to='/about-me' onClick={() => changeActiveView('about-me')} className='more-about-me-btn'>Więcej o mnie</Link>
    )
}