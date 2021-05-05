import styled from "styled-components";
import { redLight, whiteMain } from "../App/GlobalStyle";

export const StyledFooter = styled.div`
  padding:3vh 3vw;
  display:grid;
  grid-template-columns:5fr 3fr 5fr;
  grid-template-rows:auto;
  grid-template-areas: ". socialFooter backToTop";
  .socialFooter{
    grid-area: socialFooter;
  }
  .backToTop{
    grid-area: backToTop;
    font-size:1.5em;
    width:1.7em;
    height:1.7em;
    justify-self:end ;
    border: ${whiteMain} 1px solid;
    display:flex;
    justify-content:center;
    align-items:center;
    transition: all 0.3s ease;
    &:hover{
      border-color:${redLight};
      color:${redLight};
    }
  }
`;
