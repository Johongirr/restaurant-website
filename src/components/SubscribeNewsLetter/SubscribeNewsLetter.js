import React from "react";
import { SubHeading, HeadingSecondary, Button } from "../index";
import styled from "styled-components";
import { AiOutlineInstagram } from "react-icons/ai";

const NewsletterSection = styled.section`
  background-color: #0c0c0c;
  height: 300px;
  margin: 100px 0;
`;
const NewsletterBox = styled.div`
  position: relative;
  top: 70px;
  max-width: 950px;
  margin: 0 auto;
  width: 90%;
  margin-top: 50px;
  padding: 40px 60px;
  border: 2px solid #dcca87;
  background: #0c0c0c;
  text-align: center;
`;
const NewsletterPg = styled.p`
  color: #fff;
  margin-top: 20px;
  margin-bottom: 50px;
  font-size: 1.1rem;
  font-family: "Open Sans", "Helvetica Neue", "Helvetica", sans-serif;
`;
const NewsletterForm = styled.form`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 30px;
`;
const NewsletterInput = styled.input`
  border: 0;
  flex: 1;
  border: 2px solid #dcca87;
  padding: 13px;
  border-radius: 5px;
  background: transparent;
  color: #dcca87;
  font-family: "Cormorant Upright";
  font-size: 1.05rem;
  &::placeholder {
    color: #dcca87;
    font-family: "Cormorant Upright";
    font-size: 1.05rem;
  }
`;

function SubscribeNewsLetter() {
  return (
    <NewsletterSection>
      <NewsletterBox>
        <SubHeading text="Newsletter" />
        <HeadingSecondary>Subscribe To Our Newsletter</HeadingSecondary>
        <NewsletterPg>And Never Miss Latest Updates!</NewsletterPg>
        <NewsletterForm>
          <NewsletterInput type="text" placeholder="Enter your email address" />
          <Button>Subscribe</Button>
        </NewsletterForm>
      </NewsletterBox>
    </NewsletterSection>
  );
}

export default SubscribeNewsLetter;
