import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    overflow-x:hidden; 
    position:relative;
  }
  *, *::after, *::before {
    box-sizing: border-box;
  }
  body {
    font-family: "Montserrat",sans-serif;
    text-rendering: optimizeLegibility;
  }
  `
