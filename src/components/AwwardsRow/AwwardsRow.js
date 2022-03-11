import React from "react";
import { SubHeading, HeadingSecondary, AwwardRowItem } from "../index";
import { data, images } from "../../constants/index";
import styled from "styled-components";

const AwwardBox = styled.section`
  padding: 100px 0;
`;
const AwwardCon = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 40px;
  &.award__row {
    @media (min-width: 1200px) {
      flex-direction: row;
    }
  }
`;
const AwwardTextBox = styled.div`
  padding-top: 80px;
  padding-right: 70px;
  flex: 1;
`;
const AwwardImgBox = styled.figure`
  flex: 1;
`;
const AwwardGrid = styled.div`
  margin-top: 50px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
  &.award__grid {
    @media (min-width: 1200px) {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;

function AwwardsRow() {
  return (
    <AwwardBox className="award">
      <AwwardCon className="award__row">
        <AwwardTextBox>
          <SubHeading text="Awards & Recognition" />
          <HeadingSecondary>Our Laurels</HeadingSecondary>
          <AwwardGrid className="award__grid">
            {data.awards.map((award, index) => (
              <AwwardRowItem key={index} award={award} />
            ))}
          </AwwardGrid>
        </AwwardTextBox>
        <AwwardImgBox>
          <img src={images.laurels} alt="img of cooked chicken leg" />
        </AwwardImgBox>
      </AwwardCon>
    </AwwardBox>
  );
}

export default AwwardsRow;
