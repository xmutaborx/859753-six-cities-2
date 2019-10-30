import React from 'react';
import renderer from 'react-test-renderer';
import OfferCard from './offer-card';

const mock = {
  title: `title`,
  price: 12,
  type: `apartment`,
  premium: true,
  img: `img/apartment`,
  rating: 12,
};

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

