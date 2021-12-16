import styled from "styled-components";
import hamburger from "./Hamburger";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Navigation() {
  return (
    <NavLinks>
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

const NavLinks = styled.div``;

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

const Li = styled(Link)`
  margin-right: 2em;
`;
