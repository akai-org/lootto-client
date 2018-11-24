import styled, { css } from 'react-emotion';

const Image = styled('img')`
  display: block;

  ${({ big }) =>
    big &&
    css`
      width: 75%;
    `}

  ${({ centered }) =>
    centered &&
    css`
      margin: 0 auto;
    `}
`;

export default Image;
