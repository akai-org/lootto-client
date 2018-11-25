import React from "react";
import Layout from "../components/Layout";
import Title from "../components/Title";
import Astronaut from "../components/Astronaut";
import Particles from "../components/Particles.js";

const Loading = () => (
  <Layout distributed>
    <Particles />
    <Astronaut />
    <Title medium>Najświeższe dane już do Ciebie lecą!</Title>
  </Layout>
);

export default Loading;
