// Instruments
import { asyncTypes } from './types';
import { actionCreator } from '../../../helpers/actionCreator';

// Interfaces
import { SignUpI } from '../models';


export const userActionsAsync = Object.freeze({
  signUpAsync: (data: SignUpI) => actionCreator(asyncTypes.SIGN_UP_ASYNC, data),
});
