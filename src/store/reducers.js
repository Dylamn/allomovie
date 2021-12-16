import moviesReducer from "./movies/movies.reducers";
import favoritesReducer from './favorites/favorites.reducers'

const reducers = {
  movies: moviesReducer,
  favorites : favoritesReducer,
}

export default reducers