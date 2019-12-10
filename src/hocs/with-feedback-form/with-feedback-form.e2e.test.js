import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {withFeedbackForm} from './with-feedback-form.jsx';

configure({adapter: new Adapter()});

describe(`with-feedback-form works correctly`, () => {
  const MockComponent = () => <div>test</div>;
  const MockComponentWrapper = withFeedbackForm(MockComponent);
  const postComments = jest.fn();
  const testComment = `test test test test test test test test test test
    test test test test test test test test test test test test
    test test test test test test test test test`;
  const wrapper = shallow(<MockComponentWrapper
    postComments={postComments}
    id={1}
  />);

  it(`default field rating from state equal null`, () => {
    expect(wrapper.state().rating).toEqual(null);
  });

  it(`default field comment from state equal empty string`, () => {
    expect(wrapper.state().comment).toEqual(``);
  });

  it(`handleChangeRating changed rating field in state`, () => {
    const mock = {
      target: {
        value: 69,
      },
    };

    wrapper.instance().handleChangeRating(mock);
    expect(wrapper.state().rating).toEqual(69);
  });

  it(`handleChangeComment changed commet field in state`, () => {
    const mock = {
      target: {
        value: testComment,
      },
    };

    wrapper.instance().handleChangeComment(mock);
    expect(wrapper.state().comment).toEqual(testComment);
  });

  it(`handlePostComment worked correctly`, () => {
    const mock = {
      preventDefault: () => {},
      target: {
        value: testComment,
      },
    };

    wrapper.instance().handlePostComment(mock);
    expect(postComments).toHaveBeenCalled();
    expect(postComments).toHaveBeenCalledWith(1, 69, testComment);
  });

  it(`handlePostComment clear state after work`, () => {
    const mock = {
      preventDefault: () => {},
      target: {
        value: testComment,
      },
    };

    wrapper.instance().handlePostComment(mock);
    expect(postComments).toHaveBeenCalled();
    expect(wrapper.state().rating).toEqual(null);
    expect(wrapper.state().comment).toEqual(``);
  });

});
