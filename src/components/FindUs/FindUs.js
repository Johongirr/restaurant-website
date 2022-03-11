import React from "react";
import { images } from "../../constants";
import {
  SubHeading,
  HeadingSecondary,
  Wrapper,
  Button,
} from "../../components/index";
import styled, { css } from "styled-components";

const FindUsSection = styled.section`
  padding: 100px 0;
`;
const FindUsRow = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 40px;
  &.contact__row {
    @media (min-width: 960px) {
      flex-direction: row;
    }
  }
`;
const FindUsPg = styled.p`
  font-size: 1.1rem;
  font-family: "Open Sans", sans-serif;
  color: #fff;
  ${(props) =>
    props.golden &&
    css`
      font-family: "Cormorant Upright";
      color: #dcca87;
      font-size: 1.6rem;
    `}
  ${(props) =>
    props.marginTop &&
    css`
      margin-top: 50px;
    `}
`;
const FindUsTextBox = styled.div`
  flex: 1;
`;
const FindUsImgBox = styled.figure`
  flex: 1;
  margin-left: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function FindUs() {
  return (
    <FindUsSection className="contact">
      <Wrapper>
        <FindUsRow className="contact__row">
          <FindUsTextBox className="contact__text-box">
            <SubHeading text="Contact" />
            <HeadingSecondary>Find Us</HeadingSecondary>
            <FindUsPg marginTop>
              Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 75G
            </FindUsPg>
            <FindUsPg golden marginTop>
              Opening Hours
            </FindUsPg>
            <FindUsPg marginTop>Mon - Fri: 10:00 Am - 02:00 Am</FindUsPg>
            <FindUsPg style={{ marginBottom: "30px" }}>
              Sat - Sun: 10:00 Am - 03:00 Am
            </FindUsPg>
            <Button>Visit Us</Button>
          </FindUsTextBox>
          <FindUsImgBox className="contact__img-box">
            <img src={images.findus} alt="" />
          </FindUsImgBox>
        </FindUsRow>
      </Wrapper>
    </FindUsSection>
  );
}

export default FindUs;
