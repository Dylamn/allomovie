import React, { Component } from 'react';

import MovieElement from "./MovieElement";

class MovieList extends Component {
  render () {
    return (
      <main className="w-75 d-flex flex-row flex-wrap align-content-start">
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
