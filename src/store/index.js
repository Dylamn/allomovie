import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import thunkMiddleware from 'redux-thunk'
import logger from 'redux-logger'

import reducers from './reducers'

const appReducer = combineReducers(reducers)

const middlewares = [
  thunkMiddleware
]

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger)
}

export const store = createStore(
  appReducer,
  composeWithDevTools(
    applyMiddleware(
      ...middlewares
    )
  )
)