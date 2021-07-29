import React, { Component } from "react";
import { connect } from "react-redux";
import { removeMovieFavorite } from "../../actions/index"; //traigo la action para usarlas
import { Link } from 'react-router-dom';
import './Favorites.css';

export class ConnectedList extends Component {

  render() {
    return (
      <div>
        <h2>Películas Favoritas</h2>
        <ul>
          {this.props.movies && this.props.movies.map((e) => <li key={e.imdbID}>
            <Link to={`/movie/${e.imdbID}`}>
              {e.Title}
            </Link>
            <button onClick={() => this.props.removeMovieFavorite(e.imdbID)}>X</button>
          </li>)}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    movies: state.moviesFavourites
  };
}

function mapDispatchToProps(dispatch) {
  return {
    removeMovieFavorite: movieID => dispatch(removeMovieFavorite(movieID)),
  };
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectedList);
