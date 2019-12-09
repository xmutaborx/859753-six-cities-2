import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {withSignIn} from './with-sign-in.jsx';

configure({adapter: new Adapter()});

describe(`with-sing-in works correctly`, () => {
  const MockComponent = () => <div>test</div>;
  const MockComponentWrapper = withSignIn(MockComponent);
  const submitForm = jest.fn();
  const wrapper = shallow(<MockComponentWrapper
    submitForm={submitForm}
  />);

  it(`default login and password is empty in state `, () => {
    expect(wrapper.state().login).toEqual(``);
    expect(wrapper.state().password).toEqual(``);
  });

  it(`handleChangeLogin changed login field in state`, () => {
    const mock = {
      target: {
        value: `testLogin`,
      },
    };

    wrapper.instance().handleChangeLogin(mock);
    expect(wrapper.state().login).toEqual(`testLogin`);
  });

  it(`handleChangePassword changed password field in state`, () => {
    const mock = {
      target: {
        value: `testPassword`,
      },
    };

    wrapper.instance().handleChangePassword(mock);
    expect(wrapper.state().password).toEqual(`testPassword`);
  });

  it(`handleSubmitForm call submitForm method from props`, () => {
    wrapper.instance().handleSubmitForm({preventDefault: () => {}});
    expect(submitForm).toHaveBeenCalledTimes(1);
    expect(submitForm).toHaveBeenCalledWith(`testLogin`, `testPassword`);
  });

});
