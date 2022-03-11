import React from "react";
import {
  SubHeading,
  HeadingSecondary,
  Button,
  Wrapper,
} from "../../components/index";
import styled from "styled-components";
import ImageGallery from "react-image-gallery";
import { images } from "../../constants/index";
import {
  AiOutlineInstagram,
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
} from "react-icons/ai";

const GallerySection = styled.section`
  background: #0c0c0c;
  padding: 60px 0;
  overflow: hidden;
`;
const GalleryWrapper = styled.div`
  padding-left: 1rem;
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  align-items: center;
  &.gallery__box {
    @media (min-width: 650px) {
      padding-left: 60px;
    }
  }
`;
const GalleryTextBox = styled.div`
  flex: 1 0 100%;
  &.gallery__text-box {
    @media (min-width: 950px) {
      flex: 1;
    }
  }
`;
const GalleryPg = styled.p`
  color: lightgray;
  margin: 40px 0 30px 0;
  font-size: 1.1rem;
  line-height: 1.6;
  font-family: "Open Sans", sans-serif;
`;

const GalleryImgBox = styled.figure`
  flex: 1 0 100%;
  display: flex;
  align-items: center;
  gap: 25px;
  overflow-x: scroll;
  &.gallery__img-box {
    @media (min-width: 950px) {
      flex: 1;
    }
  }
`;
const GalleryImg = styled.img`
  height: 500px;
  width: 100%;
`;

const GalleryImgCont = styled.div`
  position: relative;
  min-width: 360px;
  flex: 1;
`;
const GalleryImgLink = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease-out;
  opacity: 0;
  font-size: 50px;
  color: #fff;
`;

function Gallery() {
  return (
    <GallerySection className="gallery">
      <GalleryWrapper className="gallery__box">
        <GalleryTextBox className="gallery__text-box">
          <SubHeading text="Instagram" />
          <HeadingSecondary>Photo Gallery</HeadingSecondary>
          <GalleryPg>
            AiOutlinePauseLorem Ipsum Dolor Sit Amet, Consectetur Adipiscing
            Elit. Volutpat Mattis Ipsum Turpis Elit Elit Scelerisque Egestas Mu.
          </GalleryPg>
          <Button>View More</Button>
        </GalleryTextBox>
        <GalleryImgBox className="img-gallery gallery__img-box">
          <GalleryImgCont>
            <GalleryImg src={images.gallery01} alt="" />
            <GalleryImgLink className="gallery-img-link">
              <a href="#">
                <AiOutlineInstagram />
              </a>
            </GalleryImgLink>
          </GalleryImgCont>
          <GalleryImgCont>
            <GalleryImg src={images.gallery02} alt="" />
            <GalleryImgLink className="gallery-img-link">
              <a href="#">
                <AiOutlineInstagram />
              </a>
            </GalleryImgLink>
          </GalleryImgCont>
          <GalleryImgCont>
            <GalleryImg src={images.gallery03} alt="" />
            <GalleryImgLink className="gallery-img-link">
              <a href="#">
                <AiOutlineInstagram />
              </a>
            </GalleryImgLink>
          </GalleryImgCont>
          <GalleryImgCont>
            <GalleryImg src={images.gallery04} alt="" />
            <GalleryImgLink className="gallery-img-link">
              <a href="#">
                <AiOutlineInstagram />
              </a>
            </GalleryImgLink>
          </GalleryImgCont>
        </GalleryImgBox>
      </GalleryWrapper>
    </GallerySection>
  );
}

export default Gallery;
