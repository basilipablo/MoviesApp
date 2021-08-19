import React, { useState } from 'react';
//Utils, components and assets imports
import './Carousel.css';
import MovieCard from './MovieCard';
//Material-UI imports
import { ArrowBackIos, ArrowForwardIos } from '@material-ui/icons';
import { Grid, Button, Typography, Link, Modal, Fade, Backdrop } from '@material-ui/core';

export default function Carousel(movies) {
    
    const arrMov = movies.movies
    const [modalState, setModalState] = useState(false);
    const paginationNum = arrMov.splice(0, arrMov.length/5)
    
    const handleClick = function(side){
        const row = document.querySelector('.container-carousel');
        if(side === 'right') {
            row.scrollLeft += row.offsetWidth
        } else {
            row.scrollLeft -= row.offsetWidth
        }
    }

    const handleClickPagination = function (index) {
        const row = document.querySelector('.container-carousel');
        row.scrollLeft = index * row.offsetWidth;
        document.querySelector('.pagination .active').classList.remove('active');
        document.getElementById(index).classList.add('active')
    }
    
    return (
        <Grid item xs={12} className='movies-selected container'>
            <div className='container-title-pagination'>
                <Typography variant="h3">Your Movies</Typography>
                <div className="pagination">
                    {paginationNum.length > 0 && paginationNum.map((m, index) =>
                        <Button id={index} onClick={() => handleClickPagination(index)} className={index < 1 ? 'active' : null}/>)}
                </div>
            </div>
            <div className="main-container">
                <Button id="left-arrow" className="left-arrow" onClick={() => handleClick('left')}><ArrowBackIos /></Button>
                <div className="container-carousel">
                    <div className="carousel">
                        {arrMov && arrMov.map( m =>
                            <div className="movie">
                                <Link onClick={() => setModalState(true)}>
                                    <img src={m.Poster === "N/A" ? "https://filmarq.com/wp-content/uploads/2019/02/00-no-movie-posters-1270x1270.jpg" : m.Poster} alt={m.Title}></img>
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
                <Button id="right-arrow" className="right-arrow" onClick={() => handleClick('right')}><ArrowForwardIos /></Button>
            </div>
            <Modal
                aria-labelledby="Movie details"
                aria-describedby="Movie details"
                className="modal"
                open={modalState}
                onClose={() => setModalState(false)}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={modalState}>
                    <MovieCard movie={arrMov[0]} ></MovieCard>
                </Fade>
            </Modal>
        </Grid>
    );
}