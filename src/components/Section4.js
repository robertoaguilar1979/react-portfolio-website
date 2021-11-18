import React from "react";
import styled from "styled-components";
import { Green, BabyBlue } from "../style/style";
import section4 from "../images/section4.svg";

function ShopifyDiv({ title, body, image, imgTitle }) {
  return (
    <Div>
      <TextContainer>
        <Title>
          what is <Green>shopify</Green>?
        </Title>
        <Body>
          <Green>Shopify</Green> is specially made for businesses to sell their
          <BabyBlue>products/services </BabyBlue>online.{" "}
        </Body>
      </TextContainer>
      <SvgImageDiv>
        <Svg src={section4} alt={imgTitle} />
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
  @media (max-width: 410px) {
    padding: 0.5em;
  }
`;
const TextContainer = styled.div`
  margin: auto 0;
`;
const Title = styled.h3`
  @media (max-width: 410px) {
    font-size: 1.85rem;
    line-height: 1.4;
    margin-top: 1rem;
    margin-bottom: 0.75em;
    text-align: center;
  }
`;

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
