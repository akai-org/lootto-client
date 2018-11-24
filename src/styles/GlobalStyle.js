import theme from "./theme";

const GlobalStyle = `
@import url('https://fonts.googleapis.com/css?family=Poppins:400,700');
  
  html {
    margin: 0;
  }

  body {
    background: ${theme.color.accent.primary.base};
    color: ${theme.color.text.base};
    font-family: ${theme.font.family};
    font-weight: ${theme.font.weight.base};
    margin: 0;
    overflow-x: hidden;  
  }

  h1, h2, h3, h4, h5, h6 {
    color: ${theme.color.text.primary};
    line-height: ${theme.font.lineHeight.heading}
  }

  h1 {
    font-size: ${theme.font.size.heading.primary};
  }

  h2 {
    font-size: ${theme.font.size.heading.secondary};
  }

  h3 {
    font-size: ${theme.font.size.heading.tertiary};
  }

  p {
    line-height: ${theme.font.lineHeight.text}; 
    color: ${theme.color.text.primary};
    margin: 1em 0 1.5em;
  }

  a {
    color: inherit;
    cursor: pointer;
    text-decoration: none;
    line-height: inherit;
  }

  img {
    max-width: 100%;
  }
`;

export default GlobalStyle;
