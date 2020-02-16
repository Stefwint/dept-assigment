import { createGlobalStyle, css } from 'styled-components';
import styledNormalize from 'styled-normalize';
import theme from '../../theme';
import { showClasses, hideClasses } from '../../utils/mediaQueries';

const GlobalStyle = createGlobalStyle`
  ${styledNormalize};

  ${css`
    ${showClasses};
    ${hideClasses};
  `}

  html {
    box-sizing: border-box;
  }

  body {
    font-family: ${theme.fonts.body};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow: ${props => (props.openMenu ? 'hidden' : 'initial')};
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    font-family: ${theme.fonts.heading};
  }

  img {
    max-width: 100%;
  }

  blockquote {
    margin: 0;
    font-family: ${theme.fonts.heading};
    line-height: 1.28;
  }

  select::-ms-expand {
    display: none;
  }

  .accessibly-hidden {
    position: absolute;
    left: -999em;
  }

  .border {
    border-top: 1px solid ${theme.colors.border};
  }

  .block {
    display: block;
  }

  .upper {
    text-transform: uppercase;
  }

`;

export default GlobalStyle;
