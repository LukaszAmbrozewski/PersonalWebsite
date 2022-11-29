import React, { useContext } from "react";
import { LanguageContext } from "../../contexts/language-context";
import { Icon } from "@iconify/react";
import "./ContactBox.css";

export const ContactBox = () => {
  const { desc } = useContext(LanguageContext);

  return (
    <>
      <div className="contact-box">
        <div className="contact-one-section">
          <h2 className="contact-section-header">{desc["contact-header"]}</h2>
          <a className="contact-data" href="tel:+48733894571">
            <Icon icon="akar-icons:phone" className="contact-icon" />
            <p>{desc["contact-phone-number"]}</p>
          </a>
          <a className="contact-data" href="mailto:lukaszambrozewski@gmail.com">
            <Icon icon="ant-design:mail-twotone" className="contact-icon" />
            {desc["contact-email"]}
          </a>
        </div>
        <div className="contact-one-section">
          <h2 className="contact-section-header">
            {desc["contact-social-header"]}
          </h2>
          <div
            className="contact-data"
            onClick={() =>
              (window.location.href = "https://github.com/lukaszambrozewski")
            }
          >
            <Icon className="contact-icon" icon="akar-icons:github-fill" />
            GitHub
          </div>
          <div
            className="contact-data"
            onClick={() =>
              (window.location.href =
                "https://www.linkedin.com/in/%C5%82ukasz-ambro%C5%BCewski-943a01222/")
            }
          >
            <Icon className="contact-icon" icon="bi:linkedin" />
            Linkedin
          </div>
        </div>
      </div>
      <footer className="footer-section">
        Copyright (c) Łukasz Ambrożewski 2022
      </footer>
    </>
  );
};
