import { useState } from "react";

import { Header, MovieList, MovieDetails, Loader } from "./components";
import './App.css';

function App () {
  const [loaded, setLoaded] = useState(false)
  const [movies, setMovies] = useState(null)
  const [selectedMovie, setSelectedMovie] = useState(0)

  // Simulate an HTTP call.
  setTimeout(() => {
    setMovies(require('./resources/movies.json'))
    setLoaded(true)
  }, 50)

  return (
    <div className="App">
      <Header />
      {loaded ? (
        <div className="flex flex-1 pt-4">
          <MovieList movies={movies} updateSelectedMovie={setSelectedMovie} />
          <MovieDetails {... movies[selectedMovie]} />
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
}

export default App;
