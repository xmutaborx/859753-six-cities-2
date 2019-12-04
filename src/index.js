import React from 'react';
import ReactDOM from 'react-dom';
import {Router} from 'react-router-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {compose} from 'recompose';
import {batch} from 'react-redux';
import reducer from './store/reducer';
import thunk from 'redux-thunk';
import history from './history';
import Operation from './store/operation';
import configureAPI from './api';
import App from './components/app/app.jsx';

const api = configureAPI((...args) => store.dispatch(...args));

const store = createStore(
    reducer,
    compose(
        applyMiddleware(thunk.withExtraArgument(api)),
        window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
    )
);

batch(() => {
  store.dispatch(Operation.loadOffers());
  store.dispatch(Operation.checkAuthorization());
});

ReactDOM.render(
    <Provider store={store}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>,
    document.getElementById(`root`)
);
