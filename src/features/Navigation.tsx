import React, { useState, SyntheticEvent, ReactElement } from 'react';
import { Switch, Route, useParams, useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

import { IconButton, Paper, Tab, Tabs } from '@material-ui/core';

import space from './asserts/pexels-faaiq-ackmerd-1025469.jpg';
import AboutMe from './aboutme/About';
// import Resume from './resume/About';
import Projects from './projects/Projects';
import Contact from './contact/Contact';
import NotFound404 from './NotFound404';

import { PathPara } from '../App.d';
import { Path } from './Constants';
import githubIcon from './asserts/GitHub-Mark-64px.png';
import linkedInIcon from './asserts/linkedIn.png';

const routes = [
  { path: Path.AboutMe, component: <AboutMe /> },
  // { path: Path.Resume, component: <Resume /> },
  { path: Path.Projects, component: <Projects /> },
  { path: Path.Contact, component: <Contact /> },
  { path: Path.Unknown, component: <NotFound404 /> },
];

const useStyles = makeStyles({
  container: {
    flexGrow: 1,
    backgroundImage: `url(${space})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundBlendMode: 'difference',
    display: 'flex',
    alignItems: 'center',
    '& > div': {
      flexGrow: 1,
    },
  },
  linkedIcon: {
    '& img': {
      width: '32px',
      height: '32px',
    },
  },
});

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
        {/* <Tab label="Resume" value={Path.Resume} /> */}
        <Tab label="Projects" value={Path.Projects} />
        <Tab label="Contact" value={Path.Contact} />
      </Tabs>
      <IconButton
        component="a"
        href="https://github.com/Renfrew"
        target="_blank"
        className={classes.linkedIcon}
      >
        <img src={githubIcon} alt="GitHub Icon" />
      </IconButton>
      <IconButton
        component="a"
        href="https://www.linkedin.com/in/liang-chen-29642161/"
        target="_blank"
        className={classes.linkedIcon}
      >
        <img src={linkedInIcon} alt="LinkedIn Icon" />
      </IconButton>
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
