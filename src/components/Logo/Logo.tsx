import React from 'react';
import { Icon } from '@iconify/react';
import './Logo.css'

export const Logo = () => {
    return(
        <div className='logo-box'>
            <Icon className='logo-icon'  icon="ant-design:code-outlined" />
            <h1>Łukasz Ambrożewski</h1>
        </div>
    )
}