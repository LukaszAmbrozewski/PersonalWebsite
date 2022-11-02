import React, {useEffect, useState} from 'react';
import {Route, Routes} from "react-router-dom";
import './App.css';
import {Home} from "./views/Home/Home";
import {Contact} from "./views/Contact/Contact";
import {Portfolio} from "./views/Portfolio/Portfolio";
import {Cooperation} from "./views/Cooperation/Cooperation";
import {Technologies} from "./views/Technologies/Technologies";
import {AboutMe} from "./views/AboutMe/AboutMe";
import {ActiveViewContext} from "./contexts/active-view-context";
import {LanguageContext} from "./contexts/language-context";
import * as pl from './lang/pl.json'
import * as de from './lang/de.json'
import * as en from './lang/en.json'

export const App = () => {
    const [activeView, setActiveView] = useState('home');
    const [activeLanguage, setActiveLanguage] = useState('pl');
    const [desc, setDesc] = useState(pl);

    useEffect(() => {
        if(activeLanguage === 'pl'){
            setDesc(pl)
        } else if (activeLanguage === 'en'){
            setDesc(en)
        } else if (activeLanguage === 'de'){
            setDesc(de)
        }
    },[activeLanguage])

    return (
        <ActiveViewContext.Provider value={{activeView, setActiveView}}>
            <LanguageContext.Provider value={{desc, activeLanguage, setActiveLanguage}}>
                <div className="App">
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/contact" element={<Contact/>}/>
                        <Route path="/about-me" element={<AboutMe/>}/>
                        <Route path="/portfolio" element={<Portfolio/>}/>
                        <Route path="/cooperation" element={<Cooperation/>}/>
                        <Route path="/technologies" element={<Technologies/>}/>
                    </Routes>
                </div>
            </LanguageContext.Provider>
        </ActiveViewContext.Provider>
    );
}