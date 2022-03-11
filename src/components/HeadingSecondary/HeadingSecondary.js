import React from "react";
import styled from "styled-components";

const Heading = styled.h2`
  font-size: clamp(2.8rem, calc(4vw + 1rem), 4.5rem);
  font-family: "Cormorant Upright";
  color: #dcca87;
`;

function HeadingSecondary({ children }) {
  return <Heading>{children}</Heading>;
}

export default HeadingSecondary;
