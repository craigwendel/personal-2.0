import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import logo from './cw-logo.png';

import ScrollTop from './ScrollTop';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    background: theme.palette.secondary
  },
  title: {
    flexGrow: 1
  },
  image: {
    width: 30
  }
}));

export default function Header(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar>
        <Toolbar id="back-to-top-anchor">
          <IconButton edge="start" className={classes.logo} aria-label="logo">
            <img className={classes.image} src={logo} alt="cw logo" />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <ScrollTop {...props}>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </div>
  );
}
