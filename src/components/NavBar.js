import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#34495e',
  },
  title: {
    flexGrow: 1,
    textAlign: 'center',
    letterSpacing: 4,
    wordSpacing: 14,
    fontWeight: 'bold',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },



}));

export default function NavBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.root}>
          <Typography className={classes.title} variant="h5" noWrap>
            COVID-19 Tracker-Web-App
          </Typography>

        </Toolbar>
      </AppBar>
    </div>
  );
}
