import React from 'react';
import { Icon } from '@iconify/react';
import './Footer.css';

export const Footer = () => {
    return(
        <div className='footer-box'>
            <div className='footer-btn-box'>
                <div className='footer-btn' onClick={() => window.location.href = "https://github.com/lukaszambrozewski"}>
                    <Icon icon="akar-icons:github-fill" />
                </div>
                <div className='footer-btn' onClick={() => window.location.href = "https://www.linkedin.com/in/%C5%82ukasz-ambro%C5%BCewski-943a01222/"}>
                    <Icon icon="akar-icons:linkedin-fill" />
                </div>
            </div>
            <p className='footer-text'>Copyright (c) Łukasz Ambrożewski</p>
        </div>
    )
}