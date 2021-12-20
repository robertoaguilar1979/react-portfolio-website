import styled from "styled-components";
import Button from "./Button";
import cell from "../images/cellPhone.png";
import { BabyBlue } from "../style/style";

function ContactSection() {
  return (
    <Container>
      <Title>Let’s Start the Process</Title>
      <Paragraph>
        <BabyBlue>Or If you have any questions</BabyBlue>{" "}
      </Paragraph>
      <Button />
      <CellPhone src={cell} />
    </Container>
  );
}

export default ContactSection;

const Container = styled.div`
  margin: 0 auto;
  display: flex;
  padding: 2em;
  padding-bottom: 0;
  align-items: center;
  flex-direction: column;

  @media (max-width: 410px) {
    padding: 0.5em;
    margin-top: 1.75em;
  }
`;

const Title = styled.h3`
  font-family: Poppins;
  font-size: 3.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: 90px;
  letter-spacing: 0em;
  text-align: left;

  @media (max-width: 810px) {
    font-size: 2.75rem;
    line-height: 1.4;
    text-align: center;
  }
  @media (max-width: 410px) {
    font-size: 2.75rem;
    line-height: 1.4;
    text-align: center;
  }
`;
const Paragraph = styled.p`
  font-family: Poppins;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 400;
  line-height: 36px;
  letter-spacing: 0em;
  text-align: left;

  @media (max-width: 410px) {
    font-size: 1.3rem;
  }
`;
const CellPhone = styled.img`
  @media (max-width: 411px) {
    width: 100%;
    max-width: 300px;
    height: auto;
  }
`;
