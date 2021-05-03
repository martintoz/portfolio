import { createGlobalStyle } from "styled-components";

export const whiteMain = "#F0F0F0";
export const blackMain = "#151515";
export const redLight = "#ff616f";
export const redMain = "#ff1744";
export const redDark = "#c4001d";

export const GlobalStyle = createGlobalStyle`
body, *{
  background-color: ${blackMain};
  color:${whiteMain};
  font-family: 'Roboto', sans-serif;
  margin:0;}
body{
  cursor: default;
  h1{
    font-family:'Fredoka One', sans-serif;
  }
  ul{
    list-style-type:none;
    margin-block:0;
    padding-inline:0;
  }
  a{
    text-decoration:none;
    cursor: pointer;
  }
  i{
    transition: all 0.3s ease;
    &:hover {
      color: ${redLight};
    }
  }
}
`;
