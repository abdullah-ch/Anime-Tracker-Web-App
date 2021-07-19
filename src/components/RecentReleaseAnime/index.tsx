import React, { useEffect, useState } from 'react';
import { makeStyles, Grid } from '@material-ui/core';
import DisplayAnimeCard from '../DisplayAnimeCard';
import { apiDataDay } from '../../data';

const styles = makeStyles(() => ({
    root: {},
    textStyle: {
        fontFamily: 'Comfortaa',
    },
}));

const RecentReleaseAnime: React.FC = () => {
    const classes = styles();

    const [animeDataDay, setAnimeDataDay] = useState([]);
    useEffect(() => {
        callApi();
    }, []);

    const callApi = async () => {
        const dayResults = await apiDataDay();
        setAnimeDataDay(dayResults);
    };

    return (
        <Grid
            container
            direction='row'
            justify='flex-start'
            alignItems='flex-start'
            className={classes.root}
        >
            {animeDataDay.map((data) => (
                <DisplayAnimeCard data={data} />
            ))}
        </Grid>
    );
};

export default RecentReleaseAnime;
