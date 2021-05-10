import React from "react";
import { StyledSocial } from "./StyledSocial";

export const Social = () => {
  return (
    <StyledSocial>
      <ul>
        <li>
          <a
            href="https://github.com/martintoz"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github"></i>
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/martintoz/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
        </li>
        <li>
          <a href="mailto:martin@tozer.ar" rel="noopener noreferrer" target="_blank">
            <i className="fas fa-envelope"></i>
          </a>
        </li>
      </ul>
    </StyledSocial>
  );
};
