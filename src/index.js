import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import {reducer} from './reducer/reducer';

import App from './components/app/app.jsx';
import {mapConfig} from './mocks/map-config';

const composeEnhancers =
  typeof window === `object` &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    }) : compose;

const enhancer = composeEnhancers(
    applyMiddleware()
);

const store = createStore(reducer, enhancer);

ReactDOM.render(
    <Provider store={store}>
      <App
        mapConfig={mapConfig}
      />
    </Provider>,
    document.getElementById(`root`)
);