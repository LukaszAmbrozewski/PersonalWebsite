import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./views/Home/Home";
import { LanguageContext } from "./contexts/language-context";
import * as pl from "./lang/pl.json";
import * as de from "./lang/de.json";
import * as en from "./lang/en.json";

export const App = () => {
  const [activeLanguage, setActiveLanguage] = useState("pl");
  const [desc, setDesc] = useState(pl);

  useEffect(() => {
    if (activeLanguage === "pl") {
      setDesc(pl);
    } else if (activeLanguage === "en") {
      setDesc(en);
    } else if (activeLanguage === "de") {
      setDesc(de);
    }
  }, [activeLanguage]);

  return (
    <LanguageContext.Provider
      value={{ desc, activeLanguage, setActiveLanguage }}
    >
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </LanguageContext.Provider>
  );
};
