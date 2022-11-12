import React, {useContext} from 'react';
import {LanguageContext} from "../../contexts/language-context";
import {Icon} from '@iconify/react';
import './ContactBox.css'

export const ContactBox = () => {
    const {desc} = useContext(LanguageContext);

    return (
        <div className='contact-box'>
            <h1 className='contact-header-text'>{desc["contact-header"]}</h1>
            <a className='contact-data' href="mailto:lukaszambrozewski@gmail.com">
                <Icon icon="ant-design:mail-twotone" className='contact-icon'/>
                <p>{desc["contact-email"]}</p>
            </a>
            <a className='contact-data' href="tel:+48987654321">
                <Icon icon="akar-icons:phone" className='contact-icon'/>
                <p>{desc["contact-phone-number"]}</p>
            </a>
        </div>
    )
}