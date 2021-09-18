import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { publicRoutes, privateRoutes } from "./routes";
import PrivateRoutes from "./PrivateRoutes";
import PublicRoutes from "./PublicRoutes";

const Routes = () => {
  return (
    <Router>
      {publicRoutes.map((r) => (
        <Switch key={r.path}>
          <PublicRoutes>
            <Route path={r.path} exact={r.exact} component={r.component} />
          </PublicRoutes>
        </Switch>
      ))}
      {privateRoutes.map((r) => (
        <Switch key={r.path}>
          <PrivateRoutes>
            <Route path={r.path} exact={r.exact} component={r.component} />
          </PrivateRoutes>
        </Switch>
      ))}
    </Router>
  );
};

export default Routes;
