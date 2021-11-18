import React from "react";
import styled from "styled-components";
import { Green, BabyBlue } from "../style/style";
import section3 from "../images/section3.svg";

function ShopifyDiv({ title, body, image, imgTitle }) {
  return (
    <Div>
      <SvgImageDiv>
        <Svg src={section3} alt={imgTitle} />
      </SvgImageDiv>
      <TextContainer>
        <Title>{title}</Title>
        <Body>
          The great news here is that it’s now easier than ever to{" "}
          <BabyBlue>Build </BabyBlue>and <BabyBlue>Launch </BabyBlue>a an
          awesome website using <Green>Shopify</Green>.
        </Body>
      </TextContainer>
    </Div>
  );
}

export default ShopifyDiv;

const Div = styled.div`
  display: flex;
  padding: 2em;
  justify-content: center;
  align-items: center;
  @media (max-width: 810px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  @media (max-width: 410px) {
    padding: 0.5em;
  }
`;
const TextContainer = styled.div`
  margin: auto 0;
`;
const Title = styled.h3``;

const Body = styled.p`
  font-family: Poppins;
  font-size: 2.25rem;
  font-style: normal;
  font-weight: 400;
  line-height: 61px;
  letter-spacing: 0em;
  text-align: left;
  max-width: 719px;
  @media (max-width: 410px) {
    font-size: 1.55rem;
    line-height: 1.4;
    text-align: center;
  }
`;

const SvgImageDiv = styled.div`
  margin: auto 0;
`;

const Svg = styled.img`
  max-width: 816px;
  @media (max-width: 410px) {
    max-width: 400px;
  }
`;
