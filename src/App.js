import { useState, useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import './App.css';
import { Header } from "./components";
import Films from "./features/films";
import Favorites from "./features/favorites";
import NotFound from "./components/errors/NotFound";
import apiMovie, { apiMovieMap } from "./conf/api.movie";
import apiFirebase from "./conf/api.firebase";
import { useStateWithCallbackLazy } from "./hooks";

function App () {
  const [loaded, setLoaded] = useState(false)
  const [movies, setMovies] = useStateWithCallbackLazy(null)
  const [favorites, setFavorites] = useStateWithCallbackLazy([])
  const [selectedMovie, setSelectedMovie] = useState(0)

  const updateMovies = (movies) => {
    setMovies(movies, () => {
      setLoaded(true)
    })
  }

  const saveFavorites = (favs) => {
    console.log("save")
    apiFirebase.put('favorites.json', favs)
  }

  const addFavorite = (title) => {
    const favs = [...favorites]
    const film = movies.find(m => m.title === title)

    favs.push(film)
    setFavorites(favs, (newState) => {
      saveFavorites(newState)
    })
  }

  const removeFavorite = (title) => {
    const favs = [...favorites]
    const index = favorites.findIndex(fav => fav.title === title)

    favs.splice(index, 1)
    setFavorites(favs, (newState) => {
      saveFavorites(newState)
    })
  }

  useEffect(() => {
    apiMovie.get('discover/movie')
      .then(response => response.data.results)
      .then(results => {
        updateMovies(results.map(apiMovieMap))
      })
      .catch(err => console.error(err))

    apiFirebase.get('favorites.json')
      .then(response => {
        if (response.data) {
          setFavorites(response.data)
        }
      })
      .catch(err => console.error(err))
  }, [])

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/films" element={
          <Films
            loaded={loaded}
            movies={movies}
            updateMovies={updateMovies}
            selectedMovie={selectedMovie}
            setSelectedMovie={setSelectedMovie}
            favorites={favorites}
            addFavorite={addFavorite}
            removeFavorite={removeFavorite}
          />
        } />
        <Route index path="/favorites" element={
          <Favorites
            loaded={loaded}
            favorites={favorites}
            removeFavorite={removeFavorite}
          />
        } />
        <Route path="/" element={<Navigate to="/films" />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
