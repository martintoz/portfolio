import styled from "styled-components";

export const StyledAboutMe = styled.div`
margin: 3vw;
.skills{
	padding: 3vw 0;
	ul{
    width:70%;
    display: grid;
	grid-auto-flow: column;
	grid-template-columns: repeat(3, 1fr); 
	grid-template-rows: repeat(5, auto);} 
}
`;
