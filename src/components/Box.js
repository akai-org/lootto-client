import styled, { css } from 'react-emotion';

const Box = styled('div')`
  border-radius: 20px;
  padding: 0.8rem 1.2rem;
  background-color: ${({ theme }) => theme.color.elements.box};
  box-sizing: border-box;
  margin-bottom: 1rem;

  strong {
    display: block;
    font-weight: ${({ theme }) => theme.font.weight.bold};
  }

  ${({ center }) =>
    center &&
    css`
      text-align: center;
    `}

  ${({ wide }) =>
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
      text-align: center;
      padding: 0.5rem;
      font-size: ${theme.font.size.label.tertiary};

      img {
        max-width: 6rem;
      }
    `}
`;

export default Box;
