import React from "react";
import Layout from '../components/Layout';
import Title from '../components/Title';
import Astronaut from '../components/Astronaut';

const Loading = () => (
  <Layout distributed>
    <Astronaut />
    <Title medium>Najświeższe dane już do Ciebie lecą!</Title>
  </Layout>
);

export default Loading;
