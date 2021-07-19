import React from 'react';
import RecentReleaseAnime from '../../components/RecentReleaseAnime';
import { makeStyles } from '@material-ui/core';

const styles = makeStyles(() => ({
    root: {
        position: 'absolute',
        right: '10p%',
        left: '10%',
        top: '10%',
    },
}));

const Home: React.FC = () => {
    const classes = styles();
    return (
        <div className={classes.root}>
            <RecentReleaseAnime />;
        </div>
    );
};

export default Home;
