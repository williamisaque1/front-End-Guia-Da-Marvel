import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import App from "./page/Home/App";
import Personagens from "./page/Personagens/Personagens";
import reportWebVitals from "./reportWebVitals";
import { Document } from "./page/Home/styleApp";

ReactDOM.render(
  <React.StrictMode>
    <Document />
    <Router>
      <Switch>
        <Route path="/" exact component={App}></Route>
        <Route path="/menu/personagens" exact component={Personagens}></Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
