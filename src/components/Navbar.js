import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import {Link} from 'react-router-dom';
import nike from "../images/nike.png";
import '../App.css';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    textAlign: "center",
  },
}));

export default function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" color="#cccccc">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <Link to="/">
                <img src={nike} alt="nike" height="30px" width="40px"/>
            </Link>
          </IconButton>
          <Typography variant="h6" className={classes.title}>
          <Link to="Mens">
            <Button color="inherit">
                Mens
            </Button>
            </Link>
            <Link to="Womens">
            <Button color="inherit">
                Womens
            </Button>
            <Link to="Kids">
            <Button color="inherit">
                Kids
            </Button>
            </Link>
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
