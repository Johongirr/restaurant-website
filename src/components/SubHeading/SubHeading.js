import React from "react";
import styled from "styled-components";
import { images } from "../../constants/index";

const SubHeadingPg = styled.p`
  font-family: "Cormorant Upright";
  font-size: 1.6rem;
  color: #fff;
`;

function SubHeading({ text, img }) {
  return (
    <>
      <SubHeadingPg className="subheading">{text}</SubHeadingPg>
      <img src={images.spoon} alt="image of the sppon" />
    </>
  );
}

export default SubHeading;
