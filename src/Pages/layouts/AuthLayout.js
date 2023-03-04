import React from 'react';
import { Switch } from 'react-router-dom';

import RouteWithSubRoutes from '../../navigation/RouteWithSubRoutes';
import Navbar from '../main/navbar/Navbar';

const AuthLayout = ({ routes }) => (
  <div>
    <Navbar />
    <Switch>
      {routes.map((route, index) => (
        <RouteWithSubRoutes key={index} {...route} />
      ))}
    </Switch>
  </div>
);

export default AuthLayout;
