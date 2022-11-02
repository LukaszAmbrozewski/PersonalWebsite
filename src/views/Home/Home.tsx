import React from 'react';
import {Header} from "../../components/Header/Header";
import {HomeBox} from "../../components/HomeBox/HomeBox";
import {Footer} from "../../components/Footer/Footer";

export const Home = () => {
    return(
        <div>
            <Header/>
            <HomeBox/>
            <Footer/>
        </div>
    )
}