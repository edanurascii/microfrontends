import { combineReducers } from 'redux'
import authorizationReducer from './authorization/authorizationReducer'

const rootReducer = combineReducers(
  {
    authorization: authorizationReducer,
  }
)

export default rootReducer