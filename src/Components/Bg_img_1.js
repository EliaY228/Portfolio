import "./Bg_img_1.css";
import Img1 from "../Assets/Bg_img.png";
import React from "react";
import { Link } from "react-router-dom";
import { FaDownload } from "react-icons/fa";
import Resume from "../Documents/Resume_Elia_Yermakov-Programming.pdf";

const Bg_img_1 = () => {
  return (
    <div className="bg_img_1">
      <div className="mask">
        <img className="img_bg1" src={Img1} alt="Bg_img_1" />
      </div>
      <div className="content">
        <p>
          <i>Hi, I am Elia</i>
        </p>
        <h1>
          <i>Programmer / Developer</i>
        </h1>
        <div>
          <Link to={Resume} className="btn" target="_blank" download="Resume">
            Resume <FaDownload className="download-icon" />
          </Link>
          <Link to="Contact" className="btn btn-light">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Bg_img_1;
