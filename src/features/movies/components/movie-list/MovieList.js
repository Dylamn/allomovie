import React, { Component } from "react";
import PropTypes from "prop-types";

import MovieElement from "./movie-element/MovieElement";

class MovieList extends Component {
  render () {
    return (
      <main className="w-full flex flex-row flex-wrap justify-center">
        {this.props.movies.map(movie => (
          <MovieElement
            key={movie.id} movie={movie}
            updateSelectedMovie={() => this.props.updateSelectedMovie(movie.id)}
            isFavorite={this.props.favorites.includes(movie.id)}
            tryAddFavorite={this.props.tryAddFavorite}
            tryRemoveFavorite={this.props.tryRemoveFavorite}
          />
        ))}
      </main>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.array,
  favorites: PropTypes.arrayOf(PropTypes.number),
  updateSelectedMovie: PropTypes.func.isRequired,
  tryAddFavorite: PropTypes.func.isRequired,
  tryRemoveFavorite: PropTypes.func.isRequired,
}

export default MovieList
