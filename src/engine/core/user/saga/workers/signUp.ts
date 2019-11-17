// Core
import { apply, put } from 'redux-saga/effects';

// Instruments
import { api } from '../../../../api';
import { authService } from '../../service';

// Interfaces
import { SignUpI } from '../../models';

export function* callSignUpWorker({ payload: data } : { payload: SignUpI }) {
  // start spinner/preloader/something to show start process
  // for example:
  // yield put(uiActions.loaderSignUpForm(true));
  const response = yield apply(api, api.user.signUp, [data]);

  if (response && response.status >= 200 && response.status < 300) {
    const { status, token } = response.data;
    switch (status) {
      case 'success': {
        if (token) {
          yield apply(authService, authService.setToken, [token]);
        }
        break;
      }
      case 'error': {
        const { errors } = response.data;
        console.error(errors[0].message);
        // show error message
        // for example:
        // yield put(uiActions.setSnackbarMessage({ message: errors[0].message, type: 'error' }));
        break;
      }
      default: {
        break;
      }
    }
  }

  // stop spinner/preloader/something to show stop process
  // for example:
  // yield put(uiActions.loaderSignUpForm(false));
}
