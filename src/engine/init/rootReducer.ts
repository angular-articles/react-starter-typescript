// Core
import { combineReducers } from 'redux-immutablejs';
import { connectRouter } from 'connected-react-router/immutable';
import { History as HistoryI } from 'history';

// Reducers
import { userReducer as user } from '../core/user/redux/reducers';


const rootReducer = (history: HistoryI) => combineReducers({
  router: connectRouter(history),
  user,
});


export { rootReducer };
