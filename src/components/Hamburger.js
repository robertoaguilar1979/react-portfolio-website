import styled from "styled-components";
import hamburger from "../images/bars.svg";

function Hamburger() {
  return (
    <IconWrapper>
      <HamburgerIcon src={hamburger} alt="hamburger icon" />
    </IconWrapper>
  );
}

export default Hamburger;
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
