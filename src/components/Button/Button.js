import React from "react";
import styled from "styled-components";

const Btn = styled.button`
  background-color: #fff;
  color: #000;
  font-family: "Cormorant Upright";
  border-radius: 3px;
  border: 0;
  padding: 12px 25px;
  font-size: 1.1rem;
  font-weight: 700;
  cursor: pointer;
`;

function Button({ children }) {
  return <Btn>{children}</Btn>;
}

export default Button;
