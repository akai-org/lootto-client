import styled, { css } from 'react-emotion';

const Image = styled('img')`
  display: block;

  ${({ big, theme }) =>
    big &&
    css`
      background: ${theme.color.accent.primary.light};
      color: ${theme.color.accent.primary.base};
    `}
`;

export default Image;
