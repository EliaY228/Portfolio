import "./AboutContent.css";
import { Link } from "react-router-dom";
import React from "react";
import Img1 from "../Assets/Profile_Img.jpg";

const AboutContent = () => {
  return (
    <div className="About">
      <div className="AboutContent">
        <h1>Who am I?</h1>
      </div>
      <div className="image">
        <img src={Img1} className="img" alt="profile_picture" />
      </div>
      <div className="AboutContent_2">
        <p>
          <i>I am a Programmer / Developer. </i>
        </p>
        <p>
          I hold a bachelor's degree in mechatronics and have been working on my
          programming skills ever since!
        </p>
        <Link to="/Contact">
          <button className="btn btn-about">
            <i>Contact Me</i>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AboutContent;
