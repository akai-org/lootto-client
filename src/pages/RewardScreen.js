import React from 'react';
import useWallet from "../hooks/useWallet";
import Navbar from '../components/Navbar';
import Button from '../components/Button';
import Layout from '../components/Layout';
import Title from '../components/Title';
import Label from '../components/Label';
import Box from '../components/Box';
import Caption from '../components/Caption';
import Paragraph from '../components/Paragraph';
import Grid from '../components/Grid';

export default function RewardScreen() {
  const [wallet, setWallet] = useWallet();

  if (!wallet.loaded) {
    fetch(`${process.env.REACT_APP_API}/user`)
      .then(res => res.json())
      .then(data => setWallet({ ...data.wallet, loaded: true }));
  }

  return (
    <div>
      <Navbar stars={wallet.stars} />
      <Layout distributed spanned narrow inner>
        <div>
          <Title medium>Gratulacje!</Title>
          <Label>Zdobywasz</Label>
          <Grid cols={2}>
            <Box>
              <Caption big>5</Caption>
              <Paragraph small inner>Liczba gwiazdek</Paragraph>
            </Box>
            <Box>
              <Caption big>2</Caption>
              <Paragraph small inner>Dodatkowy bonus</Paragraph>
            </Box>
          </Grid>
        </div>
        <Button secondary>
          Powrót do mapy
        </Button>
      </Layout>
    </div>
  );
}
