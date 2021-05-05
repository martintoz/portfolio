import styled from "styled-components";
import { blackMain, whiteMain } from "../App/GlobalStyle";

export const StyledAboutMe = styled.div`
  background-color: ${whiteMain};
  color: ${blackMain};
  .parallax {
    padding: 3vw;
    background: url("https://img.icons8.com/pastel-glyph/2x/laptop-coding--v2.png")
      no-repeat 95% 10%;
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
    .skills {
      padding: 3vw 0;
      ul {
        width: 70%;
        display: grid;
        grid-auto-flow: column;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(5, auto);
      }
    }
  }
`;
