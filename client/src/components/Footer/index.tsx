import React from "react";
import { HashLink } from "react-router-hash-link";
import { Social } from "../Social";
import { StyledFooter } from "./StyledFooter";

export const Footer = () => {
  return (
    <StyledFooter>
      <div className="socialFooter">
        <Social />
      </div>
      <HashLink className="backToTop" smooth to="#App">
        <i className="fas fa-chevron-up"></i>
      </HashLink>
    </StyledFooter>
  );
};
