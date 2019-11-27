import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {compose} from 'recompose';
import reducer from './store/reducer';
import thunk from 'redux-thunk';

import {Operation} from './store/async-actions';
import configureAPI from './api';
import App from './components/app/app.jsx';
import {mapConfig} from './mocks/map-config';

const api = configureAPI((...args) => store.dispatch(...args));

const store = createStore(
    reducer,
    compose(
        applyMiddleware(thunk.withExtraArgument(api)),
        window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
    )
);

store.dispatch(Operation.loadOffers());

ReactDOM.render(
    <Provider store={store}>
      <App
        mapConfig={mapConfig}
      />
    </Provider>,
    document.getElementById(`root`)
);
