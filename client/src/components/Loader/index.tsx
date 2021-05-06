import React from "react";
import { StyledLoader } from "./StyledLoader";

export const Loader = () => {
  return (
    <StyledLoader>
      <div className="container">
        <div className="red"></div>
        <div className="yellow"></div>
        <div className="green"></div>
        <div className="blue"></div>
      </div>
    </StyledLoader>
  );
};
