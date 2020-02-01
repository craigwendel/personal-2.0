import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import logo from '../images/cw-logo.png';
import HideOnScroll from './HideOnScroll';
import ScrollTop from './ScrollTop';
import { icons } from '../data/icons';

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
  icons: {
    margin: '0.5rem',
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
              {icons.map(i => (
                <Fab
                  key={i.name}
                  className={classes.icons}
                  href={i.link}
                  target="_blank"
                  color="primary"
                  size="small"
                >
                  <i className={i.icon} />
                </Fab>
              ))}
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
