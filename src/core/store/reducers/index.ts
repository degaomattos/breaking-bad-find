import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import { reducer as form } from 'redux-form'
import characters from './characters/characters.reducer'
const reducers = combineReducers({
  form,
  characters
})

export default reducers
