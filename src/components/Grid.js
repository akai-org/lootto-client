import styled, { css } from 'react-emotion';

const Grid = styled('div')`
  display: grid;
  grid-template-columns: repeat(${props => props.cols}, 1fr);
  grid-gap: 1rem 1rem;

  ${({ autofill }) =>
    autofill &&
    css`
      grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
      grid-auto-rows: minmax(110px, auto);

      div {
        margin-bottom: 0;
      }
    `}
`;

export default Grid;
