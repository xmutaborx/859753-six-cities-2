import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {Sorting} from './sorting.jsx';

Enzyme.configure({adapter: new Adapter()});

describe(`Sorting Component`, () => {
  const onToggleList = jest.fn();
  const onChangeType = jest.fn();

  const sort = shallow(<Sorting
    onToggleList={onToggleList}
    onChangeType={onChangeType}
    isOpen={true}
    sortTypeLabel={`Popular`}
    sortType={`Popular`}
  />);

  it(`onToggleList called when sort text clicked`, () => {
    const sortText = sort.find(`.places__sorting-type`);
    sortText.simulate(`click`);
    expect(onToggleList).toHaveBeenCalledTimes(1);
  });

  it(`onChangeType called when sort type is choosen`, () => {
    const sortType = sort.find(`.places__option`).first();
    sortType.simulate(`click`);
    expect(onChangeType).toHaveBeenCalledTimes(1);
  });
});
