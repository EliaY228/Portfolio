import "./Navbar.css";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [Click, setClick] = useState(false);
  const handleClick = () => setClick(!Click);

  const [color, setcolor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 100) {
      setcolor(true);
    } else {
      setcolor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <div className={color ? "header header-bg" : "header"}>
      <nav className="navbar">
        <ul className={Click ? "nav active" : "nav"}>
          <li>
            <Link to="/">
              <i>Home</i>
            </Link>
          </li>
          <li>
            <Link to="/About">
              <i>About</i>
            </Link>
          </li>
          <li>
            <Link to="/Project">
              <i>Projects</i>
            </Link>
          </li>
          <li>
            <Link to="/Contact">
              <i>Contact</i>
            </Link>
          </li>
        </ul>
      </nav>
      <div className="hamburger" onClick={handleClick}>
        {Click ? (
          <FaTimes
            size={26}
            style={{
              color: "white",
            }}
          />
        ) : (
          <FaBars
            size={26}
            style={{
              color: "white",
            }}
          />
        )}
      </div>
    </div>
  );
};

export default Navbar;
