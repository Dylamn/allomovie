import { useState, useEffect } from "react";

import { Header, MovieList, MovieDetails, SearchBar, Loader } from "./components";
import './App.css';
import apiMovie, { apiMovieMap } from "./conf/api.movie";

function App () {
  const [loaded, setLoaded] = useState(false)
  const [movies, setMovies] = useState(null)
  const [selectedMovie, setSelectedMovie] = useState(0)

  const updateMovies = (movies) => {
    setMovies(movies)
    setLoaded(true)
  }

  useEffect(() => {
    apiMovie.get('discover/movie')
      .then(response => response.data.results)
      .then(results => {
        updateMovies(results.map(apiMovieMap))
      })
      .catch(err => console.error(err))
  }, [])

  return (
    <div className="App">
      <Header />
      <SearchBar updateMovies={updateMovies}/>
      {loaded ? (
        <div className="flex flex-1 pt-4">
          <MovieList movies={movies} updateSelectedMovie={setSelectedMovie} />
          <MovieDetails {...movies[selectedMovie]} />
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
}

export default App;
