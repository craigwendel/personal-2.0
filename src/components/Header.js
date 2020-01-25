import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Button from '@material-ui/core/Button';
import logo from '../images/cw-logo.png';
import HideOnScroll from './HideOnScroll';
import ScrollTop from './ScrollTop';

const useStyles = makeStyles({
  root: {
    backgroundColor: 'transparent',
    boxShadow: 'none',
  },
  toolbar: {
    display: 'grid',
    gridTemplateColumns: '100px 1fr',
    justifyItems: 'end',
  },
  logo: {
    marginRight: '1rem',
  },
  image: {
    width: 35,
  },
});

export default function Header(props) {
  const classes = useStyles();

  return (
    <>
      <HideOnScroll {...props}>
        <AppBar className={classes.root}>
          <Toolbar className={classes.toolbar}>
            <IconButton className={classes.logo} aria-label="logo">
              <img className={classes.image} src={logo} alt="cw logo" />
            </IconButton>
            <div>
              <Button
                href="https://github.com/craigwendel"
                target="_blank"
                color="primary"
              >
                <i className={'fab fa-github'} />
              </Button>
              <Button
                href="https://www.linkedin.com/in/craig-wendel-86719754/"
                target="_blank"
                color="primary"
              >
                <i className={'fab fa-linkedin'} />
              </Button>
              <Button
                href="https://www.linkedin.com/in/craig-wendel-86719754/"
                target="_blank"
                color="primary"
              >
                <i className={'fab fa-medium'} />
              </Button>
            </div>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar id="back-to-top-anchor" />
      <ScrollTop {...props}>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </>
  );
}
