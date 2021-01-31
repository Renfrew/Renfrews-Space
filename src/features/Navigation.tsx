import React, { useState, SyntheticEvent, ReactElement } from 'react';
import { Switch, Route, useParams, useHistory } from 'react-router-dom';
import { Theme, makeStyles, createStyles } from '@material-ui/core/styles';

import { Paper, Tab, Tabs } from '@material-ui/core';

import space from './asserts/pexels-faaiq-ackmerd-1025469.jpg';
import AboutMe from './aboutme/About';
import Resume from './resume/About';
import Contact from './contact/Contact';
import NotFound404 from './NotFound404';

import { PathPara } from '../App.d';
import { Path } from './Constants';

const routes = [
  { path: Path.AboutMe, component: <AboutMe /> },
  { path: Path.Resume, component: <Resume /> },
  { path: Path.Contact, component: <Contact /> },
  { path: Path.Unknown, component: <NotFound404 /> },
];

// eslint-disable-next-line no-empty-pattern
const useStyles = makeStyles(({}: Theme) =>
  createStyles({
    container: {
      flexGrow: 1,
      backgroundImage: `url(${space})`,
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundBlendMode: 'difference',
    },
  })
);

export const NavigationBar = (): ReactElement => {
  const classes = useStyles();
  const { path } = useParams<PathPara>();
  const history = useHistory();
  const [selectedTab, setSelectedTab] = useState(`/${path}`);

  function onTabChange(_: SyntheticEvent, newTab: string) {
    setSelectedTab(newTab);
    history.push(newTab);
  }

  return (
    <Paper component="header" className={classes.container}>
      <Tabs centered value={selectedTab} onChange={onTabChange}>
        <Tab label="About me" value={Path.AboutMe} />
        <Tab label="Resume" value={Path.Resume} />
        <Tab label="Contact" value={Path.Contact} />
      </Tabs>
    </Paper>
  );
};

const Navigation = (): ReactElement => {
  return (
    <React.Fragment>
      <NavigationBar />
      <Switch>
        {routes.map((el) => (
          <Route key={el.path} path={el.path}>
            {el.component}
          </Route>
        ))}
      </Switch>
    </React.Fragment>
  );
};

export default Navigation;
