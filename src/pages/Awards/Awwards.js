import React from "react";
import {
  AwwardsRow,
  SubscribeNewsLetter,
  Wrapper,
} from "../../components/index";
import styled from "styled-components";
const AwwardBox = styled.div``;

function Awwards() {
  return (
    <AwwardBox>
      <Wrapper>
        <AwwardsRow />
      </Wrapper>
      <SubscribeNewsLetter />
    </AwwardBox>
  );
}

export default Awwards;
