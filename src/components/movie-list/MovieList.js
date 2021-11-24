import React, { Component } from 'react';
import PropTypes from "prop-types";

import MovieElement from "./movie-element/MovieElement";

class MovieList extends Component {
  render () {
    return (
      <main className="w-full sm:w-3/4 flex flex-row flex-wrap content-start">
        {this.props.movies.map((movie, i) => (
          <MovieElement key={i} {...movie} updateSelectedMovie={() => this.props.updateSelectedMovie(i)} />
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
