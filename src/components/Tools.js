import styled from "styled-components";
import html from "../images/html.svg";
import css from "../images/css.svg";
import js from "../images/js.svg";
import shopify from "../images/shopify.svg";
import sass from "../images/sass.svg";
import figma from "../images/figma.svg";
import photoshop from "../images/photoshop.svg";
import react from "../images/react.svg";

function Tools() {
  return (
    <Container>
      <Title>Tools I use to grow Your Business</Title>
      <Icons>
        <Img src={html} />
        <Img src={css} />
        <Img src={js} />
        <Img src={shopify} />
        <Img src={react} />
        <Img src={sass} />
        <Img src={figma} />
        <Img src={photoshop} />
      </Icons>
    </Container>
  );
}

export default Tools;

const Container = styled.div`
  margin: 0 auto;
  display: flex;
  padding: 2em;
  align-items: center;
  flex-direction: column;

  @media (max-width: 411px) {
    padding: 0.35em;
    margin-top: 1em;
  }
`;

const Title = styled.h3`
  font-family: Roboto;
  font-size: 2.25rem;
  font-style: normal;
  font-weight: 400;
  line-height: 38px;
  letter-spacing: 0em;

  @media (max-width: 411px) {
    font-size: 1.75rem;
    text-align: center;
    margin-bottom: 1em;
  }
`;

const Icons = styled.div`
  padding-top: 0.8em;
  display: flex;
  align-items: center;

  @media (max-width: 411px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    padding-top: 0.4em;
  }
`;

const Img = styled.img`
  display: inline-block;
`;
