import styled, { css } from 'react-emotion';

export const ColumnContainer = styled('div')`
  display: flex;
  margin: -0.5rem;
`;

export const Column = styled('div')`
  flex: 1;
  padding: 0.5rem;

  ${({ disabled }) => disabled && css`
    opacity: 0.3;
  `}
`;
