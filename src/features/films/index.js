import React from "react";
import { Loader } from "../../components/utils";
import { MovieList, MovieDetails, SearchBar } from "./components";
import PropTypes from "prop-types";

const Films = (props) => {
  return (
    <>
      <SearchBar updateMovies={props.updateMovies} />
      {props.loaded ? (
        <div className="flex flex-1 pt-4">
          <MovieList
            movies={props.movies}
            updateSelectedMovie={props.setSelectedMovie}
            favorites={props.favorites.map(fav => fav.title)}
            addFavorite={props.addFavorite}
            removeFavorite={props.removeFavorite}
          />
          <MovieDetails {...props.movies[props.selectedMovie]} />
        </div>
      ) : (
        <Loader />
      )}
    </>
  )
}

Films.propTypes = {
  loaded: PropTypes.bool,
  movies: PropTypes.array,
  favorites: PropTypes.array,
  selectedMovie: PropTypes.number.isRequired,
  addFavorite: PropTypes.func.isRequired,
  updateMovies: PropTypes.func.isRequired,
  removeFavorite: PropTypes.func.isRequired,
  setSelectedMovie: PropTypes.func.isRequired,
}

export default Films
