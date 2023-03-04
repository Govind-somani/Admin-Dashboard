import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";

import ScrollToTop from "../Components/ScrollToTop";
import routes from "./routes";
import RouteWithSubRoutes from "./RouteWithSubRoutes";

const RootNavigator = () => {
  // console.log('ALL State Auth=>>', state.auth ? state.auth : '');
  console.log(routes);
  return (
    <Router>
      {/* <ScriptInjector /> */}
      {/* <ScrollToTop /> */}
      <Switch>
        {routes.map(
          (route, index) => (
            console.log(route), (<RouteWithSubRoutes key={index} {...route} />)
          )
        )}
      </Switch>
    </Router>
  );
};

export default RootNavigator;
