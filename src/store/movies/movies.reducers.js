import * as actionTypes from './movies.actions'

const initialState = {
  data: [],
  isLoading: false,
  error: null,
  selectedMovie: null,
}

const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.REQUEST_INITIAL_MOVIES:
    case actionTypes.REQUEST_MOVIES: {
      return {
        ...state,
        isLoading: true,
      }
    }

    case actionTypes.FETCH_MOVIES_SUCCESS: {
      return {
        ...state,
        error: null,
        isLoading: false,
        data: [...action.movies],
      }
    }

    case actionTypes.FETCH_MOVIES_ERROR: {
      return {
        ...state,
        error: action.error,
        isLoading: false,
      }
    }

    case actionTypes.SET_SELECTED_MOVIE: {
      return {
        ...state,
        selectedMovie: action.id,
      }
    }

    default: {
      return state
    }
  }
}

export default moviesReducer