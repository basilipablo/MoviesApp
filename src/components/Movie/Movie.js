import React from 'react';
import { connect } from 'react-redux';
import { getMovieDetail } from '../../actions/index';

import './Movie.css';



class Movie extends React.Component {
    // constructor() {
    //     super();
        
    //   }
     
      componentDidMount() {
        const movieId = this.props.match.params.id; //accedemos al id que esta en la barra del navegador
        this.props.getMovieDetail(movieId);
      };


    render() {
        return (
            <div className="movie-detail">
                Detalle de la pelicula
                <h3>{this.props.movie.title}</h3>  
                <h3>{this.props.movie.year}</h3>  
            </div>
        );
    }
}

//export default Movie;

function mapStateToProps(state) {
    return {
      movie: state.movieDetail
    };
  }
  
  function mapDispatchToProps(dispatch) {
    return {
      getMovieDetail: id => dispatch(getMovieDetail(id))
    };
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Movie); //la magia del connect es que trae el store y el dispatch desde los componentes padre. desde casi afuera del arbol se podria pensar