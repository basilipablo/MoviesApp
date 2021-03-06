//React Redux imports
import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
//Utils, components and assets imports
import MovieCard from './Display/MovieCard';
import Carousel from './Display/Carousel'
import useStyles from "./home";
import { getMovies} from '../../actions/index';
//Material UI imports
import { Grid, TextField, Typography, Paper } from '@material-ui/core';


export default function Home() {
  const [searchMovies, setSearchMovies] = useState('')
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.moviesLoaded)
  const classes = useStyles()

  const handleChange = function(e) {
    setSearchMovies(e.target.value); //Every time we write something in the input the state is renewed 
    dispatch(getMovies(searchMovies));
  }

  return (
    <Paper className={classes.paperContainer}>
    <Grid container spacing={2} >
        <Grid item xs={12} align='center'>
          <Typography variant="h2">Search Movie by Title</Typography>
        </Grid>
        <Grid item xs={12} align="center">
         <TextField label="Title" onChange={(e) => handleChange(e)}/>
        </Grid>
        <Grid item xs={12} align='center' className={classes.moviesCarousel}>
          {movies.length>0 ? <Carousel movies={movies}/> : null}
        </Grid>
        <Grid container spacing={1} className={classes.moviesGrid}>
          {movies && movies.map(e =>
            <Grid item xs={3} key={e.imdbID} >
                <MovieCard movie={e} elevation={3} />
            </Grid>
          )}
        </Grid>
    </Grid>
    </Paper>
    );
}
