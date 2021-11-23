import React, { Component } from 'react';

import MovieElement from "./MovieElement";

class MovieList extends Component {
  render () {
    return (
      <main className="w-full sm:w-3/4 flex flex-row flex-wrap content-start">
        {this.props.movies.map((movie, i) => (
          <MovieElement key={i} id={i} movie={movie} updateSelectedMovie={this.props.updateSelectedMovie} />
        ))}
      </main>
    );
  }
}

export default MovieList
