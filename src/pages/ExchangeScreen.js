import React, { Fragment } from "react";
import styled from "react-emotion";
import Layout from "../components/Layout";
import Title from "../components/Title";
import BackButton from "../components/BackButton";
import Caption from "../components/Caption";
import Label from "../components/Label";
import useCookie from "../hooks/useCookie";
import useUser from "../hooks/useUser";
import { ColumnContainer, Column } from "../components/Columns";
import Button from "../components/Button";
import Box from "../components/Box";
import StarCount from "../components/StarCount";
import Image from "../components/Image";
import { authorizedRequest } from "../utils/request";

import small from "../assets/starBags/bag.png";
import medium from "../assets/starBags/bag-bigger.png";
import large from "../assets/starBags/bag-biggest.png";

const SaldoWrapper = styled("div")`
  display: flex;
  align-items: baseline;
  justify-content: space-between;

  h2,
  p {
    margin: 0;
  }
`;

const buyingOptions = [
  {
    stars: 5,
    currency: 10,
    imgSrc: small
  },
  {
    stars: 15,
    currency: 30,
    imgSrc: medium
  },
  {
    stars: 30,
    currency: 60,
    imgSrc: large
  }
];

export default function ExchangeScreen({ onExchange }) {
  const [token, setToken] = useCookie("token", "");
  const user = useUser();

  const buy = (stars, money) => {
    if (user.moneyBalance < money) {
      return;
    }
    authorizedRequest("user/buy", {
      method: "POST",
      body: { stars, money }
    }).then(() => onExchange(stars, money));
  };

  return (
    <Fragment>
      <Layout spanned narrow>
        <BackButton />
        <Title medium>Kantor</Title>
        <SaldoWrapper>
          <Label>Saldo</Label>
          <Caption>{user.moneyBalance} PLN</Caption>
        </SaldoWrapper>
        <ColumnContainer>
          {buyingOptions.map(({ stars, currency, imgSrc }) => (
            <Column disabled={user.moneyBalance < currency}>
              <Box center>
                <Image center src={imgSrc} />
                <StarCount>{stars}</StarCount>
              </Box>
              <Button primary small onClick={() => buy(stars, currency)}>
                Kup
              </Button>
              <Caption small center>
                {currency} PLN
              </Caption>
            </Column>
          ))}
        </ColumnContainer>
      </Layout>
    </Fragment>
  );
}
