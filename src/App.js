import { lazy, Suspense, useEffect, useRef } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { connect } from "react-redux";

import './App.css';
import { Header } from "./components";
import { Loader } from "./components/utils";
import { NotFound } from "./components/errors";
import { fetchFavorites, fetchInitialMovies } from "./store/actions";

const LazyMovies = lazy(() => import(/* webpackChunkName: "Movies"*/ './features/movies'))
const LazyFavorites = lazy(() => import(/* webpackChunkName: "Favorites"*/ './features/favorites'))

function App ({fetchFavorites, fetchInitialMovies}) {
  const mounted = useRef(false)
  // const [loaded, setLoaded] = useState(false)
  // const [movies, setMovies] = useStateWithCallbackLazy(null)
  // const [favorites, setFavorites] = useStateWithCallbackLazy([])
  // const [selectedMovie, setSelectedMovie] = useState(null)

  useEffect(() => {
    if (mounted.current === false) {
      fetchInitialMovies()
      fetchFavorites()

      mounted.current = true
    }
    //...
  }, [fetchFavorites, fetchInitialMovies])

  return (
    <div className="App">
      <Header />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/movies" element={<LazyMovies />} />
          <Route index path="/favorites" element={<LazyFavorites />} />

          <Route path="/" element={<Navigate to="/movies" />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default connect(null, {
  fetchFavorites,
  fetchInitialMovies
})(App);
