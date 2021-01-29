import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Container from '@material-ui/core/Container';

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
    ></Container>
  );
};

export default Home;
