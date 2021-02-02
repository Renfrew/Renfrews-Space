import React, { ReactElement, useState } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import clsx from 'clsx';

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Avatar,
  Backdrop,
  Button,
  Card,
  CardActions,
  CardActionArea,
  CardContent,
  CardHeader,
  CardMedia,
  Chip,
  Collapse,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide,
  Fab,
  IconButton,
  ImageList,
  ImageListItem,
  Typography,
} from '@material-ui/core';

import { TransitionProps } from '@material-ui/core/transitions';
import ExpandMoreTwoToneIcon from '@material-ui/icons/ExpandMoreTwoTone';
import PhotoCameraTwoToneIcon from '@material-ui/icons/PhotoCameraTwoTone';

import macTech1 from '../asserts/macTech1.png';
import githubIcon from '../asserts/GitHub-Mark-64px.png';
import first from '../asserts/macTech1.png';
import second from '../asserts/macTech2.png';
import third from '../asserts/macTech3.png';

const useStyles = makeStyles(({ spacing, transitions, zIndex }: Theme) =>
  createStyles({
    cardRoot: {
      maxWidth: '400px',
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
      '& button': {
        marginLeft: spacing(1),
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
  { img: first, title: 'home page' },
  { img: second, title: 'chat page' },
  { img: third, title: 'redux' },
];

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children?: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Projects = (): ReactElement => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);
  const [isBackdropOpened, setIsBackdropOpened] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [openGitHubDialog, setOpenGitHubDialog] = useState(false);

  function onClickOpen() {
    setOpenDialog(true);
  }

  function handleExpandClick() {
    setExpanded(!expanded);
  }

  function handleBackdrop() {
    setIsBackdropOpened(!isBackdropOpened);
  }

  function closeBackdrop() {
    setIsBackdropOpened(false);
  }

  function handleDialogClose() {
    setOpenDialog(false);
  }

  function handleDialogGo() {
    const win = window.open('http://renfrewworld.com/', '_blank');
    win?.focus();
    setOpenDialog(false);
  }

  function onGitHubClick() {
    setOpenGitHubDialog(true);
  }

  function handleGitHubDialogClose() {
    setOpenGitHubDialog(false);
  }

  return (
    <Card className={classes.cardRoot}>
      <CardActionArea onClick={onClickOpen}>
        <CardHeader
          avatar={<Avatar aria-label="MacTech">M</Avatar>}
          title="MacTech"
          subheader="A Freelancer website designed for graphical designers"
        />
        <CardMedia className={classes.cardImg} image={macTech1} />
        <CardContent className={classes.cardContent}>
          <Chip label="Javascript" color="primary" />
          <Chip label="Redux" color="primary" />
          <Chip label="Axios" color="primary" />
          <Chip label="Material-UI" color="primary" />
          <Chip label="Socket IO" color="primary" />
          <Chip label="Express JS" color="primary" />
          <Chip label="Postgre SQL" color="primary" />
          <Chip label="AWS" color="primary" />
          <Chip label="FormatJS (Support two languages)" color="primary" />
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
        <Fab aria-label="git hub" onClick={onGitHubClick}>
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
              <Typography>- Designed and developed the front-end</Typography>
              <Typography>
                - Hosts to AWS EC2 and maintain the server
              </Typography>
              <Typography>
                - Wrote software requirement specificication
              </Typography>
              <Typography>
                - Drawed Use Case Diagram, UML, and sometimes database schema
              </Typography>
              <Typography>- Practiced Agile Methodology</Typography>
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
              <Typography>
                - Language would be changed according to browser&apos;s setting
              </Typography>
              <Typography>
                - Global themes are in one file, so it is easy to manage
              </Typography>
              <Typography>
                - All API calls are in one folder and it is easy to manage the
                data structure
              </Typography>
              <Typography>
                - The login state is persistent between tabs
              </Typography>
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
      <Dialog
        open={openDialog}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleDialogClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">
          {'Notifications about MacTech'}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            This website is still under implementation. Please use the following
            credentials to login. <br /> Username: test <br /> Password: test
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose}>Cancel</Button>
          <Button onClick={handleDialogGo}>Go</Button>
        </DialogActions>
      </Dialog>
      <Dialog
        open={openGitHubDialog}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleGitHubDialogClose}
        aria-labelledby="alert-dialog-slide-title2"
        aria-describedby="alert-dialog-slide-description2"
      >
        <DialogTitle id="alert-dialog-slide-title2">
          {'Notifications about MacTech'}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description2">
            This repository is private. Please send your github userme to me so
            We can invite you to join our team. Our team would love to discuss
            everything with you about this project.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleGitHubDialogClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </Card>
  );
};

export default Projects;
