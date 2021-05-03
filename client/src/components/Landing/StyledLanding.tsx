import styled from "styled-components";

export const StyledLanding = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  min-height: 100vh;
  .landingName {
    display:flex;
    flex-direction:column;
    align-items:center;
    h1 {
      font-size: 10em;
    }
  }
  .index {
    display: flex;
    flex-direction: column;
    width: 10vw;
    li {
      padding-left: 0;
      text-align: left;
      width: 100%;
      transition: all 0.35s ease;
      &:hover {
        padding-left: 3vw;
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
`;
