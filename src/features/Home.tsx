import React from 'react';
import { useHistory } from 'react-router-dom';
import { Theme, makeStyles, createStyles } from '@material-ui/core/styles';

import { Button, Container, Grid, Typography } from '@material-ui/core';

import Shenzhen from './asserts/shenzhen-city-night-unsplash.jpg';
import { Path } from './Constants';

const useStyles = makeStyles(({ breakpoints, spacing }: Theme) =>
  createStyles({
    container: {
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      backgroundImage: `url(${Shenzhen})`,
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    },
    parent: {
      marginBottom: spacing(20),
      [breakpoints.down('sm')]: {
        paddingLeft: '10%',
      },
      [breakpoints.up('sm')]: {
        paddingLeft: breakpoints.values.sm * 0.1 + 'px',
      },
    },
    text: {
      color: 'white',
      mixBlendMode: 'difference',
      filter: 'drop-shadow(.05em .05em #cf0c0c)',
    },
    explore: {
      textAlign: 'center',
      marginTop: spacing(6),
      [breakpoints.down('sm')]: {
        marginRight: '10%',
      },
      [breakpoints.up('sm')]: {
        marginRight: breakpoints.values.sm * 0.1 + 'px',
      },
    },
  })
);

const Home = () => {
  const classes = useStyles();
  const history = useHistory();

  function onExploreClick() {
    history.push(Path.AboutMe);
  }

  return (
    <Container
      component="main"
      disableGutters
      maxWidth={false}
      className={classes.container}
    >
      <Container
        component={Grid}
        container
        justifyContent="center"
        maxWidth="sm"
        className={classes.parent}
      >
        <Typography variant="h1" className={classes.text}>
          Renfrew
        </Typography>
        <Typography variant="h3" className={classes.text}>
          (Liang Chen)
        </Typography>
        <Typography variant="h6" className={classes.text}>
          I am a programer, a technology enthusiast.
        </Typography>
        <Grid className={classes.explore}>
          <Button
            onClick={onExploreClick}
            variant="contained"
            color="secondary"
            size="large"
          >
            Explore
          </Button>
        </Grid>
      </Container>
    </Container>
  );
};

export default Home;
