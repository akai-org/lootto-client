import React from "react";
import styled from "react-emotion";

import Layout from '../components/Layout';
import Title from '../components/Title';

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
`;

const Loading = () => (
  <Layout distributed>
    <AstronautWrapper>
      <img src={astronaut} alt="" />
    </AstronautWrapper>

    <Title medium>Najświeższe dane już do Ciebie lecą!</Title>
  </Layout>
);

export default Loading;
