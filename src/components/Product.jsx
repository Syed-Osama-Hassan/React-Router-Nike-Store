import React from 'react';
import {useParams} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import shoes from '../shoes.json';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
        width: theme.spacing(20),
        height: theme.spacing(40),
      },
    },
    heading:{
        paddingTop: theme.spacing(10),
    },
  }));

export const Product = () => {
    const classes = useStyles();
    const {id} = useParams();
    const shoeKey = Object.keys(shoes);
    
    return (
        <div>
            <h2 className={classes.heading}>Item</h2>
            {
                    shoeKey.map((obj, i) =>
                    shoes[obj].name === `${id}`?
                    (
                     <div className="Product">
                     <img src={shoes[obj].img} class="img-fluid" height="600px" width="600" alt="shoe"></img>
                     {/* <img height="600px" width="600" src={shoes[obj].img} alt="shoe"/> */}
                     <p><b>{shoes[obj].name}</b></p>
                     <p><b>Price:</b> {shoes[obj].price}</p>  
                     <button type="button" class="btn btn-dark">Buy Now</button>
                     </div>
                    ): ''
                    )
                }
            
        </div>
    )
}
