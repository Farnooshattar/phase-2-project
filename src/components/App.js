import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CatPage from "./pages/CatPage";
import TicTacToe from "./pages/TicTacToe";
import DisplayCat from "./pages/DisplayCat";
import CatNavBar from "./CatNavBar";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <div>
            <CatNavBar />
          </div>
        </header>

        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/cats">
            <CatPage />
          </Route>
          <Route path="/tictactoe">
            <TicTacToe />
          </Route>
          <Route path="/cats/:id">
            <DisplayCat />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
