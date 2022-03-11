import React from "react";
import {
  SpecialMenuRow,
  SubscribeNewsLetter,
  Footer,
  Gallery,
} from "../../components/index";
import styled from "styled-components";

const MenuBox = styled.div``;

function Menu() {
  return (
    <MenuBox>
      <SpecialMenuRow />
      <SubscribeNewsLetter />
    </MenuBox>
  );
}

export default Menu;
