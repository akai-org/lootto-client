import styled, { css } from 'react-emotion';

const Title = styled('h1')`
  ${({ medium, theme }) =>
    medium &&
    css`
      font-size: ${theme.font.size.heading.secondary};
    `}
`;

export default Title;
