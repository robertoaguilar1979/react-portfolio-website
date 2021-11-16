import React from "react";
import styled from "styled-components";
import { Green, BabyBlue } from "../style/style";
import section6 from "../images/section6.svg";

function ShopifyDiv({ title, body, image, imgTitle }) {
  return (
    <Div>
      <TextContainer>
        <Title>{title}</Title>
        <Body>
          <Green>Shopify</Green> does all the heavy lifting of{" "}
          <BabyBlue>setting up the infrastructure</BabyBlue> so that you can
          focus on selling your products.
        </Body>
      </TextContainer>
      <SvgImageDiv>
        <Svg src={section6} alt={imgTitle} />
      </SvgImageDiv>
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
  }
`;

const SvgImageDiv = styled.div`
  margin: auto 0;
  @media (max-width: 810px) {
    order: -1;
  }
`;

const Svg = styled.img`
  max-width: 816px;
  @media (max-width: 410px) {
    max-width: 400px;
  }
`;
