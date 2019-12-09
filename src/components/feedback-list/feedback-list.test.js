import React from 'react';
import renderer from 'react-test-renderer';
import FeedbackList from './feedback-list.jsx';

import COMMENT_MOCK from '../../mocks/comment-mock';

it(`Feedback correctly renders`, () => {
  const tree = renderer
    .create(<FeedbackList
      comments={COMMENT_MOCK}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
