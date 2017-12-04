import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import thunk from 'redux-thunk'
import rootReducer from './reducers'

export const history = createHistory()
const initialState = {}
const middleware = [thunk, routerMiddleware(history)]
const enhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(rootReducer, initialState, enhancers(applyMiddleware(...middleware)))

export default store
