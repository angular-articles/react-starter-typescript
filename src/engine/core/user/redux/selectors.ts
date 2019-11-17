// Core
import { getIn } from 'immutable';

// Instruments
import { UserI } from '../models';


export const user = Object.freeze({
  user: (state: UserI) => getIn(state, ['user', 'userInfo'], {}),
});
