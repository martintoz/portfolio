import styled from "styled-components";

export const StyledSocial = styled.div`
  font-size: 3em;
  ul {
    display: flex;
    justify-content: center;
    gap: 2vw;
  }
  @media (max-width: 858px){
    ul{
      gap:5vw;
    }
  }
`;
