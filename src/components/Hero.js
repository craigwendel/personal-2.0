import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import desk from '../images/desk.jpg';

const useStyles = makeStyles({
  image: {
    backgroundImage: `url(${desk})`,
    height: 800,
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    marginTop: '-64px',
  },
  heroText: {
    textAlign: 'center',
    paddingTop: '15%',
  },
});

const Hero = props => {
  const classes = useStyles();
  return (
    <div className={classes.image}>
      <Typography variant="h3" className={classes.heroText}>
        Developer. Designer.
      </Typography>
    </div>
  );
};

export default Hero;
