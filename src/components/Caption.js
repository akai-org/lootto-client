import styled, { css } from 'react-emotion';

const Caption = styled('p')`
  font-size: ${({ theme }) => theme.font.size.heading.secondary};
  
  ${({ small, theme }) =>
  small &&
  css`
  font-size: ${theme.font.size.label.tertiary};
    `}

  ${({ center, theme }) =>
    center &&
    css`
      text-align: center;
    `}
`;

export default Caption;
