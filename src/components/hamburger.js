import styled from "styled-components";

function hamburger() {
  return (
    <Container>
      <HamburgerStripe></HamburgerStripe>
      <HamburgerStripe></HamburgerStripe>
      <HamburgerStripe></HamburgerStripe>
    </Container>
  );
}

export default hamburger;

const Container = styled.div`
  width: 2rem;
  height: 2rem;
  display: flex;
  justify-content: space-around;
  flex-direction: column;

  HamburgerStripe {
    width: 2rem;
    height: 0.25rem;
    border-radius: 10px;
  }
`;
