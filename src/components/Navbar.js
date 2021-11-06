import React from "react";
import logo from "../images/logo.svg";
import moduleName from "../style/navbar.css";

const Navbar = () => {
  return (
    <nav className="">
      <div className="logo">
        <a href="#home">
          <img src={logo} alt="logo" />
        </a>
      </div>

      <div className="navigation">
        <ul>
          <a href="#home">
            <li>Home</li>
          </a>
          <a href="#shopify">
            <li>Shopify</li>
          </a>
          <a href="#about">
            <li>About</li>
          </a>
          <a href="#contact">
            <li>Contact</li>
          </a>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
