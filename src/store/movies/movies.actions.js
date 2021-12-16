import apiMovie from "../../conf/api.movie";

export const REQUEST_INITIAL_MOVIES = 'REQUEST_INITIAL_MOVIES'
export const REQUEST_MOVIES = 'REQUEST_MOVIES'
export const FETCH_MOVIES_SUCCESS = 'FETCH_MOVIES_SUCCESS'
export const FETCH_MOVIES_ERROR = 'FETCH_MOVIES_ERROR'
export const SET_SELECTED_MOVIE = 'SET_SELECTED_MOVIE'

export const requestMovies = () => ({
  type: REQUEST_MOVIES,
})

export const requestInitialMovies = () => ({
  type: REQUEST_INITIAL_MOVIES,
})

export const fetchInitialMovies = () => dispatch => {
  dispatch(requestInitialMovies())

  return apiMovie.discoverMovies()
    .then(
      movies => dispatch(fetchMoviesSuccess(movies)),
      error => dispatch(fetchMoviesError(error))
    )
}

export const fetchMovies = (filters) => dispatch => {
  dispatch(requestMovies())

  return apiMovie.searchMovies(filters)
    .then(
      movies => dispatch(fetchMoviesSuccess(movies)),
      error => dispatch(fetchMoviesError(error))
    )
}

export const fetchMoviesSuccess = movies => ({
  type: FETCH_MOVIES_SUCCESS,
  movies
})

export const fetchMoviesError = error => ({
  type: FETCH_MOVIES_ERROR,
  error
})

export const setSelectedMovie = id => ({
  type: SET_SELECTED_MOVIE,
  id
})