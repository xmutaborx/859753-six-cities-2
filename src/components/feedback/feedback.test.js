import React from 'react';
import renderer from 'react-test-renderer';
import Feedback from './feedback.jsx';

const mock = {
  comment: `test comment`,
  rating: 5,
  date: `date`,
  user: {
    // eslint-disable-next-line camelcase
    avatar_url: `src`,
    name: `Name`
  },
};

it(`Feedback correctly renders`, () => {
  const tree = renderer
    .create(<Feedback
      comment={mock}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
