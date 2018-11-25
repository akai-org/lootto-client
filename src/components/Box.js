import styled, { css } from 'react-emotion';

const Box = styled('div')`
  border-radius: 20px;
  padding: 0.8rem 1.2rem;
  background-color: ${({ theme }) => theme.color.elements.box};
  box-sizing: border-box;
  &:not(:last-child) {
    margin-bottom: 2rem;
  }

  strong {
    display: block;
    font-weight: ${({ theme }) => theme.font.weight.bold};
  }

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

      img {
        max-width: 8rem;
      }
    `}
`;

export default Box;
