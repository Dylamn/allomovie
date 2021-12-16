import apiFirebase from "../../conf/api.firebase";

export const REQUEST_FAVORITES = 'REQUEST_FAVORITES'
export const FETCH_FAVORITES_SUCCESS = 'FETCH_FAVORITES_SUCCESS'
export const FETCH_FAVORITES_ERROR = 'FETCH_FAVORITES_ERROR'

export const TRY_ADD_FAVORITE = 'TRY_ADD_FAVORITE'
export const ADD_FAVORITE_SUCCESS = 'ADD_FAVORITE_SUCCESS'
export const ADD_FAVORITE_ERROR = 'ADD_FAVORITE_ERROR'

export const TRY_REMOVE_FAVORITE = 'TRY_REMOVE_FAVORITE'
export const REMOVE_FAVORITE_SUCCESS = 'REMOVE_FAVORITE_SUCCESS'
export const REMOVE_FAVORITE_ERROR = 'REMOVE_FAVORITE_ERROR'

export const requestFavorites = () => ({
  type: REQUEST_FAVORITES
})
export const fetchFavoriteSuccess = favorites => ({
  type: FETCH_FAVORITES_SUCCESS,
  favorites
})
export const fetchFavoriteError = error => ({
  type: FETCH_FAVORITES_ERROR,
  error
})
export const fetchFavorites = () => dispatch => {
  dispatch(requestFavorites())

  return apiFirebase.fetchFavorites().then(
    favorites => dispatch(fetchFavoriteSuccess(favorites)),
    error => dispatch(fetchFavoriteError(error))
  )
}

export const addFavoriteSuccess = favorites => ({
  type: ADD_FAVORITE_SUCCESS,
  favorites
})
export const addFavoriteError = error => ({
  type: ADD_FAVORITE_ERROR,
  error
})
export const tryAddFavorite = movie => (dispatch, getState) => {
  dispatch({type: TRY_ADD_FAVORITE})
  const favorites = [...getState().favorites.data, movie]

  return apiFirebase.saveFavorites(favorites).then(
    () => dispatch(addFavoriteSuccess(favorites)),
    error => dispatch(addFavoriteError(error))
  )
}

export const removeFavoriteSuccess = favorites => ({
  type: REMOVE_FAVORITE_SUCCESS,
  favorites
})
export const removeFavoriteError = error => ({
  type: REMOVE_FAVORITE_ERROR,
  error
})
export const tryRemoveFavorite = movie => (dispatch, getState) => {
  dispatch({type: TRY_REMOVE_FAVORITE})
  const favorites = getState().favorites.data.filter(m => m.id !== movie.id)

  return apiFirebase.saveFavorites(favorites).then(
    () => dispatch(removeFavoriteSuccess(favorites)),
    error => dispatch(removeFavoriteError(error))
  )
}
