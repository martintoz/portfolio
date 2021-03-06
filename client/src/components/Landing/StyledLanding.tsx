import styled from "styled-components";
import { whiteMain } from "../App/GlobalStyle";

export const StyledLanding = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  min-height: 100vh;
  .landingName {
    display: flex;
    flex-direction: column;
    align-items: center;
    h1 {
      opacity: 0;
      animation: fadeIn 1.5s forwards 2s;
    }
    @keyframes fadeIn {
      to {
        opacity: 1;
      }
    }
    #logoMT {
      animation: fill 0.5s ease forwards 2s;

      width: 70vw;

      path:nth-child(1) {
        stroke-dasharray: 974px;
        stroke-dashoffset: 974px;
        animation: line-anim 1s ease forwards;
      }
      path:nth-child(2) {
        stroke-dasharray: 567px;
        stroke-dashoffset: 567px;
        animation: line-anim 1s ease forwards 0.2s;
      }
      path:nth-child(3) {
        stroke-dasharray: 400px;
        stroke-dashoffset: 400px;
        animation: line-anim 1s ease forwards 0.6s;
      }
      path:nth-child(4) {
        stroke-dasharray: 508px;
        stroke-dashoffset: 508px;
        animation: line-anim 1s ease forwards 0.8s;
      }
      path:nth-child(5) {
        stroke-dasharray: 477px;
        stroke-dashoffset: 477px;
        animation: line-anim 1s ease forwards 1s;
      }
      path:nth-child(6) {
        stroke-dasharray: 585px;
        stroke-dashoffset: 585px;
        animation: line-anim 1s ease forwards 1.2s;
      }
      path:nth-child(7) {
        stroke-dasharray: 624px;
        stroke-dashoffset: 624px;
        animation: line-anim 1s ease forwards;
      }
      path:nth-child(8) {
        stroke-dasharray: 537px;
        stroke-dashoffset: 537px;
        animation: line-anim 1s ease forwards 0.3s;
      }
      path:nth-child(9) {
        stroke-dasharray: 596px;
        stroke-dashoffset: 596px;
        animation: line-anim 1s ease forwards 0.6s;
      }
      path:nth-child(10) {
        stroke-dasharray: 624px;
        stroke-dashoffset: 624px;
        animation: line-anim 1s ease forwards 0.9s;
      }
      path:nth-child(11) {
        stroke-dasharray: 400px;
        stroke-dashoffset: 400px;
        animation: line-anim 1s ease forwards 1.2s;
      }
      @keyframes line-anim {
        to {
          stroke-dashoffset: 0;
        }
      }
      @keyframes fill {
        from {
          fill: transparent;
        }
        to {
          fill: ${whiteMain};
        }
      }
    }
  }
  .index {
    opacity: 0;
    animation: fadeIn 1.5s forwards 2s;
    display: flex;
    flex-direction: column;
    h2 {
      text-transform: capitalize;
    }
    li {
      padding-left: 0;
      text-align: center;
      width: 100%;
      transition: all 0.35s ease;
      &:hover {
        transform: scale(1.2);
      }
    }
  }
  /* ul {
    li {
      a {
        h2 {
          text-align:left;
          &:hover {
            padding-left: 2vw;
          }
        }
      }
    }
  } */
  @media (max-width: 858px) {
    .landingName {
      #logoMT {
        width: 90vw;
        margin-bottom: -5vh;
      }
    }
  }
`;
