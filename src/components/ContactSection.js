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
  align-items: center;
  flex-direction: column;
`;

const Title = styled.h3`
  font-family: Poppins;
  font-size: 60px;
  font-style: normal;
  font-weight: 400;
  line-height: 90px;
  letter-spacing: 0em;
  text-align: left;
`;
const Paragraph = styled.p`grid-template-columns
font-family: Poppins;
font-size: 24px;
font-style: normal;
font-weight: 400;
line-height: 36px;
letter-spacing: 0em;
text-align: left;

`;
const CellPhone = styled.img``;
