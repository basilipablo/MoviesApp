import React from 'react';
//Utils, components and assets imports
import './Carousel.css';
//Material-UI imports
import { ArrowBackIos, ArrowForwardIos } from '@material-ui/icons';
import { Grid, Button, Typography, Link } from '@material-ui/core';

export default function Carousel(movies) {
    
    const arrMov = movies.movies

    //const buttonsPag = Array.from(arrMov.keys()).length()
    //const buttonsPag = arrMov.length()/5
    
    return (
        <Grid item xs={12} className='movies-selected container'>
            <div className='container-title-pagination'>
                <Typography variant="h3">Your Movies</Typography>
                <div className="pagination">
                    
                </div>
            </div>
            <div className="main-container">
                <Button id="left-arrow" className="left-arrow"><ArrowBackIos /></Button>
                <div className="container-carousel">
                    <div className="carousel">
                        {arrMov && arrMov.map( m =>
                            <div className="movie">
                                <Link href="#">
                                    <img src={m.Poster} alt={m.Title}></img>
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
                <Button id="right-arrow" className="right-arrow"><ArrowForwardIos /></Button>
            </div>
        </Grid>
    );
}