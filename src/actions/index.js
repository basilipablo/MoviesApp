const MOVIE_KEY = process.env.REACT_APP_MOVIE_API_KEY;

export function addMovieFavourite(payload) {
    return { type: "ADD_MOVIE_FAVORITE", payload };
  }
  
export function removeMovieFavorite(id) {
    return { type: "REMOVE_MOVIE_FAVORITE", payload: id };
}

export function getMovies(titulo) {
  return function(dispatch) {
    try {
        return fetch("https://www.omdbapi.com/?" + MOVIE_KEY + titulo)
          .then(response => response.json())
          .then(obj => {
            if(obj.Search) dispatch({
              type: "GET_MOVIES",
              payload: obj
            })
          })
    } catch (error) {
      console.log(error)
    }
  };
}

export function getMovieDetail(id) {
  return function(dispatch) {
    try {
    return fetch("https://www.omdbapi.com/?" + MOVIE_KEY + id)
      .then(response => response.json())
      .then(obj => {
        dispatch({
          type: "GET_MOVIES",
          payload: obj
        });
      });
    } catch (error) {
      console.log(error)
    }
  }
}
