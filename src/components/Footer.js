import styled from "styled-components";

function Footer() {
  return (
    <Container>
      <BodyText>RobertsWebCreations &copy; 2021 All Rights Reserved</BodyText>
    </Container>
  );
}

export default Footer;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2.75em;
  /* background-color: rgb(13, 17, 24); */
`;

const BodyText = styled.h3`
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 27px;
  letter-spacing: 0em;
  text-align: left;

  @media (max-width: 410px) {
    text-align: center;
  }
`;
