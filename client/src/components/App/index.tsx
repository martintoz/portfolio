import { Route } from "react-router-dom";
import {Projects} from '../Projects';
import {GlobalStyle} from './GlobalStyle'
import { Landing } from "../Landing";
import { AboutMe } from '../AboutMe';

function App() {
  return( 
  <div className="App">
    <GlobalStyle/>
    <Landing />
    <AboutMe />
    <Projects />
  </div>);
}

export default App;
