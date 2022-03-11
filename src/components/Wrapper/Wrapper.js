import React from "react";
import styled from "styled-components";

const Container = styled.div`
  max-width: 1250px;
  width: 90%;
  margin: 0 auto;
`;

function Wrapper({ children }) {
  return <Container>{children}</Container>;
}

export default Wrapper;
