import styled from "styled-components";
import hamburger from "../images/hamburger.svg";

function Hamburger() {
  return (
    <IconWrapper>
      <HamburgerIcon src={hamburger} alt="hamburger icon" />
    </IconWrapper>
  );
}

export default Hamburger;
const IconWrapper = styled.div`
  height: 42;
  width: 42;
  fill: #c3ccd9;
  cursor: pointer;
`;
const HamburgerIcon = styled.svg`
  height: 42px;
  width: 42px;
  fill: #c3ccd9;
`;
