import styled from "styled-components";
import {
  blueLight,
  greenLight,
  redLight,
  yellowLight,
} from "../App/GlobalStyle";

export const StyledLoader = styled.div`
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  div.container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  div > div {
    width: 3vw;
    height: 3vw;
    border-radius: 100%;
    margin: 2vw;
    background-image: linear-gradient(
      145deg,
      rgba(255, 255, 255, 0.5) 0%,
      rgba(0, 0, 0, 0) 100%
    );
    animation: bounce 1.5s 0.5s linear infinite;
  }
  .yellow {
    background-color: ${yellowLight};
  }

  .red {
    background-color: ${redLight};
    animation-delay: 0.1s;
  }

  .blue {
    background-color: ${blueLight};
    animation-delay: 0.2s;
  }

  .green {
    background-color: ${greenLight};
    animation-delay: 0.3s;
  }

  @keyframes bounce {
    0%,
    50%,
    100% {
      transform: scale(1);
    }
    25% {
      transform: scale(0.6);
    }
    75% {
      transform: scale(1.4);
    }
  }
  @media (max-width: 858px) {
    div > div {
      width: 13vw;
      height: 13vw;
      margin: 4vw;
    }
  }
`;
//THANKS https://codepen.io/prathameshkoshti/pen/bGNbMWr
