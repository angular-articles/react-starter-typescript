// Core
import { createLogger } from 'redux-logger';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router/immutable';
import createSagaMiddleware from 'redux-saga';


// Instruments
const history = createBrowserHistory();

const logger = createLogger({
  duration: true,
  collapsed: true,
  colors: {
    title: () => '#139bfe',
    prevState: () => '#1c5faf',
    action: () => '#149945',
    nextState: () => '#a47104',
    error: () => '#ff0005',
  },
});

const dev = process.env.NODE_ENV === ('development' || 'local');
const sagaMiddleWare = createSagaMiddleware();
const reactRouterMiddleware = routerMiddleware(history);
const middleware = [reactRouterMiddleware];

if (dev) {
  middleware.push(logger);
}


export { sagaMiddleWare, dev, middleware, history };
