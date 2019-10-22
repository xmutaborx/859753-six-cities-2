import React from 'react';
import renderer from 'react-test-renderer';
import OfferList from './offer-list';

const mock = [
  {
    title: `title`,
    price: 12,
    type: `apartment`,
    premium: true,
    img: `img/apartment`,
    rating: 12,
  }
];

it(`OfferCard correctly renders`, () => {
  const tree = renderer
    .create(<OfferList
      list={mock}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

