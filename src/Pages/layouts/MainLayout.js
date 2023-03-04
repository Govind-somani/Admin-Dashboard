import React from "react";
import { Routes } from "react-router-dom";

import RouteWithSubRoutes from "../../navigation/RouteWithSubRoutes";

// const MainLayout = ({ routes, match }) => {
const MainLayout = (props) => {
  const checkPath = (obj) => {
    if (obj.path === props.location.pathname || props.location.pathname === "/")
      return true;
    return false;
  };

  const showNavbarFooter = props.routes.some(checkPath);

  return (
    <>
      {showNavbarFooter}
      <div
        className={
          showNavbarFooter
            ? "white-box fron-end-wrapper pt-5"
            : "white-box fron-end-wrapper pt-5 pt-0-biolink"
        }
      >
        {props.match.path === "/" && props.match.isExact}

        <Routes>
          {props.routes.map((route, index) => (
            <RouteWithSubRoutes key={index} {...route} />
          ))}
        </Routes>
      </div>
      {showNavbarFooter}
    </>
  );
};
export default MainLayout;
