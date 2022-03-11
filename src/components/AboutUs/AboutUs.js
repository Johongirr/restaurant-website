import React from "react";
import { images } from "../../constants/index";
import styled from "styled-components";
import { Wrapper, AboutUsItem } from "../index";

const AboutSection = styled.section`
  padding: 100px 0;
  background: url(${images.G});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 400px;
`;
const AboutRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 20px;
  flex-direction: column;
  &.about__row {
    @media (min-width: 900px) {
      flex-direction: row;
    }
  }
`;
const AboutImg = styled.img`
  width: 100px;
  margin: 0 25px;
`;

function AboutUs() {
  return (
    <AboutSection className="about">
      <Wrapper>
        <AboutRow className="about__row">
          <AboutUsItem
            textAlign="right"
            title="About Us"
            description="Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Quis Pharetra Adipiscing Ultrices Vulputate Posuere Tristique. In Sed Odio Nec Aliquet Eu Proin Mauris Et."
            img={images.spoon}
          />
          <AboutImg
            src={images.knife}
            alt="the picture of the knife"
            className="about__img"
          />
          <AboutUsItem
            textAlign="left"
            title="About Us"
            description="Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Quis Pharetra Adipiscing Ultrices Vulputate Posuere Tristique. In Sed Odio Nec Aliquet Eu Proin Mauris Et."
            img={images.spoon}
          />
        </AboutRow>
      </Wrapper>
    </AboutSection>
  );
}

export default AboutUs;
