import React from "react";
import { HashLink } from "react-router-hash-link";
import { Social } from "../Social";
import { MartinTozer } from "./martinTozer";
import { StyledLanding } from "./StyledLanding";


export const Landing = () => {

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
