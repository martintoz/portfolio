import { createGlobalStyle } from "styled-components";

export const whiteMain = "#F0F0F0";
export const blackMain = "#151515";
export const redLight = "#ff616f";
export const redMain = "#ff1744";
export const redDark = "#c4001d";
export const yellowLight = "#EBD281";
export const blueLight = "#5E70EB";
export const greenLight = "#52EB76";

export const GlobalStyle = createGlobalStyle`
body, *{
  font-family: 'Roboto', sans-serif;
  margin:0;}
body{
  background-color: ${blackMain};
  color:${whiteMain};
  cursor: default;
  h2{
    padding-bottom:2vh;
  }
  h3{
    padding-bottom:1vh;
  }
  ul{
    list-style-type:none;
    margin-block:0;
    padding-inline:0;
  }
  a{
    text-decoration:none;
    color:${whiteMain};
    font-weight:bold;
    cursor: pointer;
    &:hover {
      color: white;
    }
  }
  i{
    transition: all 0.3s ease;
    &:hover {
      color: ${redLight};
    }
  }
  button{
    display:inline-block;
    padding:10px;
    border: ${whiteMain} solid 1px;
    background-color:${blackMain};
    transition: all 0.3s ease;
    border-radius:3px;
    &:hover{
      background-color:${whiteMain};
      color:${blackMain};
    }
  }
}
@media (max-width: 858px){
  h1{
    font-size:1.75em;
  }
  h2{
    font-size:1.25em;
    margin:3vh 0;
  }
  h3{
    font-size:1em;
  }
}
`;
