import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "../pages/Home";
import RestaurantPage from "../pages/RestaurantPage";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/restaurante" component={RestaurantPage} />
      </Switch>
    </Router>
  );
};

export default Routes;
