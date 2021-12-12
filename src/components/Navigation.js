import styled from "styled-components";
import hamburger from "./Hamburger";

function Navigation() {
  return (
    <NavLinks>
      <Ul>
        <Li>Home</Li>
        <Li>Shopify</Li>
        <Li>About</Li>
        <Li>Contact</Li>
      </Ul>
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

const Li = styled.li`
  margin-right: 2em;
`;
