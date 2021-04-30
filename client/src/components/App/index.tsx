// import { Route } from "react-router-dom";
import {Projects} from '../Projects';
import {GlobalStyle} from './GlobalStyle'
import { Landing } from "../Landing";

function App() {
  return( 
  <div className="App">
    <GlobalStyle/>
    <Landing />
    <Projects />
  </div>);
}

export default App;
