import styled, { css } from 'react-emotion';

const Paragraph = styled('p')`
  ${({ small, theme }) =>
    small &&
    css`
      font-size: ${theme.font.size.label.tertiary};
    `}

  ${({ inner, theme }) =>
    inner &&
    css`
      margin: 0.5rem 0;
    `}

  ${({ inner, small, theme }) =>
    inner && small &&
    css`
      margin-top: 0;
    `}
`;

export default Paragraph;
