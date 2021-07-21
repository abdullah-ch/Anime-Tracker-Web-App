import React from 'react';
import { makeStyles, Typography, Grid } from '@material-ui/core';
import Card from '@material-ui/core/Card';

const styles = makeStyles((theme) => ({
    card: {
        background: 'black',
        width: '140px',
        margin: '0px 10px',
    },

    root: {
        width: '142px',
        height: '196px',
        overflow: 'hidden',
        position: 'relative',
        transition: 'all 0.5s ease-out',
    },
    image: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        transition: 'all 0.5s ease-out',
        zIndex: 10,
        '&:hover': {
            zIndex: -1,
        },
    },
    textPositioning: {
        width: '140px',
        height: '40px',
        overflow: 'hidden',
        marginTop: '10px',
    },
    text: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'Comfortaa',
    },

    genresContainer: {
        backgroundColor: theme.palette.primary.main,
        width: '100%',
        height: '100%',
        position: 'relative',
        transition: 'all 0.5s ease-out',
        zIndex: 2,
    },
    genreList: {
        width: '100%',
        height: '100%',
    },
}));

interface AnimeData {
    image_url: string;
    title: string;
    genres: Array<any>;
}
interface DisplayAnimeCardProps {
    data: AnimeData;
}

const DisplayAnimeCard: React.FC<DisplayAnimeCardProps> = (
    props: DisplayAnimeCardProps
) => {
    const classes = styles();
    const { data } = props;
    console.log(typeof data, data.genres);
    return (
        <Card className={classes.card}>
            <div className={classes.root}>
                <img
                    className={classes.image}
                    alt='anime'
                    src={data.image_url}
                />
                <div className={classes.genresContainer}>
                    <Grid
                        className={classes.genreList}
                        container
                        direction='column'
                        justifyContent='center'
                        alignItems='center'
                    >
                        {data.genres.map((genre) => (
                            <Typography
                                className={classes.text}
                                variant='body1'
                            >
                                {genre.name}
                            </Typography>
                        ))}
                    </Grid>
                </div>
            </div>
            <div className={classes.textPositioning}>
                <Typography className={classes.text} variant='body1'>
                    {data.title}
                </Typography>
            </div>
        </Card>
    );
};

export default DisplayAnimeCard;
