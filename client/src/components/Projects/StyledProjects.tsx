import styled from "styled-components";
import { whiteMain } from "../App/GlobalStyle";

export const StyledProjects = styled.div`
  ul {
    margin:3vw;
    li {
      border: ${whiteMain} solid 1px;
      display: grid;
      grid-template-rows: auto;
      grid-template-columns: 3fr 2fr;
      padding:2vw;
      margin-bottom:3vh;
      img {
        width: 100%;
      }
      .links {
        display:flex;
        gap:1vw;
        i {
          font-size: 1.75em;
        }
      }
      &:nth-child(even) {
        grid-template-columns: 2fr 3fr;
        img {
          order: 1;
        }
        div {
          order: 2;
        }
      }
    }
  }
`;
