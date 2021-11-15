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
