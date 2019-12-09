import React from 'react';
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16/build";
import toJson from "enzyme-to-json";

import {Sorting} from './sorting.jsx';

Enzyme.configure({adapter: new Adapter()});

it(`Sorting correctly renders`, () => {
  const tree = shallow(<Sorting
    onToggleList={() => {}}
    onChangeType={() => {}}
    isOpen={false}
    sortTypeLabel={`Popular`}
    sortType={`Popular`}
  />);

  expect(toJson(tree)).toMatchSnapshot();
});
