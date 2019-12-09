import React from 'react';
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {withAuth} from './with-auth.jsx';
import USER_DATA from '../../mocks/user-data-mock';

configure({adapter: new Adapter()});

describe(`with-feedback-form works correctly`, () => {
  const MockComponent = () => <div id="testId">test</div>;
  const MockComponentWrapper = withAuth(MockComponent);

  it(`if userData not empty - HOC render component`, () => {
    const wrapper = mount(<MockComponentWrapper
      userData={USER_DATA}
    />);

    expect(wrapper.find(`#testId`)).toHaveLength(1);
  });

  it(`if userData empty - HOC doesn't render component`, () => {
    const wrapper = mount(<MockComponentWrapper
      userData={{}}
    />);

    expect(wrapper.find(`#testId`)).toHaveLength(0);
  });
});
