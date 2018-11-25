import styled, { css } from 'react-emotion';

// style={{}}//200deg

const Box = styled('div')`
  border-radius: 20px;
  padding: 0.8rem 1.2rem;
  background-color: ${({ theme }) => theme.color.elements.box};
  box-sizing: border-box;
  margin-bottom: 1rem;

  img {
    filter: hue-rotate(${({ boxType }) => boxType})
  }

  strong {
    display: block;
    font-weight: ${({ theme }) => theme.font.weight.bold};
  }

  ${({ center }) =>
    center &&
    css`
      text-align: center;
    `}

  ${({ wide, theme }) =>
    wide &&
    css`
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;

      img {
        max-width: 3.6rem;
      }
    `}

  ${({ square, theme }) =>
    square &&
    css`
      display: inline-block;
      margin-bottom: 2rem;
      flex: 1;

      img {
        max-width: 4rem;
      }
    `}
`;

export default Box;
