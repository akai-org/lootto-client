import React from "react";
import styled from "react-emotion";

import Layout from '../components/Layout';

import astronaut from "../assets/astronaut.png";

const FloatingDiv = styled('div')`
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
  <Layout distributed spanned narrow >
    <FloatingDiv>
      <img src={astronaut} alt="" />
    </FloatingDiv>
  </Layout>
);

export default Loading;
