import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    font-size: 1rem;
    font-weight: 400;
  }

  * {
    font-family: 'Roboto';
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: bordex-box;

    &:focus {
      outline: 0;
    }
  }

  ul {
    list-style: none;
  }

  body {
    min-width: 320px;
    min-height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;
    background: #5772f7;
  }
`