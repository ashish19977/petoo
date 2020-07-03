import menuReducer from './reducers'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

// Note: this API requires redux@>=3.1.0
const store = createStore(menuReducer, applyMiddleware(thunk))

export default store
