import React, { ReactElement, useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

import { Container, Typography } from '@material-ui/core';

import testMarkdown from '../../posts/2021-02-14-first.md';

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

const Blogs = (): ReactElement => {
  const classes = useStyles();
  const [files, setFiles] = useState<string>('');

  useEffect(() => {
    fetch(testMarkdown)
      .then((response) => {
        console.warn(response);
        return response.text();
      })
      .then((response) => {
        console.warn(response);
        setFiles(response);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <Container
      component="main"
      disableGutters
      maxWidth={false}
      className={classes.container}
    >
      <Typography variant="h2" className={classes.header}>
        Blogs
      </Typography>
      <ReactMarkdown source={files} />
      {/* {blogs} */}
    </Container>
  );
};

export default Blogs;
