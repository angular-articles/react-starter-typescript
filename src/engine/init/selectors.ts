// Core
import { getIn } from 'immutable';

// Selectors
import { user } from '../core/user/redux/selectors';


// Store keys
const router = Object.freeze({
  pathname: (state: string) => getIn(state, ['router', 'location', 'pathname'], ''),
  location: (state: object) => getIn(state, ['router', 'location'], {}).toJS(),
});


export const selectors = Object.freeze({
  router,
  user,
});
