import React from 'react';
import { Switch, Route } from 'react-router-dom';

import AboutMe from './aboutme/About';
import NotFound404 from './NotFound404';

const routes = [
  { path: '/about', component: <AboutMe /> },
  { path: '*', component: <NotFound404 /> },
];

const Navigation = () => {
  return (
    <Switch>
      {routes.map((el) => (
        <Route key={el.path} path={el.path}>
          {el.component}
        </Route>
      ))}
    </Switch>
  );
};

export default Navigation;
