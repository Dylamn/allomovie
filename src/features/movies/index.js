import React from "react";
import { connect } from "react-redux";

import { Loader } from "../../components/utils";
import { MovieDetails, MovieList, SearchBar } from "./components";
import PropTypes from "prop-types";

import { fetchMovies, setSelectedMovie, tryAddFavorite, tryRemoveFavorite } from "../../store/actions";
import {
  favoritesListIdSelector,
  moviesIsLoadingSelector,
  moviesListSelector,
  moviesSelectedMovieSelector
} from "../../store/selectors";

const Movies = (props) => (
  <>
    <SearchBar fetchMovies={props.fetchMovies} />
    {props.isLoading ? (
      <Loader />
    ) : (
      <div className="flex flex-1 pt-4">
        <MovieList
          movies={props.movies}
          updateSelectedMovie={props.setSelectedMovie}
          favorites={props.favoritesListId}
          tryAddFavorite={props.tryAddFavorite}
          tryRemoveFavorite={props.tryRemoveFavorite}
        />
        {
          props.selectedMovie && <MovieDetails movie={props.selectedMovie} />
        }
      </div>
    )}
  </>
)


Movies.propTypes = {
  isLoading: PropTypes.bool,
  movies: PropTypes.array,
  selectedMovie: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    details: PropTypes.string,
    description: PropTypes.string,
    img: PropTypes.string,
  }),
  favoritesListId: PropTypes.array,
  fetchMovies: PropTypes.func.isRequired,
  setSelectedMovie: PropTypes.func.isRequired,
  tryAddFavorite: PropTypes.func.isRequired,
  tryRemoveFavorite: PropTypes.func.isRequired,
}

export default connect(state => ({
  isLoading: moviesIsLoadingSelector(state),
  movies: moviesListSelector(state),
  selectedMovie: moviesSelectedMovieSelector(state),
  favoritesListId: favoritesListIdSelector(state)
}), {
  fetchMovies,
  setSelectedMovie,
  tryAddFavorite,
  tryRemoveFavorite,
})(Movies)
