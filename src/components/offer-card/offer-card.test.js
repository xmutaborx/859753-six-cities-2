import React from 'react';
import renderer from 'react-test-renderer';
import {OfferCard} from './offer-card';
import {BrowserRouter as Router} from 'react-router-dom';

import OFFER_MOCK from '../../mocks/offer-mock';

const mock = OFFER_MOCK[0];

it(`OfferCard correctly renders`, () => {
  const tree = renderer
    .create(<Router>
      <OfferCard
        id={mock.id}
        title={mock.title}
        price={mock.price}
        type={mock.type}
        isPremium={mock.is_premium}
        isFavorite={mock.is_favorite}
        image={mock.preview_image}
        rating={mock.rating}
        onChangeActiveItem={() => {}}
        onClearItem={() => {}}
        toggleFavorites={() => {}}
      />
    </Router>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
