import React, { ReactElement } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

import { Container, Typography } from '@material-ui/core';

import PersonalInfo from './Personal';
import SendMessage from './SendMessage';

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
        marginTop: spacing(10),
        marginBottom: spacing(8),
      },
    },
  })
);

const Contact = (): ReactElement => {
  const classes = useStyles();

  return (
    <Container
      component="main"
      disableGutters
      maxWidth={false}
      className={classes.container}
    >
      <Typography variant="h2" className={classes.header}>
        Contact Me
      </Typography>
      <PersonalInfo />
      <SendMessage />
    </Container>
  );
};

export default Contact;
