import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Container, Typography } from '@material-ui/core';

import Shenzhen from './asserts/shenzhen-city-night-unsplash.jpg';

const useStyles = makeStyles(() => ({
  container: {
    height: '100vh',
    backgroundImage: `url(${Shenzhen})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <Container
      component="main"
      disableGutters
      maxWidth={false}
      className={classes.container}
    >
      <Container maxWidth="sm">
        <Typography>Renfrew</Typography>
        <Typography>Renfrew</Typography>
        <Typography>I am a programer, a technology enthusiast.</Typography>
      </Container>
    </Container>
  );
};

export default Home;
