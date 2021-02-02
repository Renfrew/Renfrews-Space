import React, { ReactElement, useState } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import clsx from 'clsx';

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Avatar,
  Backdrop,
  Card,
  CardActions,
  CardActionArea,
  CardContent,
  CardHeader,
  CardMedia,
  Chip,
  Collapse,
  Fab,
  IconButton,
  ImageList,
  ImageListItem,
  Typography,
} from '@material-ui/core';

import ExpandMoreTwoToneIcon from '@material-ui/icons/ExpandMoreTwoTone';
import PhotoCameraTwoToneIcon from '@material-ui/icons/PhotoCameraTwoTone';

import refreshLoadHook from '../asserts/refresh-load-hook.png';
import githubIcon from '../asserts/GitHub-Mark-64px.png';

const useStyles = makeStyles(
  ({ spacing, breakpoints, transitions, zIndex }: Theme) =>
    createStyles({
      cardRoot: {
        maxWidth: '400px',
      },
      cardHeader: {
        [breakpoints.up('sm')]: {
          height: '84px',
        },
      },
      cardImg: {
        height: '200px',
      },
      cardContent: {
        '& > div': {
          marginLeft: spacing(1),
          marginBottom: spacing(1),
        },
      },
      cardActions: {
        display: 'flex',
        justifyContent: 'center',
        '& button,a': {
          marginLeft: spacing(1),
        },
        [breakpoints.up('sm')]: {
          height: '120px',
        },
      },
      gitHubIcon: {
        width: '100%',
        height: '100%',
      },
      expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: transitions.create('transform', {
          duration: transitions.duration.shortest,
        }),
      },
      expandOpen: {
        transform: 'rotate(180deg)',
      },
      backdrop: {
        zIndex: zIndex.drawer + 1,
        color: '#fff',
      },
      imgLit: {
        width: '500px',
        height: '450px',
      },
    })
);

const images: { img: string; title: string }[] = [
  { img: refreshLoadHook, title: 'NPM registry page' },
];

const Projects = (): ReactElement => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);
  const [isBackdropOpened, setIsBackdropOpened] = useState(false);

  function handleExpandClick() {
    setExpanded(!expanded);
  }

  function handleBackdrop() {
    setIsBackdropOpened(!isBackdropOpened);
  }

  function closeBackdrop() {
    setIsBackdropOpened(false);
  }

  return (
    <Card className={classes.cardRoot}>
      <CardActionArea
        component="a"
        href="https://www.npmjs.com/package/react-infinite-refresh-load-hook"
        target="_blank"
      >
        <CardHeader
          avatar={<Avatar aria-label="MacTech">R</Avatar>}
          title="react-infinite-refresh-load-hook"
          subheader="An inifinite scroll hook library"
          className={classes.cardHeader}
        />
        <CardMedia className={classes.cardImg} image={refreshLoadHook} />
        <CardContent className={classes.cardContent}>
          <Chip label="TypeScript" color="primary" />
          <Chip label="NPM registry" color="primary" />
          <Chip label="Unit Test" color="primary" />
          <Chip label="Git Action" color="primary" />
        </CardContent>
      </CardActionArea>
      <CardActions disableSpacing className={classes.cardActions}>
        <Fab color="secondary" aria-label="Gallery" onClick={handleBackdrop}>
          <PhotoCameraTwoToneIcon />
        </Fab>
        <Fab
          color="secondary"
          aria-label="show more"
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
        >
          <ExpandMoreTwoToneIcon />
        </Fab>
        <Fab
          aria-label="GitHub Link"
          target="_blank"
          href="https://github.com/Renfrew/react-infinite-refresh-load-hook"
        >
          <img
            src={githubIcon}
            alt="GitHub Icon"
            className={classes.gitHubIcon}
          />
        </Fab>
        <IconButton aria-label="show more"></IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Accordion defaultExpanded>
            <AccordionSummary
              expandIcon={<ExpandMoreTwoToneIcon />}
              aria-controls="panel-content"
              id="panel-header"
            >
              <Typography>My Duties</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>- Develop, maintain, and publish</Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreTwoToneIcon />}
              aria-controls="panel-content"
              id="panel-header"
            >
              <Typography>Features</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>- Use Intersection Observer API</Typography>
            </AccordionDetails>
          </Accordion>
        </CardContent>
      </Collapse>
      <Backdrop
        className={classes.backdrop}
        open={isBackdropOpened}
        onClick={closeBackdrop}
      >
        <ImageList cols={1} gap={8} className={classes.imgLit}>
          {images.map((item) => (
            <ImageListItem key={item.img}>
              <img srcSet={item.img} alt={item.title} />
            </ImageListItem>
          ))}
        </ImageList>
      </Backdrop>
    </Card>
  );
};

export default Projects;
