import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./BackgroundsImageGallery.css";

import { Autoplay, Navigation } from "swiper";
import {useMediaQuery} from "react-responsive";

export default function BackgroundsImageGallery() {
    const smallBackground = useMediaQuery({ maxWidth: 850 })

    return (
        <>
            <Swiper
                spaceBetween={0}
                loop={true}
                centeredSlides={true}

                speed={500}
                autoplay={{
                    delay: 6000,
                    disableOnInteraction: false,
                }}
                navigation={false}
                modules={[ Autoplay, Navigation]}
                color='red'
            >
                <SwiperSlide>
                    <img className='one-photo' src={smallBackground ? 'images/home1-mobile.jpg' : 'images/home1.jpg'} alt="Slide 1"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='one-photo' src={smallBackground ? 'images/home2-mobile.jpg' : 'images/home2.jpg'} alt="Slide 2"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='one-photo' src={smallBackground ? 'images/home3-mobile.jpg' : 'images/home3.jpg'} alt="Slide 3"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='one-photo' src={smallBackground ? 'images/home4-mobile.jpg' : 'images/home4.jpg'} alt="Slide 4"/>
                </SwiperSlide>
            </Swiper>
        </>
    );
}