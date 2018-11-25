import React from "react";
import useWallet from "../hooks/useWallet";
import Navbar from "../components/Navbar";
import Button from "../components/Button";
import Layout from "../components/Layout";
import Title from "../components/Title";
import Label from "../components/Label";
import Box from "../components/Box";
import Caption from "../components/Caption";
import Paragraph from "../components/Paragraph";
import Grid from "../components/Grid";
import { Link } from "react-router-dom";
import astronaut from "../assets/astronaut-ok.png";
import styled from "react-emotion";

const Astronaut = styled("img")`
  width: 80%;
  display: block;
  position: sticky;
  bottom: 0;
  opacity: 0.2;
  transform: translateX(70px);
`;

export default function RewardScreen() {
  const [wallet, setWallet] = useWallet();

  return (
    <div>
      <Navbar stars={wallet.stars} />
      <Layout distributed fitted narrow inner>
        <div>
          <Title medium>Gratulacje!</Title>
          <Label>Zdobywasz</Label>
          <Grid cols={2}>
            <Box>
              <Caption big>5</Caption>
              <Paragraph small inner>
                Liczba gwiazdek
              </Paragraph>
            </Box>
            <Box>
              <Caption big>2</Caption>
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
