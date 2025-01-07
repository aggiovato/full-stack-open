import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  /* Reset general */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Nunito', sans-serif;
    color: #e1e5f2;
    background-color: #022b3a; 
    min-height: 100vh;
    display: block;
    overflow-x: hidden;
  }

  input, button, textarea {
    font-family: inherit;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default GlobalStyle;
