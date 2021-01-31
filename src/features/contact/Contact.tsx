import React, { useReducer, ReactElement } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Button, Container, Grid, TextField } from '@material-ui/core';

import { ContactMeType, thunk, reducer } from './Reducer';

const useStyles = makeStyles({
  container: {
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
});

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
    <Container
      component="main"
      disableGutters
      maxWidth={false}
      className={classes.container}
    >
      <form noValidate autoComplete="off">
        <TextField
          required
          id={ContactMeType.Name}
          label="Name"
          value={name}
          onChange={onChange}
        />
        <TextField
          required
          id={ContactMeType.Email}
          label="Email"
          value={email}
          onChange={onChange}
        />
        <TextField
          id={ContactMeType.Website}
          label="Website"
          value={website}
          onChange={onChange}
        />
        <TextField
          id={ContactMeType.Message}
          label="Type your message here"
          multiline
          rows={5}
          value={message}
          onChange={onChange}
        />
        <Grid>
          <Button
            onClick={onSubmitClick}
            variant="contained"
            color="secondary"
            size="large"
          >
            SEND
          </Button>
        </Grid>
      </form>
    </Container>
  );
};

export default Contact;
