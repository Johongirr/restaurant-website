import React from "react";
import { images } from "../../constants/index";
import styled from "styled-components";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";

const FooterBox = styled.footer`
  padding-top: 350px;
  padding-bottom: 120px;
  @media (min-width: 768px) {
    padding-top: 200px;
  }
`;
const FooterRow = styled.div`
  max-width: 1200px;
  width: 90%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 60px;
  flex-direction: column;
  color: #fff;
  &.footer__row {
    @media (min-width: 1000px) {
      gap: 0;
      flex-direction: row;
    }
  }
`;
const FooterRowItem = styled.div`
  flex: 1;
  width: 100%;

  text-align: center;
`;
const FooterTitle = styled.h5`
  font-size: 2.3rem;
  font-family: "Cormorant Upright";
  margin-bottom: 20px;
`;
const FooterPg = styled.p`
  font-size: 1.05rem;
  font-family: "Open Sans", sans-serif;
  margin-bottom: 10px;
`;
const FooterSocial = styled.ul`
  list-style-type: none;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;
const FooterItem = styled.li`
  margin-right: 10px;
`;
const FooterSocialLink = styled.a`
  font-size: 25px;
`;
const FooterCopyright = styled.small`
  font-size: 1.1rem;
  font-family: "Open Sans", sans-serif;
  color: #fff;
  text-align: center;
  display: block;
  margin-top: 50px;
`;

function Footer() {
  return (
    <FooterBox className="footer">
      <FooterRow className="footer__row">
        <FooterRowItem className="footer__row-item">
          <FooterTitle>Contact Us </FooterTitle>
          <FooterPg>9 W 53rd St, New York, NY 10019, USA</FooterPg>
          <FooterPg>+1 212-344-1230</FooterPg>
          <FooterPg>+1 212-344-1230</FooterPg>
        </FooterRowItem>
        <FooterRowItem>
          <img width="200" src={images.gericht} alt="" />
          <FooterPg>
            "The Best Way To Find Yourself Is To Lose Yourself In The Service Of
            Others."
          </FooterPg>
          <img src={images.spoon} alt="" />
          <FooterSocial>
            <FooterItem>
              <FooterSocialLink href="#">
                <FiTwitter />
              </FooterSocialLink>
            </FooterItem>
            <FooterItem>
              <FooterSocialLink href="#">
                <FiFacebook />
              </FooterSocialLink>
            </FooterItem>
            <FooterItem>
              <FooterSocialLink href="#">
                <FiInstagram />
              </FooterSocialLink>
            </FooterItem>
          </FooterSocial>
        </FooterRowItem>
        <FooterRowItem>
          <FooterTitle>Contact Us </FooterTitle>
          <FooterPg>Monday-Friday:</FooterPg>
          <FooterPg>08:00 Am - 12:00 Am</FooterPg>
          <FooterPg>Saturday-Sunday:</FooterPg>
          <FooterPg>07:00 Am - 11:00 Pm</FooterPg>
        </FooterRowItem>
      </FooterRow>
      <FooterCopyright>2021 Gericht. All Rights Reserved.</FooterCopyright>
    </FooterBox>
  );
}

export default Footer;
