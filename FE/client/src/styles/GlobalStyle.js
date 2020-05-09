import { createGlobalStyle, css } from 'styled-components';
import { reset } from 'styled-reset';

const fonts = css`
@font-face { 
    font-family: 'ChosunGs'; 
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@1.0/ChosunGs.woff') format('woff'); 
    font-weight: normal; 
    font-style: normal; 
    }
`;

const GlobalStyle = createGlobalStyle`
  ${reset}
  ${fonts}

  body {
    font-family: "ChosunGs", -apple-system, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    width : 100%;
    height: 100vh;
  }
  #root {
    height : 100%;
  }
`;

export default GlobalStyle