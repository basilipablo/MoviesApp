import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography, Snackbar } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import useStyles from './styles'
import { addMovieFavourite } from './../../../actions/index'

export default function MovieCard(movie) {
    const dispatch = useDispatch()
    const classes = useStyles();
    const [message, setMessage] = useState('');
    const [open, setOpen] = useState(false);
    const favMovies = useSelector((state) => state.moviesFavourites)

    const {
        Title,
        Year,
        Poster
    } = movie.movie;

    function Alert(props) {
        return <MuiAlert elevation={6} variant="filled" {...props} />;
    }

    function handleFav() {
        if(favMovies.includes(movie.movie)) return setMessage(`${Title} is already in your Fav List`)
        dispatch(addMovieFavourite(movie.movie))
        setMessage(`${Title} has been added to your Fav List`);
        setOpen(true);
    }

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={Poster}
                    title={Title}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h5">
                        {Title.slice(0, 20)}{Title.length>20 ? '...' : null}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {Year}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary" onClick={() => handleFav()}>
                    Fav
                </Button>
                <Button size="small" color="primary">
                    Trailer
                </Button>
            </CardActions>
            <Snackbar open={open} autoHideDuration={6000} onClose={() => setOpen(false)}>
                <Alert onClose={() => setOpen(false)} severity="success">
                    {message}
                </Alert>
            </Snackbar>
        </Card>
    );
}