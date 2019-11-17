// Core
import { all, call } from 'redux-saga/effects';

// Instruments
import { watchersUser } from '../core/user/saga/watchers';


export function* rootSaga() {
  yield all([
    call(watchersUser),
  ]);
}
