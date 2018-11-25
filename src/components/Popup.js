import styled, { css } from 'react-emotion';
import React from 'react';

const PopupWrapper = styled('div')`
  display: inline-block;
  width: 100%;
  position: relative;
  max-width: 80%;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.color.background.light};
  border-radius: ${({ theme }) => theme.size.borderRadius.big};
  color: ${({ theme }) => theme.color.text.tertiary};
  padding: 1.3rem;
  font-size: ${({ theme }) => theme.font.size.label.base};
  opacity: 0;
  transform: scale(0);
  animation: appear-zoom 0.8s forwards cubic-bezier(0.57, 0.18, 0.41, 1.21);

  @keyframes appear-zoom {
    0% {
      opacity: 0;
      transform: scale(0);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }
  strong,
  span {
    color: ${({ theme }) => theme.color.accent.primary.base};
    display: block;
  }

  .close {
    color: ${({ theme }) => theme.color.accent.primary.base};
    position: absolute;
    border-radius: 50%;
    width: 36px;
    height: 36px;
    right: -18px;
    top: -18px;
    background-color: ${({ theme }) => theme.color.background.light};
    box-shadow: ${({ theme }) => theme.effects.shadow};

    &::before,
    &::after {
      position: absolute;
      top: 7px;
      left: 17px;
      content: ' ';
      height: 22px;
      width: 3px;
      background-color: #333;
    }
    &::before {
      transform: rotate(45deg);
    }
    &::after {
      transform: rotate(-45deg);
    }
  }
`;

const Popup = ({ name, description, close }) => (
  <PopupWrapper>
    <div className="close" onClick={close} />
    {name && <strong>{name}</strong>}
    {description && <span>{description}</span>}
  </PopupWrapper>
);

export default Popup;
