import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {FeedbackForm} from './feedback-form.jsx';

Enzyme.configure({adapter: new Adapter()});

describe(`Feedback from`, () => {
  const onChangeRating = jest.fn();
  const onChangeComment = jest.fn();
  const onPostComment = jest.fn();

  const form = shallow(<FeedbackForm
    rating={`5`}
    comment={`comment`}
    onChangeRating={onChangeRating}
    onChangeComment={onChangeComment}
    onPostComment={onPostComment}
  />);

  it(`onChangeRating calls when radio buttin is pressed`, () => {
    const star = form.find(`.form__rating-input`).first();
    star.simulate(`change`);
    expect(onChangeRating).toHaveBeenCalledTimes(1);
  });

  it(`OnChangeComment calls when texting in textarea`, () => {
    const textArea = form.find(`.form__textarea`);
    textArea.simulate(`change`);
    expect(onChangeComment).toHaveBeenCalledTimes(1);
  });

  it(`OnPostComment calls when button submit is pressed`, () => {
    const btn = form.find(`.form__submit`);
    btn.simulate(`click`);
    expect(onPostComment).toHaveBeenCalledTimes(1);
  });
});
