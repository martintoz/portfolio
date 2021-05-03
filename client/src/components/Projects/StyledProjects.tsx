import styled from "styled-components";
import { whiteMain } from "../App/GlobalStyle";

export const StyledProjects = styled.div`
  margin: 3vw;
  ul {
    li {
      border: ${whiteMain} solid 1px;
      display: grid;
      grid-template-rows: auto;
      grid-template-columns: 3fr 2fr;
      grid-gap: 2vw;
      padding: 2vw;
      margin-bottom: 3vh;
      .projectPhoto {
        overflow: hidden;
        img {
          width: 100%;
          transition: transform 0.35s ease;
          &:hover {
            transform: scale(1.1);
          }
        }
      }
      .projectText {
        .links {
          padding:1vh 0;
          display: flex;
          gap: 1vw;
          i {
            font-size: 1.75em;
          }
        }
      }
      &:nth-child(even) {
        grid-template-columns: 2fr 3fr;
        .projectPhoto {
          img {
            order: 1;
          }
        }
        .projectText {
          order: 2;
        }
      }
    }
  }
`;
