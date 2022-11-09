import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./BackgroundsImageGallery.css";

import { Autoplay, Pagination, Navigation } from "swiper";

export default function BackgroundsImageGallery() {
    return (
        <>
            <Swiper
                spaceBetween={0}
                loop={true}
                centeredSlides={true}

                speed={2000}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: false,
                }}
                navigation={false}
                modules={[ Autoplay, Pagination, Navigation]}
                color='red'
            >
                <SwiperSlide>
                    <img className='one-photo' src='images/home1.jpg' alt="Slide image 1"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='one-photo' src='images/home2.jpg' alt="Slide image 2"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='one-photo' src='images/home3.jpg' alt="Slide image 3"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='one-photo' src='images/home4.jpg' alt="Slide image 4"/>
                </SwiperSlide>

            </Swiper>
        </>
    );
}