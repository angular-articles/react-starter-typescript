// Core
import axios from 'axios';

// Instruments
// import { userActionsAsync } from '../core/user/saga/actions';
// import { store } from '../init/store';
import { authService } from './core/user/service';
import { UserI } from './core/user/models';


const baseUrl = process.env.REACT_APP_API;
const apiVersion = process.env.REACT_APP_API_VERSION;

const instance = axios.create({
  baseURL: `${baseUrl}/api/${apiVersion}/`,
  headers: { 'Content-Type': 'application/json' },
});

instance.interceptors.response.use(
  (response) => response,
  (error) => {
    // https://github.com/axios/axios#handling-errors

    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx

      const { data, status } = error.response;

      if (status >= 400) {
        if (status === 401) {
          if (authService.getToken()) {
            // store.dispatch(userActionAsync.logOutAsync());
          } else {
            console.log(data);
            // store.dispatch(uiActions.setSnackbarMessage(
            //   { message: data.message || data.error.message, type: 'error' }
            // ));
          }
        } else if (status === 500) {
          // store.dispatch(uiActions.setSnackbarMessage({ message: 'Ошибка сервера', type: 'error' }));
        } else {
          // store.dispatch(uiActions.setSnackbarMessage(
          //   { message: data.message || data.error.message, type: 'error' }
          // ));
        }
      }
    } else {
      // Something happened in setting up the request that triggered an Error
      // TODO dispatch error inside Server
    }
  },
);

instance.interceptors.request.use(
  (config) => {
    const extendedConfig = config;
    const token = authService.getToken();
    if (token) {
      extendedConfig.headers.Authorization = `Bearer ${token}`;
    }
    return extendedConfig;
  },
);

const api = Object.freeze({
  // Fetch
  user: {
    logout(userData: UserI) {
      return instance.get('/users/logout', { data: userData });
    },
    signUp(data: UserI) {
      return instance.post('/users/signup', data);
    },
    signIn(loginData: UserI) {
      return instance.post('/users/login', loginData);
    },
    restorePassword(restoreData: UserI) {
      return instance.post('/password/reset', restoreData);
    },
    changePassword(changeData: UserI) {
      return instance.post('/password/change', changeData);
    },
    getUserInfo() {
      return instance.get('/users/self', { data: authService.getToken() });
    },
    setUserInfo(userData: UserI) {
      return instance.put('/users/update', userData);
    },
    sendCode(codeData: UserI) {
      return instance.post('/users/check_code', codeData);
    },
  },
});


export { baseUrl, apiVersion, api };
