import React from "react";
import { HashLink } from "react-router-hash-link";
import { Social } from "../Social";
import { MartinTozer } from "./martinTozer";
import { StyledLanding } from "./StyledLanding";
import { T } from "../T";
import { Language } from "../Language";

export const Landing = () => {
  return (
    <StyledLanding>
      <Language />
      <div className="landingName">
        <MartinTozer />
        <h1>
          <T>job</T>
        </h1>
      </div>
      <ul className="index">
        <li>
          <HashLink smooth to="#aboutMe">
            <h2>
              <T>aboutMe</T>
            </h2>
          </HashLink>
        </li>
        <li>
          <HashLink smooth to="#projects">
            <h2>
              <T>projects</T>
            </h2>
          </HashLink>
        </li>
      </ul>
      <Social />
    </StyledLanding>
  );
};
