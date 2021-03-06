import React, { useState } from 'react';
import useUser from '../hooks/useUser';
import Navbar from '../components/Navbar';
import Button from '../components/Button';
import Layout from '../components/Layout';
import Title from '../components/Title';
import Label from '../components/Label';
import Box from '../components/Box';
import Caption from '../components/Caption';
import Paragraph from '../components/Paragraph';
import Grid from '../components/Grid';
import { Link } from 'react-router-dom';
import astronaut from '../assets/astronaut-ok.png';
import styled from 'react-emotion';
import { authorizedRequest } from "../utils/request";

const Astronaut = styled('img')`
  width: 80%;
  display: block;
  position: sticky;
  bottom: 0;
  opacity: 0.2;
  transform: translateX(70px);
`;

const boxTypeToPrize = type => {
  if (Math.floor(Math.random() * 20) > 5) return 1;
  if (type === '4') return Math.floor(Math.random() * 20) + 1;
  else if (type === '3') return Math.floor(Math.random() * 10) + 1;
  return Math.floor(Math.random() * 5) + 1;
};

const boxTypeToAdditional = () => {
  if (Math.floor(Math.random() * 20) > 5) return 0;
  return Math.floor(Math.random() * 5) + 1;
};

export default function RewardScreen({ onReward }) {
  const user = useUser();
  
  const chestType = window.location.search.split('=')[1];
  const wonStars = boxTypeToPrize(chestType);
  const wonPowerUps = boxTypeToAdditional(chestType);

  authorizedRequest("user/reward", {
    method: "POST",
    body: { wonStars, wonPowerUps }
  });

  return (
    <div>
      <Navbar stars={user.starsBalance + wonStars} />
      <Layout distributed fitted narrow inner>
        <div>
          <Title medium>Gratulacje!</Title>
          <Label>Zdobywasz</Label>
          <Grid cols={2}>
            <Box>
              <Caption big>{wonStars}</Caption>
              <Paragraph small inner>
                Liczba gwiazdek
              </Paragraph>
            </Box>
            <Box>
              <Caption big>{wonPowerUps}</Caption>
              <Paragraph small inner>
                Dodatkowy bonus
              </Paragraph>
            </Box>
          </Grid>
          <Link to="/game">
            <Button secondary>Powrót do mapy</Button>
          </Link>
        </div>
        <Astronaut src={astronaut} />
      </Layout>
    </div>
  );
}
