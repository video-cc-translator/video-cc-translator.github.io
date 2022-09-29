import './fonts.css';
import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
  ${normalize};
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    font-size: 16px;
    font-family: 'Roboto', 'Noto Sans KR', sans-serif;
  }

  ul, li {
    list-style: none;
  }
`;

export default GlobalStyle;
