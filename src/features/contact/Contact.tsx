import React, { useReducer, ReactElement } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

import {
  Button,
  Container,
  Grid,
  Hidden,
  TextField,
  Typography,
} from '@material-ui/core';

import { ContactMeType, thunk, reducer } from './Reducer';

const useStyles = makeStyles(({ breakpoints, spacing }: Theme) =>
  createStyles({
    header: {
      textAlign: 'center',
      marginTop: spacing(10),
      marginBottom: spacing(8),
    },
    parent: {
      justifyContent: 'center',
      textAlign: 'center',
      marginLeft: 'auto',
      marginRight: 'auto',
      maxWidth: breakpoints.values.md,
    },
    textField: {
      [breakpoints.up('md')]: {
        width: '75%',
      },
    },
    sendButton: {
      textAlign: 'center',
      marginTop: spacing(4),
    },
    leftContainer: {
      [breakpoints.up('md')]: {
        paddingRight: spacing(1),
        textAlign: 'right',
        '& > div': {
          width: '70%',
        },
      },
    },
    rightContainer: {
      [breakpoints.up('md')]: {
        paddingLeft: spacing(1),
        textAlign: 'left',
        '& > div': {
          width: '78%',
        },
      },
    },
  })
);

const initialState = {
  name: '',
  email: '',
  website: '',
  message: '',
};

const Contact = (): ReactElement => {
  const classes = useStyles();

  const [{ name, email, website, message }, dispatch] = useReducer(
    reducer,
    initialState
  );

  function onChange(event: React.ChangeEvent<HTMLInputElement>) {
    dispatch(thunk(event.target.id, event.target.value));
  }
  function onSubmitClick(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    event.preventDefault();
  }

  return (
    <Container component="main" disableGutters maxWidth={false}>
      <Typography variant="h2" className={classes.header}>
        Contact Me
      </Typography>
      <Grid
        container
        component="form"
        noValidate
        autoComplete="off"
        className={classes.parent}
      >
        <Grid item xs={10} sm={7} md={5} className={classes.leftContainer}>
          <TextField
            required
            fullWidth
            margin="normal"
            id={ContactMeType.Name}
            label="Name"
            value={name}
            onChange={onChange}
          />
        </Grid>
        <Grid item xs={10} sm={7} md={7} className={classes.rightContainer}>
          <TextField
            required
            fullWidth
            margin="normal"
            id={ContactMeType.Email}
            label="Email"
            value={email}
            onChange={onChange}
          />
        </Grid>
        <Hidden mdDown>
          <Grid item md={5} className={classes.leftContainer}>
            <TextField
              fullWidth
              margin="normal"
              id={ContactMeType.Website}
              label="Website"
              value={website}
              onChange={onChange}
            />
          </Grid>
        </Hidden>
        <Grid item xs={10} sm={7} md={7} className={classes.rightContainer}>
          <TextField
            fullWidth
            margin="normal"
            id={ContactMeType.Website}
            label="Website"
            value={website}
            onChange={onChange}
          />
        </Grid>
        <Grid item xs={10} sm={7} md={12}>
          <TextField
            fullWidth
            margin="normal"
            className={classes.textField}
            id={ContactMeType.Message}
            label="Type your message here"
            multiline
            rows={5}
            value={message}
            onChange={onChange}
          />
        </Grid>
        <Grid item xs={12} sm={7} className={classes.sendButton}>
          <Button
            onClick={onSubmitClick}
            variant="contained"
            color="secondary"
            size="large"
          >
            SEND
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contact;
