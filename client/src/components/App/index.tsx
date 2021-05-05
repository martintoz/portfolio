import {Projects} from '../Projects';
import {GlobalStyle} from './GlobalStyle'
import { Landing } from "../Landing";
import { AboutMe } from '../AboutMe';
import { Footer } from '../Footer';

function App() {
  return( 
  <div className="App" id="App">
    <GlobalStyle/>
    <Landing />
    <AboutMe />
    <Projects />
    <Footer />
  </div>);
}

export default App;
