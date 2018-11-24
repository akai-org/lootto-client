import React, { Component, useState } from "react";
import Carousel from "../components/TutorialCarousel";
import Layout from "../components/Layout";
import Title from "../components/Title";
import Paragraph from "../components/Paragraph";
import Image from "../components/Image";
import Particles from "react-particles-js";

import Chest from "../assets/Chest.png";

import styled from "react-emotion";

// CHECKBOX UNICORN

const WrapperWrapper = styled("div")`
  width: 100vw;
  height: 100vh;
  position: fixed;
  background: #fff0;
  transition: background-color 1s;

  > .particle-1 {
    opacity: 0;
  }

  > .particle-2 {
    opacity: 0;
  }

  &.calming {
    > .particle-1 {
      opacity: 1;
    }

    > .particle-2 {
      opacity: 1;
    }
  }

  > div {
    opacity: 1;
  }

  &.white {
    background: #ffff;
    > div {
      opacity: 0;
    }
  }
`;

const ChestWrapper = styled("div")`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 75%;
`;

const ChestImage = styled("img")`
  &.opening {
    animation: shake 1s;
  }

  @keyframes shake {
    0% {
      transform: rotate(0);
    }
    25% {
      transform: rotate(10deg);
    }
    50% {
      transform: rotate(-10deg);
    }
    75% {
      transform: rotate(10deg);
    }
    100% {
      transform: rotate(0);
    }
  }

  &.calming {
    animation: scaleDown 1s;
  }

  @keyframes scaleDown {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(0);
    }
  }

  &.done {
    display: block;
  }
`;

const UnboxingScreen = () => {
  const [stage, setStage] = useState(0);

  const classes = ["", "opening", "calming", "white", "done"];

  if (stage === 1) {
    setTimeout(() => {
      setStage(2);
    }, 1000);
  }

  if (stage === 2) {
    setTimeout(() => {
      setStage(3);
    }, 1000);
  }

  if (stage === 3) {
    setTimeout(() => {
      setStage(4);
    }, 1000);
  }

  return (
    <WrapperWrapper className={classes[stage]}>
      <Particles
        className="particle-1"
        params={{
          polygon: {
            enable: true,
            type: "inside",
            move: {
              radius: 10
            }
          }
        }}
      />

      <Particles
        className="particle-2"
        params={{
          polygon: {
            enable: true,
            type: "inside",
            move: {
              radius: 100
            }
          }
        }}
      />

      <ChestWrapper>
        <ChestImage
          className={classes[stage]}
          src={Chest}
          onClick={() => {
            if (stage === 0) setStage(1);
          }}
        />
        <Paragraph>Kliknij w skrzynkę, aby ją otworzyć</Paragraph>
      </ChestWrapper>
    </WrapperWrapper>
  );
};

export default UnboxingScreen;
