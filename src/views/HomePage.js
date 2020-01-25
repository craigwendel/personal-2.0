import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import Header from '../components/Header';
import Hero from '../components/Hero';

// const useStyles = makeStyles(theme => ({
//   container: {},
// }));

const HomeView = props => {
  //   const classes = useStyles();
  return (
    <>
      <Header />
      <Hero />
    </>
  );
};

export default HomeView;
