import React from "react";
import "./Header.css";
import { Logo } from "../Logo/Logo";
import { MainMenu } from "../MainMenu/MainMenu";
import { useMediaQuery } from "react-responsive";
import { HeaderWithHiddenMenu } from "../HeaderWithHiddenMenu/HeaderWithHiddenMenu";

export const Header = () => {
  const isSmallScreen = useMediaQuery({ maxWidth: 1500 });

  return (
    <>
      {isSmallScreen ? (
        <HeaderWithHiddenMenu />
      ) : (
        <div className="header-box">
          <Logo />
          <MainMenu />
        </div>
      )}
    </>
  );
};
