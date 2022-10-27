import React from 'react';
import { Route, Routes } from "react-router-dom";
import './App.css';
import {Home} from "./views/Home/Home";
import {Contact} from "./views/Contact/Contact";
import {Portfolio} from "./views/Portfolio/Portfolio";
import {Cooperation} from "./views/Cooperation/Cooperation";
import {Technologies} from "./views/ Technologies/Technologies";

export const App = () => {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element= {<Home />}/>
                <Route path="/contact" element= {<Contact />}/>
                <Route path="/about-me" element= {<Contact />}/>
                <Route path="/portfolio" element= {<Portfolio />}/>
                <Route path="/cooperation" element= {<Cooperation />}/>
                <Route path="/technologies" element= {<Technologies />}/>
            </Routes>
        </div>
    );
}