import React, { ReactElement } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

import { Box, Container, Grid } from '@material-ui/core';

import myHeader from '../asserts/myProject.png';
import MacTech from './MacTech';
import TheSpace from './TheSpace';
import RefreshLoad from './RefreshLoad';

const useStyles = makeStyles(({ breakpoints, spacing }: Theme) =>
  createStyles({
    container: {
      marginBottom: spacing(28),
    },
    header: {
      textAlign: 'center',
      marginTop: spacing(3),
      marginBottom: spacing(3),
      [breakpoints.up('md')]: {
        marginBottom: spacing(8),
      },
      '& img': {
        width: '460px',
        height: '90px',
      },
    },
  })
);

const Projects = (): ReactElement => {
  const classes = useStyles();

  return (
    <Container
      component="main"
      disableGutters
      maxWidth={false}
      className={classes.container}
    >
      <Box className={classes.header}>
        <img src={myHeader} alt="My Project" />
      </Box>
      <Grid container justifyContent="center" spacing={3}>
        <Grid item>
          <MacTech />
        </Grid>
        <Grid item>
          <TheSpace />
        </Grid>
        <Grid item>
          <RefreshLoad />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Projects;
