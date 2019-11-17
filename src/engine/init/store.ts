// Core
import { createStore, applyMiddleware, compose } from 'redux';

// Instruments
import {
  sagaMiddleWare, dev, middleware, history,
} from './middleware';
import { rootReducer } from './rootReducer';
import { rootSaga } from './rootSaga';


const devtools = (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__);
const composeEnhancers = dev && devtools || compose;

const store = createStore(
  rootReducer(history),
  composeEnhancers(applyMiddleware(...middleware)),
);

sagaMiddleWare.run(rootSaga);


export { store };
