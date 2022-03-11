import React from "react";
import { images } from "../../../constants/index";
import styled from "styled-components";

const AwwardBox = styled.div`
  display: flex;
  gap: 15px;
`;
const AwwardImg = styled.img``;
const AwwardTextBox = styled.div``;
const AwwardTitle = styled.h4`
  font-size: 1.7rem;
  font-family: "Cormorant Upright";
  color: #dcca87;
`;
const AwwardPg = styled.p`
  font-size: 1.1rem;
  font-family: "Open Sans", sans-serif;
  color: #fff;
`;

function AwwardRowItem({ award }) {
  console.log(award);
  return (
    <AwwardBox>
      <AwwardImg height="50" src={award.imgUrl} />
      <AwwardTextBox>
        <AwwardTitle>{award.title}</AwwardTitle>
        <AwwardPg>{award.subtitle}</AwwardPg>
      </AwwardTextBox>
    </AwwardBox>
  );
}

export default AwwardRowItem;
