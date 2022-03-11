import React from "react";
import styled from "styled-components";

const Box = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 5px;
`;
const MenuName = styled.p`
  font-size: 1.6rem;
  font-family: "Cormorant Upright";
  color: #dcca87;
`;
const MenuPg = styled.p`
  color: lightgray;
  font-size: 1.1rem;
  font-family: "Open Sans", sans-serif;
`;
const MenuPrice = styled.p`
  font-size: 1.5rem;
  color: #fff;
`;

function SpecialMenuRowItem({ data }) {
  console.log(data);
  return (
    <div style={{ marginBottom: "20px" }}>
      <Box>
        <div>
          <MenuName>{data.title}</MenuName>
        </div>
        <MenuPrice>{data.price}</MenuPrice>
      </Box>
      <MenuPg>{data.tags}</MenuPg>
    </div>
  );
}

export default SpecialMenuRowItem;
