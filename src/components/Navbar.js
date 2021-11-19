import React from "react";
import logo from "../images/logo.svg";
import styled from "styled-components";

const Navbar = () => {
  return (
    <>
      <NavbarContainer>
        <LogoDiv className="logo">
          <Logo src={logo} alt="logo" />
        </LogoDiv>

        <Navigation>
          <Ul>
            <Li>Home</Li>
            <Li>Shopify</Li>
            <Li>About</Li>
            <Li>Contact</Li>
          </Ul>
        </Navigation>
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

const Navigation = styled.div``;

const Ul = styled.ul`
  display: flex;
  justify-content: space-around;
  list-style: none;
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 1.13rem;
  line-height: 21px;
`;

const Li = styled.li`
  margin-right: 2em;
`;
