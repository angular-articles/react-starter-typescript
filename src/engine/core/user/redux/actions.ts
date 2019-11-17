// Instruments
import { types } from './types';
import { actionCreator } from '../../../helpers/actionCreator';

// Interfaces
import { UserI } from '../models';


export const userActions = Object.freeze({
  setUserInfo: (userInfo: UserI) => actionCreator(types.SET_USER_INFO, userInfo),
});
