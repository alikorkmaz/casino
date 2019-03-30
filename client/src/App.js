import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./pages/Login";
import Games from "./pages/Games";
import PlayGame from "./pages/PlayGame";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/games" exact component={Games} />
        <Route path="/play/:code" exact component={PlayGame} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
