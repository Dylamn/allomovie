import React, { Component } from "react";
import PropTypes from "prop-types";

import MovieElement from "./movie-element/MovieElement";

class MovieList extends Component {
  render () {
    return (
      <main className="w-full flex flex-row flex-wrap justify-center">
        {this.props.movies.map((movie, i) => (
          <MovieElement
            key={i} {...movie}
            updateSelectedMovie={() => this.props.updateSelectedMovie(i)}
            isFavorite={this.props.favorites.includes(movie.title)}
            addFavorite={this.props.addFavorite}
            removeFavorite={this.props.removeFavorite}
          />
        ))}
      </main>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.array,
  updateSelectedMovie: PropTypes.func.isRequired,
}

export default MovieList
