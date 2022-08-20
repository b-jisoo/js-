import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
}

ul {
  list-style: none;
  padding: 0;
}

#root {
  max-width: 900px;
  margin: 0 auto;
  padding: 0 10px;
}

`;

export default GlobalStyle;
