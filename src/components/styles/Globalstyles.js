import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: Cyber;
  src: url("https://assets.codepen.io/605876/Blender-Pro-Bold.otf");
}

 *{
    font-family: "Cyber", sans-serif;
     margin: 0;
     padding: 0;
     box-sizing: border-box;
 }
`