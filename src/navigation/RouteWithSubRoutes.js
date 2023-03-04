import React from "react";
import { Route, useNavigate } from "react-router-dom";

const RouteWithSubRoutes = (route) => {
  console.log("Route=======>", route);
  const navigate = useNavigate();
  return (
    // <Route
    //   path={route.path}
    //   render={(props) => <route.component {...props} routes={route.routes} />}
    // />
    <Route
      path={route.path}
      render={(props) =>
        route.isPrivate
          ? route.isAuthenticated
            ? route.component && (
                <route.component
                  {...props}
                  routes={route.routes}
                  isAuthenticated={route.isAuthenticated}
                />
              )
            : // <Redirect to="/auth/login" />
              navigate("/auth/login")
          : route.checkLogin
          ? !route.isAuthenticated
            ? route.component && (
                <route.component
                  {...props}
                  routes={route.routes}
                  isAuthenticated={route.isAuthenticated}
                />
              )
            : // <Redirect to="/app" />
              navigate("/app")
          : route.component && (
              <route.component
                {...props}
                routes={route.routes}
                isAuthenticated={route.isAuthenticated}
              />
            )
      }
    />
  );
};

export default RouteWithSubRoutes;
