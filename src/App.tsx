import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import CssBaseline from '@material-ui/core/CssBaseline';

// Temporary until Material-UI has a stable version
import StyledEngineProvider from '@material-ui/core/StyledEngineProvider';

import Home from './features/Home';
import NotFound404 from './features/NotFound404';

const routes = [
  { path: '/', component: <Home /> },
  { path: '*', component: <NotFound404 /> },
];

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <CssBaseline />
      <Router>
        <Switch>
          {routes.map((el) => (
            <Route key={el.path} path={el.path}>
              {el.component}
            </Route>
          ))}
        </Switch>
      </Router>
    </StyledEngineProvider>
  );
}

export default App;
