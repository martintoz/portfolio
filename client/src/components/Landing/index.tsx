import React from "react";
import { HashLink } from "react-router-hash-link";
import { Social } from "../Social";
import { StyledLanding } from "./StyledLanding";

export const Landing = () => {
  return (
    <StyledLanding>
      <h1 className="landingName">Martín Tozer</h1>
      <ul>
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
