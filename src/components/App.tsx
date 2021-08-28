import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./Navbar";
import Home from "../content/Home";
import Achievements from "../content/Achievements";
import Contact from "../content/Contact";
import Projects from "../content/Projects";
import School from "../content/School";
import NotFound from "../content/404";

function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Switch>
          <Route path="/achievements">
            <Achievements />
          </Route>
          <Route path="/school">
            <School />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
