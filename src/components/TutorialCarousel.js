import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'react-emotion';
import Siema from 'siema';
import Button from './Button';
import { withRouter } from "react-router";
import useCookie from "../hooks/useCookie";

const Wrapper = styled('div')`
  margin-top: 30px;
`;

const Content = styled('div')`
  position: relative;
  padding: 0;
`;

const Indicators = styled('ul')`
  padding: 0;
  list-style-type: none;
  display: flex;
  margin: 0 -1rem 30px;

  > li {
    flex: 1;
    padding: 0 1rem;
  }
`;

const IndicatorButton = styled('button')`
  background: none;
  outline: none;
  border: none;
  box-sizing: border-box;
  position: relative;
  padding: 1rem;
  height: 10px;
  width: 100%;
  font-size: 0;
  &::after {
    display: block;
    content: "";
    background: ${({ theme }) => theme.color.elements.line};
    height: ${({ theme }) => theme.size.line};
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

class TutorialCarousel extends Component {
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
      loop: false,
      onChange: () => {
        this.setState({
          currentSlide: this.slider.currentSlide,
        });
      },
    });
  }

  isLastSlide() {
    return this.state.currentSlide === this.props.children.length - 1;
  }

  render() {
    const { history, setCookie } = this.props;

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
            primary
            onClick={() => {
              setCookie(true);
              history.push('/game');
            }}
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

TutorialCarousel.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
};

const TutorialWithCookie = (props) => {
  const [, setTutorialCompleted] = useCookie("tutorialCompleted", false);
  
  return <TutorialCarousel setCookie={v => setTutorialCompleted(v)} {...props} />
}

export default withRouter(TutorialWithCookie);