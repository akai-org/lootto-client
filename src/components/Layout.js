import styled, { css } from 'react-emotion';
import PropTypes from 'prop-types';

const Layout = styled('div')`
  box-sizing: border-box;
  width: 100%;
  padding: 2rem;

  ${({ fitted }) =>
    fitted &&
    css`
      height: ${window.innerHeight}px;
    `}

  ${({ spanned }) =>
    spanned &&
    css`
      min-height: ${window.innerHeight}px;
    `}

  ${({ narrow }) =>
    narrow &&
    css`
      max-width: 600px;
      margin-left: auto;
      margin-right: auto;
    `}

  ${({ distributed }) =>
    distributed &&
    css`
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    `}

  ${({ light, theme }) =>
    light &&
    css`
      background: ${theme.color.background.light};
    `}

  ${({ inner, theme }) =>
    inner &&
    css`
      padding-top: 0;
    `}

  ${({ inner, spanned, theme }) =>
    inner && spanned &&
    css`
      min-height: ${window.innerHeight - 78}px;
    `}
`;

Layout.propTypes = {
  fitted: PropTypes.bool,
  narrow: PropTypes.bool,
  distributed: PropTypes.bool,
  light: PropTypes.bool
};

export default Layout;
