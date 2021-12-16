import axios from "axios";

export const movieClient = axios.create({
  baseURL: 'https://api.themoviedb.org/4',
})

movieClient.interceptors.request.use(request => {
  request.headers['Authorization'] = `Bearer ${process.env.REACT_APP_TMDB_API_KEY}`

  return request
})

export const apiMovieMap = (movie) => {
  return {
    id: movie.id,
    img: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`,
    title: movie.title,
    description: movie.overview,
    details: `${movie.release_date} | ${movie.vote_average}/10 (${movie.vote_count} votes)`
  }
}


const apiMovie = {
  discoverMovies: () => (
    movieClient.get('discover/movie')
      .then(response => response.data.results.map(apiMovieMap))
  ),
  searchMovies: (filters) => (
    movieClient.get('search/movie', {params: filters})
      .then(response => response.data.results.map(apiMovieMap))
  ),
}

export default apiMovie
