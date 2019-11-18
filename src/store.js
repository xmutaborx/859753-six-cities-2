import {applyMiddleware, compose} from 'redux';

const composeEnhancers =
  typeof window === `object` &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    }) : compose;

const enhancer = composeEnhancers(
    applyMiddleware()
);

export default enhancer;
