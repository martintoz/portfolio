import React, { useContext } from "react";
import { StyledLanguage } from "./StyledLanguage";
import { LanguageContext } from "../LanguageProvider";

export const Language = () => {
  const { updateLanguage } = useContext(LanguageContext);
  const handleUpdateLanguage = ({ target: { value } }: any) => {
    updateLanguage(value);
  };

  return (
    <StyledLanguage>
      <button value="en" onClick={handleUpdateLanguage}>ENG</button>
      <button onClick={handleUpdateLanguage} value="es">ESP</button>
    </StyledLanguage>
  );
};
