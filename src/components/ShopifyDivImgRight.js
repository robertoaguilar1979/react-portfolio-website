import React from "react";
import styled from "styled-components";
import { Container, Green, BabyBlue } from "../style/style";

function ShopifyDiv({ title, body, image }) {
  return (
    <Div>
      <TextContainer>
        <Title>{title}</Title>
        <Body>{body}</Body>
      </TextContainer>
      <SvgImageDiv>
        <Svg src={`../images/${image}`} alt="svg images" />
      </SvgImageDiv>
    </Div>
  );
}

export default ShopifyDiv;

const Div = styled(Container)`
  display: flex;
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
`;

const SvgImageDiv = styled.div`
  margin: auto 0;
`;

const Svg = styled.img`
  max-width: 100%;
  height: auto;
`;
