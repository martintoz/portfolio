import { Projects } from "../Projects";
import { GlobalStyle } from "./GlobalStyle";
import { Landing } from "../Landing";
import { AboutMe } from "../AboutMe";
import { Footer } from "../Footer";
import { useContext } from "react";
import { LanguageContext } from "../LanguageProvider";

function App() {
  const { language, updateLanguage } = useContext(LanguageContext);
  const handleUpdateLanguage = ({ target: { value } }: any) => {
    updateLanguage(value);
  };
  return (
    <div className="App" id="App">
      <select value={language} onChange={handleUpdateLanguage}>
        <option value="en">English</option>
        <option value="es">Spanish</option>
      </select>
      <GlobalStyle />
      <Landing />
      <AboutMe />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
