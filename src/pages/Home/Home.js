import React from "react";
import {
  Hero,
  Chef,
  Intro,
  Gallery,
  SubscribeNewsLetter,
  Footer,
  AboutUs,
  SpecialMenuRow,
} from "../../components/index";
import { images } from "../../constants/index";
import styled from "styled-components";

const HomeBox = styled.div``;

function Home() {
  return (
    <HomeBox>
      <Hero />
      <Chef />
      <Intro />
      <Gallery />
      <SubscribeNewsLetter />
    </HomeBox>
  );
}

export default Home;
