import {createContext} from "react";
import * as pl from '../lang/pl.json'

export const LanguageContext = createContext({
    activeLanguage: 'pl',
    setActiveLanguage: (language: string) => {},
    desc: pl,
});