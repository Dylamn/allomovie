import axios from "axios";

export const clientFirebase = axios.create({
  baseURL: process.env.REACT_APP_FIREBASE_DB_URL,
})

const apiFirebase = {
  fetchFavorites: () => (
    clientFirebase.get('favorites.json')
      .then(response => response.data ?? [])
  ),
  saveFavorites: favorites => (
    clientFirebase.put('favorites.json', favorites)
  )
}

export default apiFirebase
