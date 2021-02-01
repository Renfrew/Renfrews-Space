import React, { ReactElement } from 'react';
import { Theme, makeStyles, createStyles } from '@material-ui/core/styles';

import { Box, Container, Grid, Paper, Typography } from '@material-ui/core';

import space from '../asserts/Mountains-Outer-Space-Wallpapers.jpg';
import html5 from '../asserts/html5.png';
import css from '../asserts/css-512.png';
import javascript from '../asserts/512px-JavaScript-logo.png';
import typescript from '../asserts/typescript.png';
import reactLogo from '../asserts/react.png';
import reduxLogo from '../asserts/Redux.png';
import aws from '../asserts/aws_icon_146074.png';

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
    techStack: {
      marginTop: '15px',
      marginBottom: spacing(10),
      width: '90%',
      maxWidth: breakpoints.values.sm,
      marginLeft: 'auto',
      marginRight: 'auto',
      display: 'flex',
      justifyContent: 'space-between',
    },
    techStackLogo: {
      height: '60px',
      width: '60px',
      '& img': {
        height: '60px',
        width: '60px',
      },
    },
    reactLogo: {
      height: '60px',
      width: '60px',
      textAlign: 'center',
      paddingTop: '5px',
      '& img': {
        height: '50px',
        width: '50px',
      },
    },
    reduxLogo: {
      height: '60px',
      width: '60px',
      '& img': {
        height: '60px',
        width: '60px',
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

const techStackIcon: { src: string; alt: string }[] = [
  { src: html5, alt: 'HTML5 icon' },
  { src: css, alt: 'CSS icon' },
  { src: javascript, alt: 'Javascript icon' },
  { src: typescript, alt: 'Typescript icon' },
];

const Home = (): ReactElement => {
  const classes = useStyles();

  function TechStack() {
    return (
      <div className={classes.techStack}>
        {techStackIcon.map((icon) => {
          return (
            <Box key={icon.src} className={classes.techStackLogo}>
              <img src={icon.src} alt={icon.alt} />
            </Box>
          );
        })}
        <Paper className={classes.reactLogo}>
          <img src={reactLogo} alt="ReactLogo" />
        </Paper>
        <Paper className={classes.reduxLogo}>
          <img src={reduxLogo} alt="ReduxLogo" />
        </Paper>
        <Box className={classes.techStackLogo}>
          <img src={aws} alt="AWS Logo" />
        </Box>
      </div>
    );
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
        <Typography variant="h1">About Me</Typography>
        <Grid item xs={6}>
          <Typography variant="h5" className={classes.flip}>
            About Me
          </Typography>
        </Grid>
      </Container>
      <TechStack />
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
          Waterloo, which is equivalent to computer science.
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
