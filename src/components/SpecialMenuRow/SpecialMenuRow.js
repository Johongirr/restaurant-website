import React from "react";
import { images, data } from "../../constants/index";
import styled from "styled-components";
import {
  Wrapper,
  SubHeading,
  HeadingSecondary,
  SpecialMenuRowItem,
  Button,
} from "../index";

const MenuSection = styled.section`
  background: #0c0c0c;
  padding: 50px 0;
`;
const Box = styled.div`
  text-align: center;
  margin-bottom: 50px;
`;
const MenuRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 25px;
  flex-direction: column;
  &.menu__row {
    @media (min-width: 960px) {
      flex-direction: row;
    }
  }
`;
const MenuTitle = styled.h3`
  text-align: center;
  font-size: clamp(2rem, calc(3vw +1rem), 3rem);
  font-family: "Cormorant Upright";
  color: #fff;
  margin-bottom: 40px;
`;
const MenuImgBox = styled.figure`
  flex: 1;
  text-align: center;
`;
const MenuImg = styled.img`
  max-width: 100%;
`;
const MenuRowBox = styled.div`
  flex: 1;
`;

function SpecialMenuRow() {
  return (
    <MenuSection className="menu">
      <Wrapper>
        <Box className="menu__box">
          <SubHeading text="Menu That Fits Your Palette" />
          <HeadingSecondary>Today's Special</HeadingSecondary>
        </Box>
        <MenuRow className="menu__row">
          <MenuRowBox className="menu__row-item">
            <MenuTitle>Wine & Beer</MenuTitle>
            {data.wines.map((wine, index) => (
              <SpecialMenuRowItem data={wine} key={index} />
            ))}
          </MenuRowBox>
          <MenuImgBox className="menu__img-box">
            <MenuImg
              src={images.menu}
              alt=""
              style={{ display: "block", marginBottom: "20px", width: "100%" }}
            />
            <Button>View More</Button>
          </MenuImgBox>
          <MenuRowBox>
            <MenuTitle>Cocktails</MenuTitle>

            {data.cocktails.map((cocktail, index) => (
              <SpecialMenuRowItem data={cocktail} key={index} />
            ))}
          </MenuRowBox>
        </MenuRow>
      </Wrapper>
    </MenuSection>
  );
}

export default SpecialMenuRow;
