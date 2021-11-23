import { useState } from "react";

import { Header, MovieList, MovieDetails } from "./components";
import './App.css';

function App () {
  const [movies, setMovies] = useState(require('./static/movies.json'))
  const [selectedMovie, setSelectedMovie] = useState(0)

  return (
    <div className="App">
      <Header />
      <div className="flex flex-fill pt-4">
        <MovieList movies={movies} updateSelectedMovie={setSelectedMovie}/>
        <MovieDetails movie={movies[selectedMovie]}/>
      </div>
    </div>
  );
}

export default App;
