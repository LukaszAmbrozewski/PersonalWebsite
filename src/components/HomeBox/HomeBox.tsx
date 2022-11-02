import React, {useContext, useEffect, useState} from 'react';
import './HomeBox.css';
import {MoreAboutMeBtn} from "../MoreAboutMeBtn/MoreAboutMeBtn";
import {LanguageContext} from "../../contexts/language-context";

const backgroundImages = ['images/home1.jpg', 'images/home2.jpg', 'images/home3.jpg', 'images/home4.jpg']

export const HomeBox = () => {
    const [backgroundImage, setBackgroundImage] = useState<number>(0);
    const {desc} = useContext(LanguageContext);

    useEffect(() => {
        setTimeout(() => {
            (backgroundImage === 3) ? setBackgroundImage(0) : setBackgroundImage(backgroundImage + 1);
        }, 6000)
    }, [backgroundImage]);

    return (
        <div className='home-box' style={{backgroundImage: `url(${backgroundImages[backgroundImage]})`}}>
            <div className='home-text-box'>
                <p className='home-box-small-text'>{desc["main-first-home-box-text"]}</p>
                <p className='home-box-text'>{desc["main-second-home-box-text"]}</p>
                <p className='home-box-small-text'>{desc["main-third-home-box-text"]}</p>
                <MoreAboutMeBtn/>
            </div>
        </div>
    )
}