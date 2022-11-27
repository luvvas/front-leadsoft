import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
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
    background: "#276678"
  }
`