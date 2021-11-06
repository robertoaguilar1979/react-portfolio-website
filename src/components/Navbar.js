import React from "react";

const Navbar = () => {
  return (
    <nav className="">
      <div className="navWrapper">
        <div className="logo"></div>

        <div className="navigation">
          <ul>
            <a href="">
              <li>Home</li>
            </a>
            <a href="">
              <li>Shopify</li>
            </a>
            <a href="">
              <li>About</li>
            </a>
            <a href="">
              <li>Contact</li>
            </a>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
