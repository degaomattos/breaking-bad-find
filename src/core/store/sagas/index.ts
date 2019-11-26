
import { all } from 'redux-saga/effects'
import charactersSaga from './characters/characters.saga'
export default function* rootSaga() {
  yield all([
    charactersSaga()
  ])
}
