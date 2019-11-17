// Core
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// Parts
import App from './containers/App/App';

// UI
import './index.scss';

// Helpers
import * as serviceWorker from '../engine/init/serviceWorker';

// Engine
import { store } from '../engine/init/store';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
