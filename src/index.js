import React from 'react';
import ReactDOM from 'react-dom';
import enhancer from './store';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {reducer} from './reducer/reducer';

import App from './components/app/app.jsx';
import {mapConfig} from './mocks/map-config';

const store = createStore(reducer, enhancer);

ReactDOM.render(
    <Provider store={store}>
      <App
        mapConfig={mapConfig}
      />
    </Provider>,
    document.getElementById(`root`)
);
