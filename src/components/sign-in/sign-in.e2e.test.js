import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {SignIn} from './sign-in.jsx';

Enzyme.configure({adapter: new Adapter()});

describe(`SignIn`, () => {
  const onSubmitForm = jest.fn();
  const onChangeLogin = jest.fn();
  const onChangePassword = jest.fn();

  const signin = shallow(<SignIn
    onSubmitForm={onSubmitForm}
    onChangeLogin={onChangeLogin}
    onChangePassword={onChangePassword}
    login={`Login`}
    password={`Password`}
  />);

  it(`onSubmitForm called when form submit`, () => {
    const form = signin.find(`.login__form`);
    form.simulate(`submit`);
    expect(onSubmitForm).toHaveBeenCalledTimes(1);
  });

  it(`onChangeLogin called when input changes`, () => {
    const input = signin.find(`.login__input`).first();
    input.simulate(`change`);
    expect(onChangeLogin).toHaveBeenCalledTimes(1);
  });

  it(`onChangePassword called when input changes`, () => {
    const input = signin.find(`.login__input`).last();
    input.simulate(`change`);
    expect(onChangePassword).toHaveBeenCalledTimes(1);
  });
});
