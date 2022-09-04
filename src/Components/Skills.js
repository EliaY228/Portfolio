import React from "react";
import "./Skills.css";
import c_icon from "../Assets/c.png";
import c_sharp_icon from "../Assets/csharp.png";
import html from "../Assets/html5.png";
import css from "../Assets/css3.png";
import react from "../Assets/React.png";
import python from "../Assets/Python.png";
import javascript from "../Assets/JavaScript.png";
import matlab from "../Assets/matlab.png";
import visual_studio from "../Assets/visual_studio.png";
import visual_studio_code from "../Assets/visual_studio_code.png";
import plc from "../Assets/plc2.png";
import hmi from "../Assets/hmi.png";

const Skills = () => {
  return (
    <div className="skills">
      <h1>Here are some of my programming skills:</h1>
      <div className="skills-container">
        <div className="left">
          <h3>Technical Softwares/Programs</h3>
          <ul>
            <li>
              <img src={matlab} alt="" />
              <p>Matlab</p>
            </li>
            <li>
              <img src={visual_studio} alt="" />
              <p>Visual Studio</p>
            </li>
            <li>
              <img src={visual_studio_code} alt="" />
              <p>Visual Studio Code</p>
            </li>
            <li>
              <img src={plc} alt="" />
              <p>PLC</p>
            </li>
            <li>
              <img src={hmi} alt="" />
              <p>SCADA / HMI</p>
            </li>
          </ul>
        </div>
        <div className="right">
          <h3>Programming Languages</h3>
          <ul>
            <li>
              <img src={c_icon} alt="" />
              <p>C</p>
            </li>
            <li>
              <img src={c_sharp_icon} alt="" />
              <p>C#</p>
            </li>
            <li>
              <img src={python} alt="" />
              <p>python</p>
            </li>
            <li>
              <img src={html} alt="" />
              <p>HTML</p>
            </li>
            <li>
              <img src={css} alt="" />
              <p>CSS</p>
            </li>
            <li>
              <img src={javascript} alt="" />
              <p>javascript</p>
            </li>
            <li>
              <img src={react} alt="" />
              <p>React</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
