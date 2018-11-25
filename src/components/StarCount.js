import styled, { css } from 'react-emotion';
import star from '../assets/star.svg';

const StarCount = styled('span')`
  position: relative;
  font-weight: 700;
  padding-right: 16px;
  display: flex;
  align-items: center;

  &::before {
    content: url(${star});
    display: block;
    padding-right: 6px;
    width: 20px;
    height: 20px;
  }

  ${({ big }) =>
    big &&
    css`
      &::before {
        width: 30px;
        height: 30px;
      }
    `}
`;

export default StarCount;
