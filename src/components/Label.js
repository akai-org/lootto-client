import styled, { css } from 'react-emotion';

const Label = styled('h2')`
  font-size: ${({ theme }) => theme.font.size.heading.base};
`;

export default Label;
