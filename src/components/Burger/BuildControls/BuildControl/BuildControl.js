import React from 'react';

import classes from './BuildControl.css';

const buildControl = (props) => (
    <div className={classes.BuildControl}>
        <div className={classes.Label}>{props.label}</div>
        <button className={classes.Less} onClick={props.remove} disabled={props.disabled}>Menos</button>
        <button className={classes.More} onClick={props.added}>Mas</button>
    </div>
);

export default buildControl;