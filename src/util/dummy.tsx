import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';

const styles = makeStyles(() => ({
    root: {
        background: 'red',
    },
    textStyle: {
        fontFamily: 'Comfortaa',
    },
}));

const dummy: React.FC = () => {
    const classes = styles();
    return (
        <div>
            <Typography variant='subtitle2' className={classes.textStyle}>
                dummy
            </Typography>
        </div>
    );
};

export default dummy;
