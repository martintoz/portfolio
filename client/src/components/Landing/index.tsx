import React, { useEffect } from "react";
import { HashLink } from "react-router-hash-link";
import { Social } from "../Social";
import { MartinTozer } from "./martinTozer";
import { StyledLanding } from "./StyledLanding";


export const Landing = () => {

  useEffect(() => {
    const logo:NodeListOf<SVGPathElement> = document.querySelectorAll("#logoMT path")
    for (let i = 0; i < logo.length; i++) {
      console.log(`Letter ${i} is ${logo[i].getTotalLength()}`)
      
    }
  },[])

  return (
    <StyledLanding>
      <div className="landingName">
        <MartinTozer />
        <h2>Frontend Developer</h2>
      </div>
      <ul className="index">
        <li>
          <HashLink smooth to="#aboutMe">
            <h2>About Me</h2>
          </HashLink>
        </li>
        <li>
          <HashLink smooth to="#projects">
            <h2>Projects</h2>
          </HashLink>
        </li>
      </ul>
      <Social />
    </StyledLanding>
  );
};
