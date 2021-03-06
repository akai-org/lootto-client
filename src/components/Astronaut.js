import React from 'react';
import styled, { css } from 'react-emotion';
import astronaut from '../assets/astronaut.png';

const AstronautWrapper = styled('div')`
  @media screen and (min-width: 640px) {
    max-width: 500px;
  }

  position: relative;
  z-index: -1;
  max-width: 100%;
  max-height: 100%;
  animation: floating 6s infinite ease-in-out;

  @keyframes floating {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-20px);
    }
    100% {
      transform: translateY(0);
    }
  }

  ${({ floatFromSide }) =>
    floatFromSide &&
    css`
      right: 0;
      position: absolute;
      width: 80%;
      top: 5%;
      overflow: hidden;

      img {
        animation: floatFromSide 4s cubic-bezier(0.42, 0, 0, 1.01) forwards;
      }

      @keyframes floatFromSide {
        0% {
          transform: translate(120%);
        }
        100% {
          transform: translate(10%);
        }
      }
    `}
`;

export default function(props) {
  return (
    <AstronautWrapper {...props}>
      <img src={astronaut} alt="" />
    </AstronautWrapper>
  );
}
