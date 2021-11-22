import './App.css';

import { Header, MovieList, MovieDetails } from "./components";

function App () {
  return (
    <div className="App">
      <Header />
      <div className="d-flex flex-row flex-fill pt-4 p-2">
        <MovieList />
        <MovieDetails />
      </div>
    </div>
  );
}

export default App;
