import React from "react";
import {
  AboutUs,
  Intro,
  Chef,
  SubscribeNewsLetter,
  Footer,
} from "../../components/index";
import { images } from "../../constants/index";
import styled from "styled-components";

const AboutBox = styled.div``;
function About() {
  return (
    <AboutBox>
      <AboutUs />
      <Chef />
      <Intro />
      <SubscribeNewsLetter />
    </AboutBox>
  );
}

export default About;
