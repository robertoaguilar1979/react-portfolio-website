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
  position: relative;
  height: 100vh;
  padding-top: 4.5em;

  @media (max-width: 1600px) {
    padding-top: 2em;
  }
  @media (max-width: 810px) {
    flex-direction: column;
    align-items: center;
    padding-top: 0.35em;
  }
  @media (max-width: 400px) {
    height: 785px;
  }
`;

const HeroText = styled.div`
  margin-left: 0.5em;

  @media (max-width: 810px) {
    text-align: center;
    margin-left: 0;
  }
`;
/////////// Robert Aguilar text  ////////////////////
const HeroTextH1 = styled.h1`
  font-family: "Playfair Display SC", serif;
  font-size: 4rem;
  font-style: normal;
  font-weight: 700;
  line-height: 85px;
  letter-spacing: 0.1em;
  text-align: left;

  @media (max-width: 810px) {
    font-size: 3.75rem;
    line-height: 75px;
    text-align: center;
  }
  @media (max-width: 360px) {
    font-size: 3rem;
    line-height: 50px;
    text-align: center;
    margin-bottom: 0.35em;
  }
`;

//////////// React/Shopify developer text  //////////////////////////////
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
  margin-bottom: 1.75em;
  margin-left: 0.3em;

  @media (max-width: 810px) {
    font-size: 1.2rem;
    line-height: 20px;
    text-align: center;
    margin: 0;
    padding: 0;
  }
  @media (max-width: 400px) {
    font-size: 0.95rem;
    line-height: 25px;
    text-align: center;
    margin-bottom: 2.25em;
  }
`;

//////////////////// Paragraph text  ///////////////////
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
  margin-left: 0.3em;

  @media (max-width: 810px) {
    padding: 0.35em;
    font-size: 1.15rem;
    margin-bottom: 1.25em;
  }
  @media (max-width: 360px) {
    padding: 0.25em;
  }
`;
///////////////// Hero area picture /////////////////////
const HeroPic = styled.div`
  margin-left: 1em;
  display: block;

  @media (max-width: 810px) {
    margin-left: 0;
    margin: 0 auto;
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
  }
  @media (max-width: 360px) {
    margin-left: 0.25em;
  }
`;

const HeroImagePicture = styled.img`
  max-width: 100%;
  height: auto;
  position: absolute;
  right: -150px;
  top: 25px;
  margin-right: 2em;
  display: block;

  @media (max-width: 1600px) {
    top: unset;
    right: unset;
    width: 100%;
    max-width: 600px;
    height: auto;
    margin-right: 0;
  }
  @media (max-width: 810px) {
    top: unset;
    right: unset;
    width: 100%;
    margin: 0 auto;
  }
  @media (max-width: 360px) {
    top: unset;
    right: unset;
    max-width: 325px;
  }
`;
