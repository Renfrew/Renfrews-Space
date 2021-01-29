import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import CssBaseline from '@material-ui/core/CssBaseline';

import Home from './features/Home';
import NotFound404 from './features/NotFound404';

const routes = [
  { path: '/', component: <Home /> },
  { path: '*', component: <NotFound404 /> },
];

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Router>
        <Switch>
          {routes.map((el) => (
            <Route key={el} path={el.path}>
              {el.component}
            </Route>
          ))}
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
