import React from 'react';
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16/build";
import toJson from "enzyme-to-json";

import MainEmpty from './main-empty.jsx';

Enzyme.configure({adapter: new Adapter()});

it(`Main Empty page correctly renders`, () => {
  const tree = shallow(<MainEmpty />);

  expect(toJson(tree)).toMatchSnapshot();
});
