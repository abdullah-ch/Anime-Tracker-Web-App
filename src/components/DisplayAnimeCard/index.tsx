import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import Card from '@material-ui/core/Card';

const styles = makeStyles((theme) => ({
    root: {
        background: 'black',
        width: '142px',
        margin: '0px 10px',
        transition: 'all .4s ease-out',
        '&:hover': {
            '&::after': {
                width: '100%',
            },
        },
        '&::after': {
            content: 'none',
            height: '100%',
            backgroundColor: theme.palette.primary.main,
        },
    },
    image: {
        width: '142px',
        height: '196px',
        objectFit: 'cover',
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
}));

interface AnimeData {
    image_url: string;
    title: String;
}
interface DisplayAnimeCardProps {
    data: AnimeData;
}

const DisplayAnimeCard: React.FC<DisplayAnimeCardProps> = (
    props: DisplayAnimeCardProps
) => {
    const classes = styles();
    const { data } = props;
    console.log(typeof data, data.image_url);
    return (
        <Card className={classes.root}>
            <img className={classes.image} alt='anime' src={data.image_url} />
            <div className={classes.textPositioning}>
                <Typography className={classes.text} variant='body1'>
                    {data.title}
                </Typography>
            </div>
        </Card>
    );
};

export default DisplayAnimeCard;
