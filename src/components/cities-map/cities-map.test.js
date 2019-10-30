import React from 'react';
import renderer from 'react-test-renderer';
import CitiesMap from './cities-map.jsx';

import {cardMock} from '../../mocks/card-mock';
import {mapConfigMock} from '../../mocks/map-config-mock';

it(`Map correctly renders`, () => {
  const div = global.document.createElement(`div`);
  div.id = `map`;
  global.document.body.appendChild(div);
  const tree = renderer
    .create(<CitiesMap
      offers={cardMock}
      mapConfig={mapConfigMock}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
