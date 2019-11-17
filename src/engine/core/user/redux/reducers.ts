// Core
import { Map } from 'immutable';

// Instruments
import { types } from './types';
import { authService } from '../service';

// Interfaces
import { UserI } from '../models';
import { Action } from '../../../helpers/actionCreator';


const userInfo: UserI = authService.getUserInfo() || {};

const initialState = Map({
  userInfo,
});


export const userReducer = (state = initialState, action: Action) => {
  const { type, payload } = action;
  switch (type) {
    case types.SET_USER_INFO: {
      return state.set('userInfo', payload);
    }
    default:
      return state;
  }
};
