import React from "react";
import { BrowserRouter as Router, Routes } from "react-router-dom";

import ScrollToTop from "../Components/ScrollToTop";
import routes from "./routes";
import RouteWithSubRoutes from "./RouteWithSubRoutes";

const RootNavigator = () => {
  // console.log('ALL State Auth=>>', state.auth ? state.auth : '');
  console.log(routes);
  return (
    <Router>
      {/* <ScriptInjector /> */}
      <ScrollToTop />
      <Routes>
        {routes.map((route, index) => (
          <RouteWithSubRoutes key={index} {...route} />
        ))}
      </Routes>
    </Router>
  );
};

export default RootNavigator;
