const initialState = {
    moviesFavourites: [],
    moviesLoaded: [],
    movieDetail: {} //es un objeto porque es una pelicula sola
  };

function rootReducer(state = initialState, action) {
    if (action.type === "ADD_MOVIE_FAVORITE") {
        return {
          ...state,
          moviesFavourites: state.moviesFavourites.concat(action.payload)
        }
    }
    if (action.type === "GET_MOVIES") {
        return {
          ...state,
          moviesLoaded: action.payload.Search.sort(function (a, b) {
            var dateA = new Date(a.Year),
              dateB = new Date(b.Year);
            return dateB - dateA;
          }),
        };
    }
    if (action.type === "REMOVE_MOVIE_FAVORITE") {
        return {
          ...state,
          moviesFavourites: state.moviesFavourites.filter(movie => movie.imdbID !== action.payload) //filter crea un array nuevo
        }
    }
    if (action.type === "GET_MOVIE_DETAIL") {
        return {
          ...state,
          movieDetail: action.payload,
        }
    }
    return state;
}
  
export default rootReducer;