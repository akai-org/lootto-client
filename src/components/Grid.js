import styled from 'react-emotion';

const Grid = styled('div')`
  display: grid;
  grid-template-columns: repeat(${props => props.cols}, 1fr);
  grid-gap: 1rem 1rem;
`;

export default Grid;