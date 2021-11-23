import React, { Component } from 'react';

import MovieElement from "./MovieElement";

class MovieList extends Component {
  render () {
    return (
      <main className="w-full sm:w-3/4 flex flex-row flex-wrap content-start">
        <MovieElement/>
        <MovieElement/>
        <MovieElement/>
        <MovieElement/>
        <MovieElement/>
        <MovieElement/>
        <MovieElement/>
        <MovieElement/>
      </main>
    );
  }
}

export default MovieList
