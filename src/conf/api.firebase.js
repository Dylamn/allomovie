import axios from "axios";

const apiFirebase = axios.create({
  baseURL: process.env.REACT_APP_FIREBASE_DB_URL,
})

export default apiFirebase
