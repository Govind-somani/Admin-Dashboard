import MainLayout from "../Pages/layouts/MainLayout";
import AppLayout from "../Pages/layouts/AppLayout";

import PageNotFound from "../Pages/PageNotFound";
import Login from "../Pages/auth/Login";
import Dashboard from "../Pages/app/dashboard/Dashboard";

const routes = [
  //   // admin panel
  {
    path: "/app",
    element: AppLayout,
    isPrivate: true,
    checkLogin: false,
    title: "Dashboard",
    routes: [
      {
        path: "/app/dashboard/",
        element: Dashboard,
        title: "Payment",
      },
    ],
  },

  {
    path: "/",
    element: MainLayout,
    exact: false,
    isPrivate: false,
    isAuthenticated: true,
    title: "Home",
    routes: [
      {
        path: "/auth/login",
        element: Login,
        title: "Login",
      },
    ],
  },

  {
    path: "*",
    element: PageNotFound,
    title: "Page Not Found",
  },
];
export default routes;
