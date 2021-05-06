import styled from "styled-components";
import { whiteMain } from "../App/GlobalStyle";

export const StyledProjects = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3vw;
  .projectsContainer {
    min-height: 40vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    ul {
      justify-self: flex-end;
      li {
        border: ${whiteMain} solid 1px;
        display: grid;
        grid-template-rows: auto;
        grid-template-columns: 5fr 1fr 2fr;
        grid-template-areas: "projectText . projectPhoto";
        grid-gap: 2vw;
        padding: 2vw;
        margin-bottom: 3vh;
        .projectPhoto {
          grid-area: projectPhoto;
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
          grid-area: projectText;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          .links {
            padding: 1vh 0;
            display: flex;
            gap: 1vw;
            i {
              font-size: 1.75em;
            }
          }
        }
      }
    }
  }
  @media (max-width: 858px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    .projectsContainer {
      ul {
        li {
          .projectText {
            gap: 10px;
            align-items: center;
            .links {
              gap: 5vw;
            }
          }
          grid-template-rows: auto;
          grid-template-columns: auto;
          grid-template-areas: "projectText" "projectPhoto";
          row-gap: 15px;
          text-align: justify;
        }
      }
    }
  }
`;
