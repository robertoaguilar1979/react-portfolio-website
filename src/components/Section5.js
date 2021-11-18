import React from "react";
import styled from "styled-components";
import { Green, BabyBlue } from "../style/style";
import section5 from "../images/section5.svg";

function ShopifyDiv({ title, body, image, imgTitle }) {
  return (
    <Div>
      <SvgImageDiv>
        <Svg src={section5} alt={imgTitle} />
      </SvgImageDiv>
      <TextContainer>
        <Title>{title}</Title>
        <Body>
          By Using <Green>Shopify</Green> your now able to compete with the
          likes of Amazon and Walmart.
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
  font-size: 36px;
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
