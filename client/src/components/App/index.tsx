import { Projects } from "../Projects";
import { GlobalStyle } from "./GlobalStyle";
import { Landing } from "../Landing";
import { AboutMe } from "../AboutMe";
import { Footer } from "../Footer";
import { Language } from "../Language";

function App() {
  
  return (
    <div className="App" id="App">
      <GlobalStyle />
      <Language />
      <Landing />
      <AboutMe />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
