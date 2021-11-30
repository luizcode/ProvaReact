import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }
  body {
    background: #F7F7F7;
    -webkit-font-smoothing: antialiased;
    width: 100vw;
    height: 100vh;
  }
  body, input, textarea, button {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  button {
    cursor: pointer;
    border: none;
    outline: none;
    background: transparent;
  }

  input {
    border: none;
  }

  a {
    text-decoration: none;
  }

  @media (max-width: 767px) {
    :root {
      font-size: 12px;
    }
  }

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    :root {
      font-size: 14px;
    }
  }
`;
