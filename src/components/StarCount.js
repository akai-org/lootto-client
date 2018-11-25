import styled from 'react-emotion';
import star from '../assets/star.svg';

const StarCount = styled('span')`
  position: relative;
  font-weight: 700;
  padding-right: 16px;

  &::before {
    content: url(${star});
    position: absolute;
    width: 20px;
    height: 20px;
    left: -24px;
    top: 1px;
  }
`;

export default StarCount;
