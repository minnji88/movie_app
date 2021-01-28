import React from 'react';
import {HashRouter, Route} from "react-router-dom";
import About from "./routes/About";
import Home from "./routes/Home";
import Navigation from "./components/Navigation";

function App(){
  return (
  <>
  <HashRouter>
    {/* url 이 "/" 일때만 home 렌더링을 해줌 */}
    <Navigation />
    <Route path="/" exact={true} component={Home} />
    <Route path="/about" exact={true} component={About}/>
  </HashRouter>
  </>
  );
}

export default App;