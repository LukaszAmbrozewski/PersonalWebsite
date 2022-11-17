import React from 'react';
import './MainBtn.css'
import {Link} from "react-router-dom";

interface Props {
    text: string;
    to?: string;
    onClick?: () => void;
}

export const MainBtn = (props: Props) => {
    return(
        <>
            {props.to ? (
                <Link to={props.to} className='main-btn'>{props.text}</Link>
            ) : (
                <button onClick={props.onClick} className='main-btn'>{props.text}</button>
            )}
        </>

    )
}