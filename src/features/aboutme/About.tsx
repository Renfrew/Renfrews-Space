import React, { ReactElement } from 'react';
import { Theme, makeStyles, createStyles } from '@material-ui/core/styles';

import { Button, Container, Grid, Typography } from '@material-ui/core';

const useStyles = makeStyles(({ breakpoints, spacing }: Theme) =>
  createStyles({
    container: {
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
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

const Home = (): ReactElement => {
  const classes = useStyles();

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
          About Me
        </Typography>
        <Typography variant="h3" className={classes.text}>
          (About Me)
        </Typography>
        <Typography variant="h6" className={classes.text}>
          About Me
        </Typography>
        <Grid className={classes.explore}>
          <Button variant="contained" color="secondary" size="large">
            Explore
          </Button>
        </Grid>
      </Container>
    </Container>
  );
};

export default Home;
