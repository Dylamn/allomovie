import axios from "axios";

const apiMovie = axios.create({
  baseURL: 'https://api.themoviedb.org/4',
})

apiMovie.interceptors.request.use(request => {
  request.headers['Authorization'] = `Bearer ${process.env.REACT_APP_TMDB_API_KEY}`

  return request
})

export default apiMovie

export const apiMovieMap = (m) => {
  return {
    img: `https://image.tmdb.org/t/p/w500/${m.poster_path}`,
    title: m.title,
    description: m.overview,
    details: `${m.release_date} | ${m.vote_average}/10 (${m.vote_count} votes)`
}}
