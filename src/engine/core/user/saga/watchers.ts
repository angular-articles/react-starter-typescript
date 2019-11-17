// Core
import { all, takeEvery } from 'redux-saga/effects';

// Instruments
import { asyncTypes } from './types';

// Workers
import {
  callSignUpWorker,
} from './workers';


function* watchSignUp() {
  yield takeEvery(asyncTypes.SIGN_UP_ASYNC, callSignUpWorker);
}


export function* watchersUser() {
  yield all([
    watchSignUp(),
  ]);
}
