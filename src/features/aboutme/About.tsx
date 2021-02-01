import React, { ReactElement } from 'react';
import { Theme, makeStyles, createStyles } from '@material-ui/core/styles';

import { Container, Grid, Typography } from '@material-ui/core';

import space from '../asserts/Mountains-Outer-Space-Wallpapers.jpg';

const useStyles = makeStyles(({ breakpoints, spacing }: Theme) =>
  createStyles({
    container: {
      minHeight: '100vh',
      backgroundImage: `url(${space})`,
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundBlendMode: 'difference',
      backgroundAttachment: 'fixed',
      // opacity: 0.9,
      '& h1,h5,p': {
        color: 'white',
        mixBlendMode: 'difference',
        filter: 'drop-shadow(.05em .05em #cf0c0c)',
      },
    },
    flip: {
      transform: `scale(1.1, -2)`,
    },
    parent: {
      paddingTop: spacing(8),
      marginBottom: spacing(8),
      [breakpoints.down('sm')]: {
        paddingLeft: '10%',
      },
      [breakpoints.up('sm')]: {
        paddingLeft: breakpoints.values.sm * 0.1 + 'px',
      },
    },
    mainContent: {
      textAlign: 'center',
      maxWidth: '50%',
      [breakpoints.down('sm')]: {
        maxWidth: '75%',
      },
      [breakpoints.up('sm')]: {
        fontSize: '1.5em',
      },
      [breakpoints.up('lg')]: {
        maxWidth: '33%',
      },
    },
    ending: {
      height: spacing(10),
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
        <Typography variant="h1">About Me</Typography>
        <Typography variant="h5" className={classes.flip}>
          About Me
        </Typography>
      </Container>
      <Container className={classes.mainContent}>
        <Typography>
          Welcome to my little home travaller. I really appreciate your coming.
        </Typography>
        <br />
        <Typography>
          I am a newbie who just graduated from Mohawk College.
        </Typography>
        <Typography>
          But I already got a degree in mathematics from the University of
          Waterloo.
        </Typography>
        <br />
        <Typography>
          I am a person who is very interested in technology.
        </Typography>
        <Typography>Not just programing, but also hardware.</Typography>
        <Typography>
          Such as Loading OpenWrt firmware into my router and write scripts on
          it.
        </Typography>
        <br />
        <Typography>
          In software aspect, I am currently developing a freelance website,
          which is customized for the team leader. He is a graduate major in
          design.
        </Typography>
        <br />
        <Typography>
          I have a certain talent for algorithms, data structures, and design
          patterns.
        </Typography>
        <br />
        <Typography>
          The most advanced CS courses I took are distribute system, security,
          and the computer network.
        </Typography>
        <br />
        <br />
        <Typography>Learning</Typography>
        <br />
        <Typography>Enthusiasm</Typography>
        <br />
        <Typography>Focus</Typography>
      </Container>
      <div className={classes.ending}></div>
    </Container>
  );
};

export default Home;
