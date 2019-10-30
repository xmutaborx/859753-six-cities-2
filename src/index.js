import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';

import {offers} from './mocks/offers';
import {mapConfig} from './mocks/map-config';

ReactDOM.render(
    <App offers={offers} mapConfig={mapConfig} />,
    document.getElementById(`root`)
);
