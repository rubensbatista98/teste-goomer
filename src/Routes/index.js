import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "../pages/Home";
import RestaurantMenu from "../pages/RestaurantMenu";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/restaurante" component={RestaurantMenu} />
      </Switch>
    </Router>
  );
};

export default Routes;
