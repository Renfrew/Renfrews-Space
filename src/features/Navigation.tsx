import React, { SyntheticEvent } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Theme, makeStyles, createStyles } from '@material-ui/core/styles';

import { Paper, Tab, Tabs } from '@material-ui/core';

import AboutMe from './aboutme/About';
import Resume from './resume/About';
import Contact from './contact/About';
import NotFound404 from './NotFound404';
import { Path } from './Constants';

const routes = [
  { path: Path.AboutMe, component: <AboutMe /> },
  { path: Path.AboutMe, component: <Resume /> },
  { path: Path.AboutMe, component: <Contact /> },
  { path: Path.Unknown, component: <NotFound404 /> },
];

// eslint-disable-next-line no-empty-pattern
const useStyles = makeStyles(({}: Theme) =>
  createStyles({
    container: {
      flexGrow: 1,
    },
  })
);

export const NavigationBar = () => {
  const classes = useStyles();

  function onTabChange(_: SyntheticEvent, newTab: string) {
    console.warn(newTab);
  }

  return (
    <Paper className={classes.container}>
      <Tabs centered onChange={onTabChange}>
        <Tab label="About me" value={Path.AboutMe} />
        <Tab label="Resume" value={Path.Resume} />
        <Tab label="Contact" value={Path.Contact} />
      </Tabs>
    </Paper>
  );
};

const Navigation = () => {
  return (
    <Switch>
      <NavigationBar />
      {routes.map((el) => (
        <Route key={el.path} path={el.path}>
          {el.component}
        </Route>
      ))}
    </Switch>
  );
};

export default Navigation;
