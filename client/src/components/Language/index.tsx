import React, { useContext } from "react";
import { StyledLanguage } from "./StyledLanguage";
import { LanguageContext } from "../LanguageProvider";

export const Language = () => {
  const { language, updateLanguage } = useContext(LanguageContext);
  const handleUpdateLanguage = ({ target: { value } }: any) => {
    updateLanguage(value);
  };

  return (
    <StyledLanguage>
      <select value={language} onChange={handleUpdateLanguage}>
        <option value="en">English</option>
        <option value="es">Spanish</option>
      </select>
    </StyledLanguage>
  );
};
