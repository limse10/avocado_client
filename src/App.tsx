import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Login } from "./components/Login";
import { ToolPage } from "./components/ToolPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/t" exact component={Home} />
        <Route path="/login" exact component={Login} />
        <Route path="/about" exact component={About} />
        <Route path="/t/:id" exact component={ToolPage} />
      </Switch>
    </Router>
  );
}

export default App;
