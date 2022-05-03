import React from "react";
import ReactDOM from "react-dom";
import { Route, Link, Routes, BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import User from "./User";
import Visit from "./Visit";
import notfound from "./notfound";

const routing = (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/user">User</Link>
        </li>
        <li>
          <Link to="/visit">Visit</Link>
        </li>
      </ul>
    </div>
    <Routes>
      <Route exact path="/" component={App} />
      <Route path="/user" component={User} />
      <Route path="/visit" component={Visit} />
      <Route component={notfound} />
    </Routes>
  </Router>
);
ReactDOM.render(routing, document.getElementById("root"));
