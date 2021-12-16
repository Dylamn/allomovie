import { createSelector } from "reselect";

export const moviesSelector = state => state.movies

export const moviesIsLoadingSelector = createSelector(
  [moviesSelector],
  movies => movies.isLoading
)

export const moviesListSelector = createSelector(
  [moviesSelector],
  movies => movies.data
)

export const moviesSelectedMovieIdSelector = createSelector(
  [moviesSelector],
  movies => movies.selectedMovie
)

export const moviesSelectedMovieSelector = createSelector(
  [moviesListSelector, moviesSelectedMovieIdSelector],
  (moviesData, id) => moviesData.find(m => m.id === id)
)
