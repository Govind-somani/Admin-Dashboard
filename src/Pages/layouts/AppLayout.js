import React from "react";
import { Routes } from "react-router-dom";
import RouteWithSubRoutes from "../../navigation/RouteWithSubRoutes";
import Dashboard from "../app/dashboard/Dashboard";
import NavBar from "../app/navbar/NavBar";
import SideBar from "../app/sidebar/SideBar";
// import Footer from '../main/footer/Footer';

const AppLayout = ({ history, location, routes, match }) => {
  return (
    <>
      <div className="wrapper">
        <NavBar />
        <SideBar />
        {match.path === "/app" && match.isExact && <Dashboard />}
        <Routes>
          {routes.map((route, index) => (
            <RouteWithSubRoutes key={index} {...route} />
          ))}
        </Routes>
      </div>
    </>
  );
};

export default AppLayout;
