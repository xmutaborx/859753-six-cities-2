import React from 'react';
import renderer from 'react-test-renderer';
import OfferCard from './offer-card';

import {cardMock} from '../../mocks/card-mock';

const mock = cardMock[0];

it(`OfferCard correctly renders`, () => {
  const tree = renderer
    .create(<OfferCard
      title={mock.title}
      price={mock.price}
      type={mock.type}
      premium={mock.premium}
      img={mock.img}
      rating={mock.rating}
      onMouseHover={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
