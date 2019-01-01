import { combineReducers } from 'redux'
import films from './films'
import navigation from './navigation'

export default combineReducers({
  navigation,
  films
})