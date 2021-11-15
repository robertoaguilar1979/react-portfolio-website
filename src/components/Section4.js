import React from "react";
import styled from "styled-components";
import { Green, BabyBlue } from "../style/style";
import section4 from "../images/section4.svg";

function ShopifyDiv({ title, body, image }) {
  return (
    <Div>
      <TextContainer>
        <Title>what is shopify?</Title>
        <Body>
          Shopify is specially made for businesses to sell their
          products/services online.{" "}
        </Body>
      </TextContainer>
      <SvgImageDiv>
        <Svg src={section4} alt="svg images" />
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
`;

const SvgImageDiv = styled.div`
  margin: auto 0;
`;

const Svg = styled.img`
  max-width: 816px;
`;
