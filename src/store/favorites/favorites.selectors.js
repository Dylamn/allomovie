import { createSelector } from "reselect";

export const favoritesSelector = state => state.favorites

export const favoritesListSelector = createSelector(
  [favoritesSelector],
  (favorites) => favorites.data
)

export const favoritesIsLoadingSelector = createSelector(
  [favoritesSelector],
  (favorites) => favorites.isLoading
)

export const favoritesListIdSelector = createSelector(
  [favoritesListSelector],
  (movies) => movies.map(m => m.id)
)
