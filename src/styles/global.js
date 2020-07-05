import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';
import 'react-perfect-scrollbar/dist/css/styles.css';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root{
    height: 100%;
    min-width: 100%;
  }

  body {
    font: 14px 'Roboto', sans-serif;
    background: #fff;
    -webkit-font-smoothing: antialiased !important;
  }

  ul {
    list-style: none;
  }
`;
