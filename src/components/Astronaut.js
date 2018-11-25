import React from "react";
import styled, { css } from "react-emotion";
import astronaut from "../assets/astronaut.png";

const AstronautWrapper = styled('div')`
  position: relative;
  left: -20px;
  max-width: 100%;
  max-height: 100%;
  animation: floating 6s infinite ease-in-out;

  @keyframes floating {
    0% { transform: translateY(0) }
    50% { transform: translateY(-20px) }
    100% { transform: translateY(0) }
  }

  ${({ floatFromSide }) =>
    floatFromSide
    &&
    css`
      left: initial;
      position: absolute;
      width: 80%;
      top: 5%;

      img {
        animation: floatFromSide 4s cubic-bezier(0.42, 0, 0, 1.01) forwards;
      }

      @keyframes floatFromSide {
        0% { transform: translate(120%) }
        100% { transform: translate(40%) }
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