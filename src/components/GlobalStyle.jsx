import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
body {
    box-sizing: border-box;
    min-width: 320px;
    //background-color: rgb(3,37,65);
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
  h1,
  h2,
  h3,
  ul,
  p {
    margin: 0;
    padding: 0;
  }
  a {
    text-decoration:none;
  }
  button {
    cursor: pointer;
    padding: 0;
  }
  ul {
    list-style: none;
  }
`;