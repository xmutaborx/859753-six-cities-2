import React from 'react';
import renderer from 'react-test-renderer';
import {CitiesMap} from './cities-map.jsx';
import OFFER_MOCK from '../../mocks/offer-mock';

it(`Map correctly renders`, () => {
  const div = global.document.createElement(`div`);
  div.id = `map`;
  global.document.body.appendChild(div);
  const tree = renderer
    .create(<CitiesMap
      offersList={OFFER_MOCK}
      activePin={[0, 0]}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
