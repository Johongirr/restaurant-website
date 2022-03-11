import React from "react";
import { images } from "../../constants/index";
import styled from "styled-components";
import { Wrapper, SubHeading, Button } from "../../components/index";

const HeroSection = styled.section`
  padding: 80px 0;
  background: #0c0c0c;
`;
const HeroRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 40px;
`;
const HeroTextBox = styled.div`
  padding-right: 0;
  flex: 1 0 100%;
  &.hero__text-box {
    @media (min-width: 950px) {
      padding-right: 100px;
      flex: 1;
    }
  }
`;
const HeroTitle = styled.h1`
  font-size: clamp(4rem, calc(6vw + 1rem), 5.5rem);
  font-family: "Cormorant Upright";
  color: #dcca87;
  margin-bottom: 20px;
`;
const HeroParapgraph = styled.p`
  color: #fff;
  font-size: 1.1rem;
  font-family: "Open Sans", sans-serif;
  margin-bottom: 30px;
`;
const HeroImgBox = styled.figure`
  flex: 1 0 100%;
  &.hero__img-box {
    @media (min-width: 950px) {
      flex: 1;
    }
  }
`;

function Hero() {
  return (
    <HeroSection className="hero">
      <Wrapper>
        <HeroRow className="hero__row">
          <HeroTextBox className="hero__text-box">
            <SubHeading text="Chase The New Flavour" />
            <HeroTitle>The Key To Fine Dining</HeroTitle>
            <HeroParapgraph className="hero__text">
              Sit Tellus Lobortis Sed Senectus Vivamus Molestie. Condimentum
              Volutpat Morbi Facilisis Quam Scelerisque Sapien. Et, Penatibus
              Aliquam Amet Tellus
            </HeroParapgraph>
            <Button>Explore Now</Button>
          </HeroTextBox>
          <HeroImgBox className="hero__img-box">
            <img src={images.welcome} alt="hero section img" />
          </HeroImgBox>
        </HeroRow>
      </Wrapper>
    </HeroSection>
  );
}

export default Hero;
