import React from "react";
import { Icon } from "@iconify/react";
import "./Logo.css";
import { HashLink } from "react-router-hash-link";

export const Logo = () => {
  return (
    <HashLink className="logo-box" smooth to="/#header">
      <Icon className="logo-icon" icon="ant-design:code-outlined" />
      <h1 className="header-title">Łukasz Ambrożewski</h1>
    </HashLink>
  );
};
