import { combineReducers } from 'redux'
import { db } from './reducers'

export const EverTrueReducer = combineReducers({
  db: db
})
export * from './actions'