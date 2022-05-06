import React from "react";

//use Routes instead of switch
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./core/Home";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </BrowserRouter>
  );
}


//exporting
export default Routes;
