import React from 'react';
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16/build";
import toJson from "enzyme-to-json";

import {SignIn} from './sign-in.jsx';

Enzyme.configure({adapter: new Adapter()});

it(`SignIn Page correctly renders`, () => {
  const tree = shallow(<SignIn
    onSubmitForm={() => {}}
    onChangeLogin={() => {}}
    onChangePassword={() => {}}
    login={`Login`}
    password={`Password`}
  />);

  expect(toJson(tree)).toMatchSnapshot();
});
