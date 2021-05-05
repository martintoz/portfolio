import styled from "styled-components";
import { blackMain, whiteMain } from "../App/GlobalStyle";

export const StyledAboutMe = styled.div`
  background-color: ${whiteMain};
  color: ${blackMain};
  .parallax {
    padding: 3vw;
    background: url("https://img.icons8.com/pastel-glyph/2x/laptop-coding--v2.png")
      no-repeat 95% 15%;
    background-attachment: fixed;
    button {
      border: ${blackMain} solid 1px;
      background-color: ${whiteMain};
      &:hover {
        background-color: ${blackMain};
        color: ${whiteMain};
      }
    }
    a {
      color: ${blackMain};
      &:hover {
        color: black;
      }
    }
    .bio{
      li{
        margin-bottom:2em;
        &:last-of-type{
          margin-bottom:0;
        }
      }
    }
    .skills {
      padding: 3vw 0;
      ul {
        width: 70%;
        display: grid;
        grid-auto-flow: column;
        grid-template-columns: repeat(4, auto);
        grid-template-rows: repeat(5, auto);
      }
    }
  }
  @media (max-width: 1100px){
    .parallax{
      background:none;
    }
  }
  @media (max-width: 858px){
    .parallax{
      display:flex;
        flex-direction:column;
        align-items:center;
      button{
        margin:3vh 0;
      }
      h2{
        text-align:center;
      }
      .skills{
        width:100%;
        display:flex;
        flex-direction:column;
        align-items:center;
        h3{
          text-align:center;
        }
        ul{
          width:80%;
          grid-template-columns: 1fr;
        grid-template-rows: repeat(10, auto);
        }
      }
    }
  }
`;
