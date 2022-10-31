import React, {useEffect, useState} from 'react';
import './HomeBox.css';
import {MoreAboutMeBtn} from "../MoreAboutMeBtn/MoreAboutMeBtn";

const backgroundImages = ['images/home1.jpg', 'images/home2.jpg', 'images/home3.jpg', 'images/home4.jpg']

export const HomeBox = () => {
    const [backgroundImage, setBackgroundImage] = useState<number>(0);

    useEffect(() => {
        setTimeout(() => {
            (backgroundImage === 3) ? setBackgroundImage(0) : setBackgroundImage(backgroundImage + 1);
        }, 6000)
    }, [backgroundImage]);

    return (
        <div className='home-box' style={{backgroundImage: `url(${backgroundImages[backgroundImage]})`}}>
            <div className='home-text-box'>
                <p className='home-box-small-text'>Cześć!</p>
                <p className='home-box-text'>Nazywam się Łukasz, jestem programistą.</p>
                <p className='home-box-small-text'>Programowanie to moja pasja</p>
                <MoreAboutMeBtn/>
            </div>
        </div>
    )
}