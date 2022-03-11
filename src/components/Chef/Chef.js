import React from "react";
import { images } from "../../constants/index";
import { SubHeading, HeadingSecondary, Wrapper } from "../index";
import styled from "styled-components";

const ChefSection = styled.section`
  padding: 100px 0;
`;
const ChefSectionRow = styled.div`
  display: flex;
  gap: 120px;
  flex-wrap: wrap;
`;
const ChefSectionImgBox = styled.figure`
  &.chef__img-box {
    flex: 1 0 100%;
    @media (min-width: 1100px) {
      flex: 1;
    }
  }
`;
const ChefSectionTextBox = styled.div`
  &.chef__text-box {
    flex: 1 0 100%;
    @media (min-width: 1100px) {
      flex: 1;
    }
  }
`;
const ChefSectionPg = styled.p`
  margin-top: 80px;
  margin-bottom: 50px;
  font-size: 1.05rem;
  font-family: "Open Sans", sans-serif;
  color: #fff;
  line-height: 2;
`;
const ChefSectionChefName = styled.p`
  font-size: 2rem;
  font-family: "Cormorant Upright";
  color: #dcca87;
`;
const ChefSectionOwner = styled.p`
  font-family: "Open Sans", sans-serif;
  font-size: 1.15rem;
  margin-bottom: 40px;
  color: #fff;
`;

function Chef() {
  return (
    <ChefSection className="chef">
      <Wrapper>
        <ChefSectionRow className="chef__row">
          <ChefSectionImgBox className="chef__img-box">
            <img
              src={images.chef}
              style={{ maxWidth: "100%", width: "100%" }}
              alt="chef of the current restaurant"
            />
          </ChefSectionImgBox>
          <ChefSectionTextBox className="chef__text-box">
            <SubHeading text="Chef's World" />
            <HeadingSecondary>What We Believe In</HeadingSecondary>

            <ChefSectionPg className="chef__text">
              <div
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  color: "#fff",
                }}
              >
                <img
                  src={images.quote}
                  style={{ width: "50px", marginRight: "20px" }}
                  alt="quote"
                />
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Fugit, nihil?
                </p>
              </div>
              . Auctor Sit Iaculis In Arcu. Vulputate Nulla Lobortis Mauris Eget
              Sit. Nulla Scelerisque Scelerisque Congue Ac Consequat, Aliquam
              Molestie Lectus Eu. Congue Iaculis Integer Curabitur Semper Sit
              Nunc.
            </ChefSectionPg>
            <ChefSectionChefName>Kevin Luo</ChefSectionChefName>
            <ChefSectionOwner>Chef & Founder</ChefSectionOwner>
            <img
              width="250"
              src={images.sign}
              alt="signature of the current restaurant's chef"
            />
          </ChefSectionTextBox>
        </ChefSectionRow>
      </Wrapper>
    </ChefSection>
  );
}

export default Chef;
