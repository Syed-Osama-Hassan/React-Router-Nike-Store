import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import shoe from '../shoes.json';
import {Link} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
        width: theme.spacing(40),
        height: theme.spacing(40),
      },
      flexWrap: 'wrap',
    },
    heading:{
        paddingTop: theme.spacing(10),
    },
  }));

export const Kids = () => {
    const classes = useStyles();
    const shoeKey = Object.keys(shoe);

    return (
        <div>
             <h2 className={classes.heading}>
                Kids
            </h2>
            <div className={classes.root}>
                {
                    shoeKey.map((obj, i) =>
                    shoe[obj].category === 'Kids'?
                    (
                        <Link to={`/${shoe[obj].name}`}>
                        <Paper variant="outlined">
                        <img height="280px" width="320" src={shoe[obj].img} alt="shoe"/>
                        <p>{shoe[obj].name}</p>
                        </Paper>
                        </Link>
                    ): ''
                    )
                }
                
            </div>
           
        </div>
    )
}
