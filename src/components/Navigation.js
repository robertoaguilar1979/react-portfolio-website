import styled from "styled-components";
import { BrowserRouter as Router, Link } from "react-router-dom";
import hamburger from "../images/bars.svg";
import { useState } from "react";

function Navigation() {
  const [openHamburger, setOpenHamburger] = useState(false);

  return (
    <NavLinks>
      <button onClick={() => setOpenHamburger(!openHamburger)}>&times;</button>

      <IconWrapper onClick={() => setOpenHamburger(!openHamburger)}>
        <HamburgerIcon src={hamburger} alt="hamburger icon" />
      </IconWrapper>

      <Router>
        <Ul>
          <Li to="/">Home</Li>
          <Li to="/shopify">Shopify</Li>
          <Li to="/about">About</Li>
          <Li to="/contact">Contact</Li>
        </Ul>
      </Router>
    </NavLinks>
  );
}

export default Navigation;

const NavLinks = styled.div`
  @media (min-width: 811px) {
    button {
      display: none;
    }
  }

  @media (max-width: 810px) {
    display: ${({ openHamburger }) => (openHamburger ? "none" : "block")};

    button {
      border: 0;
      padding: 0.05em;
      background: transparent;
      font-size: 4.5rem;
      color: #c3ccd9;
      z-index: 100;
      position: fixed;
      top: 15px;
      right: 85px;
      cursor: pointer;
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

  @media (max-width: 810px) {
    height: 100vh;
    width: 100vw;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
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
    z-index: 11;
    line-height: 1.2;
    font-size: 1.75rem;
    padding: 4em;
  }
`;

const Li = styled(Link)`
  margin-right: 2em;
`;

const IconWrapper = styled.button`
  height: 42;
  width: 42;
  border: 0;
  background: transparent;
  cursor: pointer;
`;
const HamburgerIcon = styled.img`
  height: 29px;
  width: 29px;
  @media (min-width: 812px) {
    display: none;
  }
`;
