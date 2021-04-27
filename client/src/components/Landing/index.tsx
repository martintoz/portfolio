import React from "react";
import { Social } from "../Social";
import { StyledLanding } from "./StyledLanding";

export const Landing = () => {
  return (
    <StyledLanding>
      <h1 className="landingName">Martín Tozer</h1>
      <Social />
    </StyledLanding>
  );
};
