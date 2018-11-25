import React from "react";
import Layout from "../components/Layout";
import Title from "../components/Title";
import BackButton from "../components/BackButton";
import Caption from "../components/Caption";
import Label from "../components/Label";
import { ColumnContainer, Column } from "../components/Columns";
import Button from "../components/Button";
import Box from "../components/Box";
import Paragraph from "../components/Paragraph";
import useUser from "../hooks/useUser";
import { authorizedRequest } from "../utils/request";

export default function SettingsScreen({ onBalanceChange }) {
  const user = useUser();

  const currency = user.moneyBalance;
  const thresh = 50;
  const winnings = 23;
  const bonus = 3;
  const achievement = 12;

  const withdraw = () => {
    if (user.moneyBalance < thresh) return;

    const amount = thresh;
    authorizedRequest('user/withdraw', { method: 'POST', body: { amount }})
      .then(({moneyBalance}) => onBalanceChange(moneyBalance));
  };

  const deposit = () => {
    const amount = 10;
    authorizedRequest('user/deposit', { method: 'POST', body: { amount }})
      .then(({moneyBalance}) => onBalanceChange(moneyBalance));
  };

  return (
    <Layout spanned narrow>
      <BackButton />
      <Title medium>Twoje konto</Title>
      <Label>Saldo</Label>
      <Box>
        <Caption big>{currency} PLN</Caption>
        {thresh > currency && <Paragraph small inner>Zbierz jeszcze {thresh - currency} PLN, aby móc wypłacić pieniądze.</Paragraph>}
      </Box>
      <ColumnContainer>
        <Column>
          <Button primary small onClick={deposit}>Zasil konto</Button>
        </Column>
        <Column>
          <Button small onClick={withdraw}>Wypłać</Button>
        </Column>
      </ColumnContainer>
      <Label>Statystyki</Label>
      <Box>
        <Caption big>{winnings} PLN</Caption>
        <Paragraph small inner>Dotychczasowa wygrana ze skrzynek.</Paragraph>
      </Box>
      <ColumnContainer>
        <Column>
          <Box>
            <Caption big>{bonus}</Caption>
            <Paragraph small inner>Wykorzystane bonusy.</Paragraph>
          </Box>
        </Column>
        <Column>
          <Box>
            <Caption big>{achievement}</Caption>
            <Paragraph small inner>Zebrane osiągnięcia.</Paragraph>
          </Box>
        </Column>
      </ColumnContainer>
    </Layout>
  );
}
