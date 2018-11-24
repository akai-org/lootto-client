import React, { Component } from 'react';
import styled, { css } from 'react-emotion';
import Siema from 'siema';
import Button from './Button';
import { Link } from 'react-router-dom';

const Wrapper = styled('div')`
  margin-top: 30px;
`;

const Content = styled('div')`
  position: relative;
  padding: 0;
`;

const Indicators = styled('ul')`
  margin: 30px 0 0;
  padding: 0;
  list-style-type: none;
  display: flex;
  justify-content: center;

  > li {
    padding: 0 1rem;
  }
`;

const IndicatorButton = styled('button')`
  box-sizing: border-box;
  position: relative;
  padding: 1rem;
  height: 10px;
  width: 40px;
  font-size: 0;
  &::after {
    display: block;
    content: "";
    background: ${({ theme }) => theme.color.elements.border};
    height: 2px;
    left: 0;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;
    transition: background-color ${({ theme }) => theme.effects.transition.quick};
  }
  ${({ theme, active }) => active && css`
    &::after {
      background: ${theme.color.accent.primary.light};
    }
  `}
`;

class Carousel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentSlide: 0,
    };
  }

  componentDidMount() {
    this.slider = new Siema({
      selector: '.carousel-slider',
      duration: 400,
      easing: 'ease-out',
      perPage: 1,
      startIndex: this.state.currentSlide,
      draggable: true,
      multipleDrag: true,
      threshold: 20,
      loop: true,
      onChange: () => {
        this.setState({
          currentSlide: this.slider.currentSlide,
        });
      },
    });
  }

  isLastSlide() {
    return this.state.currentSlide === this.props.children.length;
  }

  render() {
    return (
      <Wrapper>
        <Content>
          <div className="carousel-slider">{this.props.children}</div>
        </Content>
        <Indicators>
          {this.props.children.map((slide, index) => (
            <li key={index}>
              <IndicatorButton
                active={this.state.currentSlide === index}
                onClick={() => this.slider.goTo(index)}
              />
            </li>
          ))}
        </Indicators>
        {
          this.isLastSlide() ?
          <Button
            as={Link}
            to="/home"
          >
            Zaczynamy
          </Button>
          :
          <Button
            onClick={() => this.slider.next()}
          >
            Dalej
          </Button>
        }
        
      </Wrapper>
    );
  }
}

export default Carousel;