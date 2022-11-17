import React, {useContext} from 'react';
import '../ComponentsStyles.css';
import {LanguageContext} from "../../contexts/language-context";

export const AboutMeBox = () => {
    const {desc} = useContext(LanguageContext);

    return(
        <>
            <div className='view-box'>
                <h1 className='view-header'>O mnie</h1>
                <p>Od zawsze interesowałem się technologią i uczestniczeniem w procesie tworzenia. Programowanie sprawia mi ogromną satysfakcję, a specyfika pracy programisty to coś, co idealnie wpisuje się w moje predyspozycje. Od zawsze interesowałem się technologią i uczestniczeniem w procesie tworzenia. Programowanie sprawia mi ogromną satysfakcję, a specyfika pracy programisty to coś, co idealnie wpisuje się w moje predyspozycje. Od zawsze interesowałem się technologią i uczestniczeniem w procesie tworzenia. Programowanie sprawia mi ogromną satysfakcję, a specyfika pracy programisty to coś, co idealnie wpisuje się w moje predyspozycje. Od zawsze interesowałem się technologią i uczestniczeniem w procesie tworzenia. Programowanie sprawia mi ogromną satysfakcję, a specyfika pracy programisty to coś, co idealnie wpisuje się w moje predyspozycje. </p>
            </div>
        </>

    )
}