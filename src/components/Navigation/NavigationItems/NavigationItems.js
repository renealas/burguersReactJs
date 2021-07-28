import React from 'react';

import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';


const navigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link ="/" active>Constructor de Hamburguesas</NavigationItem>
        <NavigationItem link ="/">Pagar</NavigationItem>
    </ul>
);

export default navigationItems;