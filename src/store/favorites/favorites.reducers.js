import * as actionTypes from './favorites.actions'

const initialState = {
  data: [],
  isLoading: false,
  error: null
}

const favoritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_FAVORITES_SUCCESS: {
      return {
        ...state,
        data: action.favorites,
        isLoading: false,
        error: null
      }
    }
    case actionTypes.FETCH_FAVORITES_ERROR: {
      return {
        ...state,
        isLoading: false,
        error: action.error
      }
    }
    case actionTypes.ADD_FAVORITE_SUCCESS:
    case actionTypes.REMOVE_FAVORITE_SUCCESS: {
      return {
        ...state,
        data: action.favorites,
        error: null
      }
    }
    case actionTypes.ADD_FAVORITE_ERROR:
    case actionTypes.REMOVE_FAVORITE_ERROR: {
      return {
        ...state,
        error: action.error
      }
    }
    default: {
      return state
    }
  }
}
export default favoritesReducer