import './App.css';
import React from "react";
import { Route, Switch } from "react-router-dom";
import Layout from './Layout/Layout';

function App() {
  return (
    <div className="app-routes">
      <Switch>
        <Route exact path="/">
          <Layout />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
