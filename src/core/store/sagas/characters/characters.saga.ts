import { call, put, takeEvery, select } from 'redux-saga/effects'
import { GET_CHARACTERS_REQUEST, GET_CHARACTERS_SUCCESS, GET_CHARACTERS_ERROR } from '@core/config/constants/actionType.constant'
import charactersService from '@core/services/characters/characters.service'

function* getALlCharacters(action: any) {
  try {
      const LIST = yield call(charactersService, action.page)
      yield put({ type: GET_CHARACTERS_SUCCESS, payload: LIST.data})
  } catch (error) {
      yield put({ type: GET_CHARACTERS_ERROR })
  }
}

function* charactersSaga() {
  yield takeEvery(GET_CHARACTERS_REQUEST, getALlCharacters)
}

export default charactersSaga
