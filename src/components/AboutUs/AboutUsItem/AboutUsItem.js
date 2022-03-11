import React from "react";
import styled, { css } from "styled-components";
import { Button } from "../../index";

const Box = styled.div`
  flex: 1;
  color: #fff;
  ${(props) => css`
    text-align: props.textAlign;
  `}
  &.box {
  }
`;
const Title = styled.h2`
  font-size: clamp(2rem, calc(3vw + 1rem), 4rem);
  font-family: "Cormorant Upright";
  color: #dcca87;
`;
const Pg = styled.p`
  font-size: 1.1rem;
  font-family: "Open Sans", sans-serif;
  margin: 20px 0;
`;
function AboutUsItem({ title, description, textAlign, img }) {
  return (
    <Box style={{ textAlign: textAlign }} className="box">
      <Title>{title}</Title>
      <img src={img} alt="" />
      <Pg>{description}</Pg>
      <Button>Know More</Button>
    </Box>
  );
}

export default AboutUsItem;
