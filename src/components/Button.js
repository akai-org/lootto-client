import styled, { css } from 'react-emotion';

const Button = styled('button')`
  cursor: pointer;
  display: inline-block;
  border: none;
  border-radius: ${({ theme }) => theme.size.borderRadius.max};
  line-height: ${({ theme }) => theme.font.lineHeight.caption};
  color: ${({ theme }) => theme.color.text.tertiary};
  font-size: ${({ theme }) => theme.font.size.label.base};
  text-transform: uppercase;
  outline: none;
  padding: 1.2rem 0.4rem;
  width: 100%;
  font-weight: ${({ theme }) => theme.font.weight.bold};
  background: none;
  border: ${({ theme }) => theme.size.line} solid
    ${({ theme }) => theme.color.accent.primary.light};
  color: ${({ theme }) => theme.color.text.primary};

  ${({ primary, theme }) =>
    primary &&
    css`
      background: ${theme.color.accent.primary.light};
      color: ${theme.color.accent.primary.base};
    `}

  ${({ small, theme }) =>
    small &&
    css`
      font-size: ${theme.font.size.label.tertiary};
      padding: 0.5rem 0.2rem;
    `}

  ${({ narrow }) =>
    narrow &&
    css`
      width: initial;
      min-width: 100px;
    `}
`;

export default Button;
