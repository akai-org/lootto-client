import React, { Component } from "react";
import Carousel from "../components/TutorialCarousel";
import Layout from "../components/Layout";
import Title from "../components/Title";
import Paragraph from "../components/Paragraph";
import Image from "../components/Image";

class TutorialScreen extends Component {
  constructor(props) {
    super(props);

    this.slides = [
      {
        title: "Odnajduj planety",
        text: "Przemierzaj galaktykę (albo swoje osiedle) w poszukiwaniu planet ze skarbami.",
        image: "",
      },
      {
        title: "Zbieraj gwiazdki",
        text: "Zdobędziesz je dzięki osiągnięciom lub kupując w sklepie lub polecając grę swoim znajomym.",
        image: "",
      },
      {
        title: "Zdobywaj nagrody",
        text: "Na planetach odnajdziesz skrzynki, w których ukryte są skarby - dodatkowe bonusy lub prawdziwe pieniądze.",
        image: "",
      }
    ];
  }

  render() {
    return (
      <Layout narrow spanned>
        <Carousel>
          {
            this.slides.map(({ title, text, image }, index) => (
              <div key={index} spanned distributed narrow>
                <Image big src={image} />
                <Title>{title}</Title>
                <Paragraph>{text}</Paragraph>
              </div>
            ))
          }
        </Carousel>
      </Layout>
      
    );
  }
}

export default TutorialScreen;