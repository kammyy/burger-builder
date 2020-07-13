import React from 'react';
import burgerLogo from '../../assets/Images/burger-logo.png';
import classes from './Logo.module.css'
import { checkPropTypes } from 'prop-types';

const logo = () => (
    <div 
        className={classes.Logo}
        style={{height: checkPropTypes.height}}
    >
        <img src={burgerLogo} alt="MyBurger" />
    </div>
);


export default logo;