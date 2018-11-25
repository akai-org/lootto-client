import React from "react";
import Layout from "../components/Layout";
import Title from "../components/Title";
import BackButton from "../components/BackButton";
import Label from "../components/Label";
import Button from "../components/Button";
import Box from "../components/Box";
import Paragraph from "../components/Paragraph";

export default function SocialScreen() {
  // Mock
  const customRefLink = `https://lootto.io/join-the-app&id=1610662136`;

  const shareLink = () => {
    if (navigator.share) {
      navigator
        .share({
          title: "Web Fundamentals",
          text: "Check out Web Fundamentals — it rocks!",
          url: "https://developers.google.com/web"
        })
        .then(() => console.log("Successful share"))
        .catch(error => console.log("Error sharing", error));
    }
  };

  return (
    <Layout spanned narrow>
      <BackButton />
      <Title medium>Społeczność</Title>
      <Label>Zaproś znajomych</Label>
      <Paragraph small>
        Udostępnij link poniżej swoim znajomym. Jeśli dołączą do aplikacji,
        zarówno Ty jak i Twój znajomy dostaniecie bonus.
      </Paragraph>
      <Box>
        <Paragraph inner>{customRefLink}</Paragraph>
      </Box>
      <Button primary onClick={shareLink}>
        Share
      </Button>
    </Layout>
  );
}
