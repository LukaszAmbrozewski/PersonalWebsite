import React from 'react';
import { Icon } from '@iconify/react';
import './Footer.css';

export const Footer = () => {
    return(
        <div className='footer-box'>
            <div className='footer-btn-box'>
                <div className='footer-btn'>
                    <Icon icon="akar-icons:github-fill" />
                </div>
                <div className='footer-btn'>
                    <Icon icon="akar-icons:linkedin-fill" />
                </div>
            </div>
            <p className='footer-text'>Copyright (c) Łukasz Ambrożewski</p>
        </div>
    )
}