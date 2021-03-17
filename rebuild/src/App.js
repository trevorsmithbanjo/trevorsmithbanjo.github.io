import React from "react";
import About from "./pages/About";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Portfolio from "./pages/Portfolio";


function App() {

  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={About} />
          <Route exact path="/About" component={About} />
          <Route exact path="/Portfolio" component={Portfolio} />
        </Switch>
      </div>
    </Router>

  )
}

export default App;
