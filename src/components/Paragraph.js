import styled, { css } from 'react-emotion';

const Paragraph = styled('p')`
  ${({ small, theme }) =>
    small &&
    css`
      margin: 0 0 0.5rem;
      font-size: ${theme.font.size.label.tertiary};
    `}
`;

export default Paragraph;
