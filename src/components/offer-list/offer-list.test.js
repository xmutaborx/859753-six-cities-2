import React from 'react';
import renderer from 'react-test-renderer';
import OfferList from './offer-list.jsx';

import {cardMock} from '../../mocks/card-mock';

it(`OfferCard correctly renders`, () => {
  const tree = renderer
    .create(<OfferList
      cards={cardMock}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

