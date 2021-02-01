import React, { ReactElement } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

import { Container, Grid, Typography } from '@material-ui/core';

const useStyles = makeStyles(({ breakpoints, spacing }: Theme) =>
  createStyles({
    header: {
      textAlign: 'center',
      marginTop: spacing(3),
      marginBottom: spacing(1),
      [breakpoints.up('md')]: {
        marginTop: spacing(10),
        marginBottom: spacing(3),
      },
    },
    line: {
      justifyContent: 'center',
      marginLeft: 'auto',
      marginRight: 'auto',
      maxWidth: breakpoints.values.md,
      '& div': {
        marginLeft: spacing(2),
      },
    },
  })
);

interface Props {
  label: string;
  data: string | number;
}

const info: { label: string; value: string | number }[] = [
  { label: 'Phone', value: '(226) 929 -5495' },
  {
    label: 'Email1:',
    value: 'l23chen@uwaterloo.ca',
  },
  {
    label: 'Email2:',
    value: 'renfrew.liangchen@gmail.com',
  },
  {
    label: 'Address',
    value: 'Hamilton, ON. (can move)',
  },
];

const PersonalInfo = (): ReactElement => {
  const classes = useStyles();

  function Line({ label, data }: Props) {
    return (
      <Grid container className={classes.line}>
        <Grid item>
          <Typography>{label}</Typography>
        </Grid>
        <Grid item>
          <Typography>{data}</Typography>
        </Grid>
      </Grid>
    );
  }

  return (
    <Container disableGutters maxWidth={false}>
      <Typography variant="h4" className={classes.header}>
        Personal Information
      </Typography>
      {info.map((el) => (
        <Line key={el.label} label={el.label} data={el.value} />
      ))}
    </Container>
  );
};

export default PersonalInfo;
