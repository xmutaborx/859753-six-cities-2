import React from 'react';
import renderer from 'react-test-renderer';
import App from './app';

const offers = [
  {
    title: `title`,
    price: 12,
    type: `apartment`,
    premium: true,
    img: `img/apartment`,
    rating: 12,
  }
];

it(`App correctly renders`, () => {
  const tree = renderer
    .create(<App
      offers={offers}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

