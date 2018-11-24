import styled, { css } from 'react-emotion';
import PropTypes from 'prop-types';

const Button = styled('button')`
  cursor: pointer;
  display: inline-block;
  border: none;
  border-radius: ${({ theme }) => theme.size.borderRadius};
  line-height: ${({ theme }) => theme.font.lineHeight.caption};
  color: ${({ theme }) => theme.color.text.tertiary};
  font-size: ${({ theme }) => theme.font.size.label.tertiary};
  text-transform: uppercase;
  outline: none;
  padding: 1.2rem 0.4rem;
  width: 100%;
  font-weight: ${({ theme }) => theme.font.weight.bold};

  ${({ primary, theme }) =>
    primary &&
    css`
      background: ${theme.color.accent.primary.light};
      color: ${theme.color.accent.primary.base};
    `}

  ${({ secondary, theme }) =>
    secondary &&
    css`
      background: ${theme.color.accent.primary.base};
    `}
`;

Button.propTypes = {
  text: PropTypes.string,
  primary: PropTypes.bool,
  secondary: PropTypes.bool
};

Button.defaultProps = {
  text: null,
  primary: false,
  secondary: false
};

export default Button;
