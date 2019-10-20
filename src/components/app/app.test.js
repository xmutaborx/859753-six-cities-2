import React from 'react';
import renderer from 'react-test-renderer';
import App from './app';

const titles = [
  `first title`,
  `second title`
];

it(`App correctly renders`, () => {
  const tree = renderer
    .create(<App
      titles={titles}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

