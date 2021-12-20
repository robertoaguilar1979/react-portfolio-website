import React from "react";
import styled from "styled-components";
import image1 from "../images/myPicture2.png";
import tringle from "../images/tringle.svg";
import { BabyBlue } from "../style/style";

function AboutSection2() {
  return (
    <div>
      <Container>
        <TextContainer>
          <Title>Let me chop away at your website.</Title>
          <BodyText>
            <Img src={tringle} />
            <BabyBlue>
              I will teach you about the 5 ways to boost the selling power of
              Your Shopify Website that no one else is telling you.
            </BabyBlue>
          </BodyText>
          <BodyText>
            <Img src={tringle} />
            <BabyBlue>
              You get all my no-nonsense website recommendations.
            </BabyBlue>
          </BodyText>
          <BodyText>
            <Img src={tringle} />
            <BabyBlue>I work hard so that you don’t have too!</BabyBlue>
          </BodyText>
          <BodyText>
            <Img src={tringle} />
            <BabyBlue>
              I make everything easy so you can focus on selling your products.
            </BabyBlue>
          </BodyText>
        </TextContainer>
        <AboutImage>
          <MainImage src={image1} alt="picture of me sitting down"></MainImage>
        </AboutImage>
      </Container>
    </div>
  );
}

export default AboutSection2;

const Container = styled.div`
  display: flex;
  padding: 2em;
  justify-content: center;
  /* align-items: center; */

  @media (max-width: 810px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  @media (max-width: 410px) {
    padding: 0.5em;
    margin-top: 1.75em;
  }
`;
const AboutImage = styled.div`
  margin: auto 0;
  margin-bottom: 1.25em;

  @media (max-width: 810px) {
    order: -1;
  }
`;

const Img = styled.img`
  margin-right: 0.65em;

  @media (max-width: 410px) {
    max-width: 400px;
  }
`;
const MainImage = styled.img`
  margin-left: 1.5em;

  @media (max-width: 810px) {
    order: -1;
    margin-left: 0;
  }
  @media (max-width: 410px) {
    max-width: 300px;
    height: auto;
  }
`;

const TextContainer = styled.div`
  @media (max-width: 410px) {
    max-width: 300px;
  }
`;

const Title = styled.h3`
  max-width: 790px;
  font-size: 2.38rem;
  margin-bottom: 1em;

  @media (max-width: 410px) {
    font-size: 1.85rem;
    line-height: 1.4;
    margin-top: 1rem;
    margin-bottom: 0.75em;
    text-align: center;
  }
`;

const BodyText = styled.p`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  margin-left: 0.55em;
  font-family: Poppins;
  font-size: 1.68rem;
  font-style: normal;
  font-weight: 400;
  line-height: 40px;
  letter-spacing: 0em;
  text-align: left;
  max-width: 575px;
  margin-bottom: 1.5em;

  @media (max-width: 410px) {
    font-size: 1.35rem;
    line-height: 1.4;
  }
`;
