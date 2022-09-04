import "./Footer.css";
import { SiInstagram, SiLinkedin, SiGithub, SiWhatsapp } from "react-icons/si";
import React from "react";

const Footer_Spare = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="waves">
          <div className="wave" id="wave1"></div>
          <div className="wave" id="wave2"></div>
          <div className="wave" id="wave3"></div>
          <div className="wave" id="wave4"></div>
        </div>

        <h2>Let's work together!</h2>
        <h3>
          <i>How do you like your coffee?</i>
        </h3>
        <ul className="social-icons">
          <li>
            <a href="https://www.instagram.com/elia_yermakov/" target="_blank">
              <SiInstagram
                size={20}
                style={{
                  color: "white",
                  marginRight: "2rem",
                }}
              />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/elia-yermakov" target="_blank">
              <SiLinkedin
                size={20}
                style={{
                  color: "white",
                  marginRight: "2rem",
                }}
              />
            </a>
          </li>
          <li>
            <a href="https://github.com/EliaY228" target="_blank">
              <SiGithub
                size={20}
                style={{
                  color: "white",
                  marginRight: "2rem",
                }}
              />
            </a>
          </li>
          <li>
            <a href="https://wa.me/96176535036/?" target="_blank">
              <SiWhatsapp
                size={20}
                style={{
                  color: "white",
                  marginRight: "2rem",
                }}
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer_Spare;
