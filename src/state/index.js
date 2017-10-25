import { combineReducers } from 'redux'
import { db, selected } from './reducers'

export const EverTrueReducer = combineReducers({
  db: db,
  selected: selected
})
export * from './actions'
