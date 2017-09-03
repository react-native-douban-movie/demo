import { combineReducers } from 'redux';
import addCount from './common'
import increment from './increment'

let MainReducer = combineReducers({
  'addCount':addCount,
  'increment':increment
})
export default MainReducer;