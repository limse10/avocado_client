import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Login } from "./components/Login";
import { ToolPage } from "./components/ToolPage";
import { Register } from "./components/Register";
import { Explore } from "./components/Explore";

import UserProvider from "./providers/UserProvider";

export const API_URL = process.env.REACT_APP_API_URL;

export interface Tool {
  id: number;
  name: string;
  description: string;
  url: string;
  author: string;
  category: string;
}
function App() {
  return (
    <UserProvider>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/t" exact component={Home} />
          <Route path="/login" exact component={Login} />
          <Route path="/explore" exact component={Explore} />
          <Route path="/about" exact component={About} />
          <Route path="/t/:id" exact component={ToolPage} />
          <Route path="/register" exact component={Register} />
        </Switch>
      </Router>
    </UserProvider>
  );
}

export default App;
