import styled from "styled-components";
import { blackMain, whiteMain } from "../App/GlobalStyle";

export const StyledLanguage = styled.div`
button{
    color:${whiteMain};
    background-color:${blackMain};
    border:none;
    font-weight:bold;
}
@media (max-width: 858px) {
    button{
        font-size:1em;
    }
}
`;
