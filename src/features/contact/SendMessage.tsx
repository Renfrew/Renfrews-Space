import React, { useReducer, ReactElement, FormEvent, useRef } from 'react';
import emailjs from 'emailjs-com';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

import {
  Alert,
  Button,
  Container,
  Grid,
  Hidden,
  Snackbar,
  TextField,
  Typography,
} from '@material-ui/core';

import {
  changeForm,
  sendSuccess,
  sendError,
  closeState,
  reducer,
  ContactMeState,
  ContactMeType,
} from './Reducer';

const useStyles = makeStyles(({ breakpoints, spacing }: Theme) =>
  createStyles({
    header: {
      textAlign: 'center',
      marginTop: spacing(3),
      marginBottom: spacing(1),
      [breakpoints.up('md')]: {
        marginTop: spacing(10),
        marginBottom: spacing(2),
      },
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

const initialState: ContactMeState = {
  // Form value
  name: '',
  email: '',
  company: '',
  website: '',
  message: '',

  // Used for the snackbar
  feedback: '',
  open: false,
  severity: 'success',
};

const SendMessage = (): ReactElement => {
  const classes = useStyles();
  const form = useRef<HTMLFormElement>(null);
  const [
    { name, email, company, website, message, open, severity, feedback },
    dispatch,
  ] = useReducer(reducer, initialState);

  function onChange(event: React.ChangeEvent<HTMLInputElement>) {
    dispatch(changeForm(event.target.id, event.target.value));
  }

  function onSubmitClick(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const canSend = name && email;
    const { REACT_APP_ID, REACT_APP_SERVICES } = process.env;

    if (canSend && REACT_APP_ID && REACT_APP_SERVICES && form.current) {
      emailjs.init(REACT_APP_ID);

      emailjs.sendForm(REACT_APP_SERVICES, 'contact_form', form.current).then(
        () => {
          dispatch(sendSuccess());
        },
        (err) => {
          dispatch(sendError(`Error: ${err.status} - ${err.text}`));
        }
      );
    }
  }

  return (
    <Container disableGutters maxWidth={false}>
      <Typography variant="h4" className={classes.header}>
        Send Message
      </Typography>
      <Grid
        container
        component="form"
        autoComplete="off"
        className={classes.parent}
        onSubmit={onSubmitClick}
        ref={form}
      >
        <Grid item xs={10} sm={7} md={5} className={classes.leftContainer}>
          <TextField
            required
            fullWidth
            margin="normal"
            id={ContactMeType.Name}
            name={ContactMeType.Name}
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
            type="email"
            name={ContactMeType.Email}
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
              id={ContactMeType.Company}
              name={ContactMeType.Company}
              label="Company Name"
              value={company}
              onChange={onChange}
            />
          </Grid>
        </Hidden>
        <Grid item xs={10} sm={7} md={7} className={classes.rightContainer}>
          <TextField
            fullWidth
            margin="normal"
            id={ContactMeType.Website}
            name={ContactMeType.Website}
            type="url"
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
            name={ContactMeType.Message}
            label="Type your message here"
            multiline
            rows={5}
            value={message}
            onChange={onChange}
          />
        </Grid>
        <Grid item xs={12} sm={7} className={classes.sendButton}>
          <Button
            type="submit"
            variant="contained"
            color="secondary"
            size="large"
          >
            SEND
          </Button>
        </Grid>
      </Grid>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={() => dispatch(closeState())}
      >
        <Alert onClose={() => dispatch(closeState())} severity={severity}>
          {feedback}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default SendMessage;
