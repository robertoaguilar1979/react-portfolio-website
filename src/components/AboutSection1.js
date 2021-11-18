import React from "react";
import styled from "styled-components";
import image1 from "../images/myPicture.png";
import left from "../images/leftQuotes.svg";
import right from "../images/rightQuotes.svg";
import { BabyBlue, Green } from "../style/style";

function AboutSection1() {
  return (
    <div>
      <Container>
        <AboutImage>
          <Img src={image1} alt="picture of me sitting down"></Img>
        </AboutImage>
        <TextContainer>
          <Title>I will support you and help you get Real Results.</Title>
          <BodyText>
            <LeftQuotes src={left} alt="left quotes" />
            <BabyBlue>
              Why do I have this passion to help you build a shopify website? My
              mission is to assist you in improving your website by leveraging
              online tools that are made to make you money!<Break></Break>I want
              to give you a wonderful service at an affordable price.
              <Break></Break>I will guide you through any process and give you
              my support every step of the way.
            </BabyBlue>
            <RightQuotes src={right} alt="right quotes" />
          </BodyText>
        </TextContainer>
      </Container>
    </div>
  );
}

export default AboutSection1;

const Break = styled.br`
  margin-bottom: 1em;
`;
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
`;
const AboutImage = styled.div`
  margin: auto 0;
  @media (max-width: 810px) {
    order: -1;
  }
`;

const Img = styled.img`
  margin-right: 1.75em;
  @media (max-width: 410px) {
    max-width: 400px;
  }
`;

const TextContainer = styled.div``;

const Title = styled.h3`
  max-width: 790px;
  font-size: 2.38rem;
  margin-bottom: 1em;
  @media (max-width: 410px) {
    font-size: 1.85rem;
    line-height: 1.4;
    margin-top: 1rem;
    margin-bottom: 0.75em;
  }
`;

const BodyText = styled.p`
  margin-left: 0.55em;

  font-family: Poppins;
  font-size: 1.68rem;
  font-style: normal;
  font-weight: 400;
  line-height: 40px;
  letter-spacing: 0em;
  text-align: left;
  max-width: 719px;
  @media (max-width: 410px) {
    font-size: 1.55rem;
    line-height: 1.4;
  }
`;

const LeftQuotes = styled.img`
  width: 28px;
  text-align: center;
  margin-right: 0.35em;
  margin-bottom: 0.35em;
`;

const RightQuotes = styled.img`
  width: 28px;
  text-align: center;
  margin-left: 0.35em;
  margin-top: 0.35em;
`;
