import './App.css';

import { Header, MovieList, MovieDetails } from "./components";

function App () {
  return (
    <div className="App">
      <Header />
      <div className="flex flex-fill pt-4">
        <MovieList />
        <MovieDetails />
      </div>
    </div>
  );
}

export default App;
