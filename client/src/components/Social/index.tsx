import React from "react";
import { StyledSocial } from "./StyledSocial";

export const Social = () => {
  return (
    <StyledSocial>
      <ul>
        <li>
          <i className="fab fa-github"></i>
        </li>
        <li>
          <i className="fab fa-linkedin"></i>
        </li>
        <li>
          <i className="fas fa-envelope"></i>
        </li>
      </ul>
    </StyledSocial>
  );
};
