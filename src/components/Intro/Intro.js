import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import meal from "../../assets/meal.mp4";
import { AiFillCaretRight, AiOutlinePause } from "react-icons/ai";

const VideoBox = styled.div`
  position: relative;
  height: 100vh;
  overflow: hidden;
  &.video {
    @media (min-width: 960px) {
    }
  }
`;
const VideoOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Video = styled.video`
  display: block;
  object-fit: cover;
  height: 100%;
  width: 100%;
`;
const VideoButton = styled.button`
  border: 2px solid #fff;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  color: #fff;
  font-size: 30px;
  z-index: 9999;
  cursor: pointer;
`;

function Intro() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef();

  const toggleVideo = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsVideoPlaying(true);
    } else {
      videoRef.current.pause();
      setIsVideoPlaying(false);
    }
  };

  return (
    <VideoBox className="video">
      <Video
        className="video__element"
        ref={videoRef}
        src={meal}
        control
      ></Video>

      <VideoOverlay className="video__overlay">
        <VideoButton onClick={toggleVideo} className="video__btn">
          {!isVideoPlaying ? <AiFillCaretRight /> : <AiOutlinePause />}
        </VideoButton>
      </VideoOverlay>
    </VideoBox>
  );
}

export default Intro;
