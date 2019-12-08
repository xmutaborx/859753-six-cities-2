import React from 'react';
import renderer from 'react-test-renderer';
import {FeedbackForm} from './feedback-form.jsx';

it(`Feedback Form correctly renders`, () => {
  const tree = renderer
    .create(<FeedbackForm
      rating={`5`}
      comment={`comment`}
      onChangeRating={() => {}}
      onChangeComment={() => {}}
      onPostComment={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
