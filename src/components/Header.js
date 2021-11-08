import React from "react";
import styled from "styled-components";
import Button from "./Button";
import heroImage from "../images/heroPic.png";
function Header() {
  return (
    <>
      <HeroWrapper>
        <HeroText>
          <HeroTextH1>Robert Aguilar</HeroTextH1>
          <HeroTextReactShopify>React/Shopify Developer </HeroTextReactShopify>
          <HeroTextMainText>
            I’m a software engineer located here in the USA. I’m a Navy Veteran
            that has a passion in helping the small to medium business thrive
            online.{" "}
          </HeroTextMainText>
          <Button />
        </HeroText>
        <HeroPic>
          <HeroImagePicture src={heroImage} alt="heroPicture" />
          <img src={heroImage} alt="" />
        </HeroPic>
      </HeroWrapper>
    </>
  );
}

export default Header;

const HeroWrapper = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
`;
const HeroText = styled.div`
  margin-left: 0.5em;
`;
const HeroTextH1 = styled.h1`
  font-family: "Playfair Display SC", serif;
  font-size: 4rem;
  font-style: normal;
  font-weight: 700;
  line-height: 85px;
  letter-spacing: 0.1em;
  text-align: left;
`;
const HeroTextReactShopify = styled.p`
  font-family: Roboto;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 500;
  line-height: 23px;
  letter-spacing: 0.88em;
  text-align: left;
  color: #51dde8;

  height: 28px;
  max-width: 650px;
  left: 85px;
  top: 326px;
  margin-bottom: 1.75em;
  margin-left: 0.3em;
`;
const HeroTextMainText = styled.p`
  font-family: Poppins;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 400;
  line-height: 27px;
  letter-spacing: 0em;
  text-align: left;

  height: 83px;
  max-width: 539px;
  left: 85px;
  top: 400px;
  margin-left: 0.3em;
`;

const HeroImagePicture = styled.image`
  height: 787.4259033203125px;
  width: 788.38427734375px;
`;

const HeroPic = styled.div`
  margin-left: 0.5em;
`;
