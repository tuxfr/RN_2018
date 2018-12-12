import { call, put } from 'redux-saga/effects'

import { ActionCreators } from '../Redux/SearchEngineRedux'

export function * search (api, searchParams) {
  const response = yield call(api.search, searchParams)

  if (response.ok) {
    const {results = []} = response.data
    yield put(ActionCreators.searchSuccess(results))

  } else {
    yield put(ActionCreators.searchError({
      status: response.status,
      error: response.data,
    }))

  }
}
