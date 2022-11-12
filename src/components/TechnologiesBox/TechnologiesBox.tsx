import React, {useContext} from 'react';
import {Icon} from '@iconify/react';
import './TechnologiesBox.css';
import {LanguageContext} from "../../contexts/language-context";

export const TechnologiesBox = () => {
    const {desc} = useContext(LanguageContext);

    return (
        <div className='technologies-box'>
            <h1 className='technologies-header'>{desc["technologies-header"]}</h1>
            <div className='technologies-list-box'>
                <div className='technologies-list'>
                    <p className='technologies-text'>
                        <Icon className='technologies-icon' icon="akar-icons:javascript-fill"/> JavaScript
                    </p>
                    <p className='technologies-text'>
                        <Icon className='technologies-icon' icon="akar-icons:typescript-fill"/> TypeScript
                    </p>
                    <p className='technologies-text'>
                        <Icon className='technologies-icon' icon="akar-icons:react-fill"/> React
                    </p>
                    <p className='technologies-text'>
                        <Icon className='technologies-icon' icon="file-icons:nestjs"/> NestJS
                    </p>
                    <p className='technologies-text'>
                        <Icon className='technologies-icon' icon="simple-icons:express"/> Express.js
                    </p>
                </div>

                <div className='technologies-list'>
                    <p className='technologies-text'>
                        <Icon className='technologies-icon' icon="akar-icons:css-fill"/> CSS
                    </p>
                    <p className='technologies-text'>
                        <Icon className='technologies-icon' icon="akar-icons:html-fill"/> HTML
                    </p>
                    <p className='technologies-text'>
                        <Icon className='technologies-icon' icon="cib:mysql"/> MySQL
                    </p>
                    <p className='technologies-text'>
                        <img className='technologies-icon' src={"images/typeorm-seeklogo.com.svg"} alt=""/> TypeORM
                    </p>
                    <p className='technologies-text'>
                        <Icon className='technologies-icon' icon="bxl:mongodb"/> MongoDB
                    </p>
                </div>
            </div>
        </div>
    )
}