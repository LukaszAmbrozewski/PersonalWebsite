import {createContext} from "react";

export const ActiveViewContext = createContext({
    activeView: 'home',
    setActiveView: (view: string) => {
    },
});