import React from 'react';
import Aux from '../../hoc/Auxillary';

import classes from './Preloader.module.css';

const preloader = () => (
    <Aux>
        <div className={classes.Loader}>Loading...</div>
        <h4 align='center' style={{color:'indigo'}}>Loading...</h4>
    </Aux>
    
);

export default preloader;