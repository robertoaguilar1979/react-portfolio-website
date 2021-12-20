import styled from "styled-components";
import { BrowserRouter as Router, Link } from "react-router-dom";
import hamburger from "../images/bars.svg";
import { useState } from "react";

function Navigation() {
  const [openHamburger, setOpenHamburger] = useState(false);

  return (
    <NavLinks>
      <button onClick={() => setOpenHamburger(true)}>
        <img src={hamburger} alt="hamburger icon" />
      </button>

      <Router>
        <Ul className={openHamburger ? "display" : "notDisplay"}>
          <button
            onClick={() => setOpenHamburger(false)}
            className={openHamburger ? "timesDisplay" : "timesNotDisplay"}
          >
            &times;
          </button>
          <Li to="/" onClick={() => setOpenHamburger(false)}>
            Home
          </Li>
          <Li to="/shopify" onClick={() => setOpenHamburger(false)}>
            Shopify
          </Li>
          <Li to="/about" onClick={() => setOpenHamburger(false)}>
            About
          </Li>
          <Li to="/contact" onClick={() => setOpenHamburger(false)}>
            Contact
          </Li>
        </Ul>
      </Router>
    </NavLinks>
  );
}

export default Navigation;

const NavLinks = styled.div`
  button {
    height: 42;
    width: 42;
    border: 0;
    background: transparent;
    cursor: pointer;
    z-index: 22;
  }
  img {
    height: 29px;
    width: 29px;
    @media (min-width: 811px) {
      display: none;
      z-index: 0;
    }
  }
`;

const Ul = styled.ul`
  display: flex;
  justify-content: space-around;
  list-style: none;
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 1.13rem;
  line-height: 21px;

  @media (max-width: 811px) {
    height: 100vh;
    width: 100vw;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      180deg,
      #0d1117 0%,
      #1b255e 53.12%,
      #0d1117 96.35%
    );
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    gap: 0.25em;
    z-index: 100;
    line-height: 1.2;
    font-size: 1.75rem;
    padding: 4em;

    button {
      border: 0;
      padding: 0.05em;
      background: transparent;
      font-size: 4.5rem;
      color: #c3ccd9;
      z-index: 100;
      position: fixed;
      top: 5px;
      right: 25px;
      cursor: pointer;

      @media (min-width: 811px) {
        display: none;
      }
    }
  }
`;

const Li = styled(Link)`
  margin-right: 2em;

  @media (max-width: 811px) {
    margin-right: 0;
  }
`;
