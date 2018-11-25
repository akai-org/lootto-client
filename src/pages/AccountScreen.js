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

export default function SettingsScreen() {
  // Mock
  const currency = 47;
  const thresh = 50;
  const winnings = 23;
  const bonus = 3;
  const achievement = 12;

  return (
    <Layout spanned narrow>
      <BackButton />
      <Title medium>Twoje konto</Title>
      <Label>Saldo</Label>
      <Box>
        <Caption big>{currency} PLN</Caption>
        {thresh > currency && <Paragraph small>Zbierz jeszcze {thresh - currency} PLN, aby móc wypłacić pieniądze.</Paragraph>}
      </Box>
      <ColumnContainer>
        <Column>
          <Button primary small>Zasil konto</Button>
        </Column>
        <Column>
          <Button small>Wypłać</Button>
        </Column>
      </ColumnContainer>
      <Label>Statystyki</Label>
      <Box>
        <Caption big>{winnings} PLN</Caption>
        <Paragraph small>Dotychczasowa wygrana ze skrzynek.</Paragraph>
      </Box>
      <ColumnContainer>
        <Column>
          <Box>
            <Caption big>{bonus}</Caption>
            <Paragraph small>Wykorzystane bonusy.</Paragraph>
          </Box>
        </Column>
        <Column>
          <Box>
            <Caption big>{achievement}</Caption>
            <Paragraph small>Zebrane achievementy.</Paragraph>
          </Box>
        </Column>
      </ColumnContainer>
    </Layout>
  );
}
