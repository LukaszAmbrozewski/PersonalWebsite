import React, {useContext, useEffect, useState} from 'react';
import {MoreAboutMeBtn} from "../MoreAboutMeBtn/MoreAboutMeBtn";
import {LanguageContext} from "../../contexts/language-context";
import '../ComponentsStyles.css';
import './HomeBox.css';
import BackgroundsImageGallery from "../BackgroundsImageGallery/BackgroundsImageGallery";

export const HomeBox = () => {
    // const [currentBackgroundImage, setCurrentBackgroundImage] = useState<number>(0);
    // const [backgroundImages, setBackgroundImages] = useState<string[]>(['images/home1.jpg', 'images/home2.jpg', 'images/home3.jpg', 'images/home4.jpg']);
    const {desc} = useContext(LanguageContext);
    //
    // useEffect(() => {
    //     const urls = [...backgroundImages];
    //     urls.forEach((image) => {
    //         const newImage = new Image();
    //         newImage.src = image;
    //     });
    //     setBackgroundImages(urls);
    // }, [])
    //
    // useEffect(() => {
    //     setTimeout(() => {
    //         (currentBackgroundImage === 3) ? setCurrentBackgroundImage(0) : setCurrentBackgroundImage(currentBackgroundImage + 1);
    //     }, 6000)
    // }, [currentBackgroundImage]);

    return (
        <>
            <div
                className='home-box'
                // style={{backgroundImage: `url(${backgroundImages[currentBackgroundImage]})`}}
            >
                <BackgroundsImageGallery/>
                <div className='home-text-box'>
                    <p className='home-box-small-text'>{desc["main-first-home-box-text"]}</p>
                    <p className='home-box-text'>{desc["main-second-home-box-text"]}</p>
                    <p className='home-box-small-text'>{desc["main-third-home-box-text"]}</p>
                    <MoreAboutMeBtn/>
                </div>
            </div>
        </>
    )
}