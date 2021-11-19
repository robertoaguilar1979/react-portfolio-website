import React from "react";
import logo from "../images/logo.svg";
import styled from "styled-components";
import Navigation from "./Navigation";

const Navbar = () => {
  return (
    <>
      <NavbarContainer>
        <LogoDiv className="logo">
          <Logo src={logo} alt="logo" />
        </LogoDiv>

        <Navigation />
      </NavbarContainer>
    </>
  );
};

export default Navbar;

const NavbarContainer = styled.nav`
  max-width: 1440px;
  margin: 0 auto;
  font-family: "Roboto", sans-serif;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #c3ccd9;
`;

const LogoDiv = styled.div``;

const Logo = styled.img``;
