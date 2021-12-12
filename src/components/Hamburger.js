import styled from "styled-components";
import hamburger from "../images/hamburger.svg";

function Hamburger() {
  return (
    <Container>
      <HamburgerIcon src={hamburger} alt="hamburger icon" />
    </Container>
  );
}

export default Hamburger;

const Container = styled.div`
  width: 2rem;
  height: 2rem;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
`;
const HamburgerIcon = styled.img`
  font-size: 2rem;
  color: #c3ccd9;
`;
