import React, { ReactElement, useState } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import clsx from 'clsx';

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Avatar,
  Backdrop,
  Box,
  Card,
  CardActions,
  CardActionArea,
  CardContent,
  CardHeader,
  CardMedia,
  Chip,
  Collapse,
  Container,
  Fab,
  Grid,
  IconButton,
  ImageList,
  ImageListItem,
  Typography,
} from '@material-ui/core';

import ExpandMoreTwoToneIcon from '@material-ui/icons/ExpandMoreTwoTone';
import PhotoCameraTwoToneIcon from '@material-ui/icons/PhotoCameraTwoTone';

import myHeader from '../asserts/myProject.png';
import macTech1 from '../asserts/macTech1.png';
import githubIcon from '../asserts/GitHub-Mark-64px.png';
import first from '../asserts/macTech1.png';
import second from '../asserts/macTech2.png';
import third from '../asserts/macTech3.png';

const useStyles = makeStyles(
  ({ breakpoints, spacing, transitions, zIndex }: Theme) =>
    createStyles({
      container: {
        marginBottom: spacing(28),
      },
      header: {
        textAlign: 'center',
        marginTop: spacing(3),
        marginBottom: spacing(3),
        [breakpoints.up('md')]: {
          marginBottom: spacing(8),
        },
        '& img': {
          width: '460px',
          height: '90px',
        },
      },
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
    <Container
      component="main"
      disableGutters
      maxWidth={false}
      className={classes.container}
    >
      <Box className={classes.header}>
        <img src={myHeader} alt="My Project" />
      </Box>
      <Grid container justifyContent="center">
        <Grid item>
          <Card className={classes.cardRoot}>
            <CardActionArea>
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
                <Chip
                  label="FormatJS (Support two languages)"
                  color="primary"
                />
              </CardContent>
            </CardActionArea>
            <CardActions disableSpacing className={classes.cardActions}>
              <Fab
                color="secondary"
                aria-label="Gallery"
                onClick={handleBackdrop}
              >
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
              <Fab aria-label="add">
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
                    <Typography>
                      - Designed and developed the front-end
                    </Typography>
                    <Typography>
                      - Hosts to AWS EC2 and maintain the server
                    </Typography>
                    <Typography>
                      - Wrote software requirement specificication
                    </Typography>
                    <Typography>
                      - Drawed Use Case Diagram, UML, and sometimes database
                      schema
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
                      - Language would be changed according to browser&apos;s
                      setting
                    </Typography>
                    <Typography>
                      - Global themes are in one file, so it is easy to manage
                    </Typography>
                    <Typography>
                      - All API calls are in one folder and it is easy to manage
                      the data structure
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
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Projects;
