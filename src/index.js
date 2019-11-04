import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {reducer} from './reducer';

import App from './components/app/app.jsx';
import {offers} from './mocks/offers';
import {mapConfig} from './mocks/map-config';

const store = createStore(reducer);

const init = () => {
  ReactDOM.render(
    <Provider store={store}>
      <App
        offers={offers}
        mapConfig={mapConfig}
      />
    </Provider>,
    document.getElementById(`root`)
  );
}

init();
