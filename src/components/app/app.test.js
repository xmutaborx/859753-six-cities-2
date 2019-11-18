import React from 'react';
import renderer from 'react-test-renderer';
import {App} from './app';

import {cardMock} from '../../mocks/card-mock';
import {mapConfigMock} from '../../mocks/map-config-mock';

it(`App correctly renders`, () => {
  const div = global.document.createElement(`div`);
  div.id = `map`;
  global.document.body.appendChild(div);
  const tree = renderer
    .create(<App
      mapConfig={mapConfigMock}
      city={`city_name`}
      offers={cardMock}
      availableCities={[`first city`, `second city`]}
      availableOffers={cardMock}
      changeCity={() => {}}
      setOffers={() => {}}
      setAvailableCities={() => {}}
      setAvailableOffers={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

