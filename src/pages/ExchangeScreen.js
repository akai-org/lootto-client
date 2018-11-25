import React, { Fragment } from "react";
import styled from 'react-emotion';
import Layout from "../components/Layout";
import Title from "../components/Title";
import BackButton from "../components/BackButton";
import Caption from "../components/Caption";
import Label from "../components/Label";
import useCookie from "../hooks/useCookie";
import useWallet from "../hooks/useWallet";
import { ColumnContainer, Column } from "../components/Columns";
import Button from "../components/Button";
import Box from "../components/Box";
import StarCount from "../components/StarCount";

const SaldoWrapper = styled('div')`
  display: flex;
  align-items: baseline;
  justify-content: space-between;

  h2, p {
    margin: 0;
  }
`;

const buyingOptions = [
  {
    stars: 5,
    currency: 10,
  },
  {
    stars: 15,
    currency: 30,
  },
  {
    stars: 30,
    currency: 60,
  },
];

export default function ExchangeScreen() {
  const [token, setToken] = useCookie("token", "");
  const [wallet, setWallet] = useWallet();

  if (!wallet.loaded) {
    fetch(`${process.env.REACT_APP_API}/user`)
      .then(res => res.json())
      .then(data => setWallet({ ...data.wallet, loaded: true }));
  }

  return (
    <Fragment>
      <Layout spanned narrow>
        <BackButton />
        <Title medium>Kantor</Title>
        <SaldoWrapper>
          <Label>Saldo</Label>
          <Caption>234 PLN</Caption>
        </SaldoWrapper>
        <ColumnContainer>
          {
            buyingOptions.map(({ stars, currency }) => (
              <Column>
                <Box>
                  
                  <StarCount>{stars}</StarCount>
                </Box>
                <Button 
                  primary
                  small
                  onClick={() => { }}
                >
                  Kup
                </Button>
                <Caption small center>{currency} PLN</Caption>
              </Column>
            ))
          }
        </ColumnContainer>
      </Layout>
    </Fragment>
  );
}
