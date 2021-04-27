import { Route } from "react-router-dom";
import {Hello} from '../hello/hello';
import {GlobalStyle} from './GlobalStyle'
import { Landing } from "../Landing/index";

function App() {
  return( 
  <div className="App">
    <GlobalStyle/>
    <Route exact path='/' component={Landing}/>
    <Route path='/hello' component={Hello}/>
  </div>);
}

export default App;
