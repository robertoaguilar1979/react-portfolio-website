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
const IconWrapper = styled.div`
  height: 42;
  width: 42;
  fill: #c3ccd9;
  cursor: pointer;
`;
const HamburgerIcon = styled.img`
  height: 29px;
  width: 29px;
`;
