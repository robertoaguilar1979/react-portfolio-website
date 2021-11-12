import React from "react";
import styled from "styled-components";
import image from "../images/section2.png";
import { BabyBlue } from "../style/style";

function Section2() {
  return (
    <BackGround>
      <Section>
        <MainText>
          Reach More Customers by Putting Your Business Online.
        </MainText>
        <FirstParagraph>
          Traditional store selling is dying a slow agonizing death.{" "}
        </FirstParagraph>
        <SecondParagraph>
          Going online is not just a trend it’s GUARANTEED to continue into the
          future.{" "}
        </SecondParagraph>
      </Section>
    </BackGround>
  );
}

export default Section2;

const BackGround = styled.div`
  background: url(${image});
  background-size: cover;
  background-position: center;
  background-blend-mode: soft-light;
`;

const Section = styled.section`
  max-width: 1440px;
  margin: 0 auto;
  padding: 6em;
`;

const MainText = styled.h2`
  font-family: Poppins;
  font-size: 3.125rem;
  font-style: normal;
  font-weight: 700;
  line-height: 75px;
  letter-spacing: 0em;
  text-align: left;
`;

const FirstParagraph = styled(BabyBlue)`
  font-family: Poppins;
  font-size: 36px;
  font-style: normal;
  font-weight: 400;
  line-height: 54px;
  letter-spacing: 0em;
  text-align: left;
`;
const SecondParagraph = styled.p`
  font-family: Poppins;
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: 45px;
  letter-spacing: 0em;
  text-align: left;
`;