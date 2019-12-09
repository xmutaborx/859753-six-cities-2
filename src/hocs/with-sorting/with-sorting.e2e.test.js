import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {withSorting} from './with-sorting.jsx';

configure({adapter: new Adapter()});

describe(`with-sorting works correctly`, () => {
  const MockComponent = () => <div>test</div>;
  const MockComponentWrapper = withSorting(MockComponent);
  const changeSortType = jest.fn();
  const wrapper = shallow(<MockComponentWrapper
    sortType="Popular"
    changeSortType={changeSortType}
  />);

  it(`default sortTypes in state = Popular`, () => {
    expect(wrapper.state().sortType).toEqual(`Popular`);
  });

  it(`default isOpen in state = false`, () => {
    expect(wrapper.state().isOpen).toEqual(false);
  });

  it(`handleToggleList changed isOpen field in state`, () => {
    wrapper.instance().handleToggleList();
    expect(wrapper.state().isOpen).toEqual(true);
  });

  it(`handleChangeType changed isOpen & sortType field in state and start props func changeSortType`, () => {

    const option = {
      type: `highToLow`,
      value: `High To Low`
    };
    wrapper.instance().handleChangeType(option);
    expect(wrapper.state().isOpen).toEqual(false);
    expect(wrapper.state().sortType).toEqual(`High To Low`);
    expect(changeSortType).toHaveBeenCalledWith(`highToLow`);
  });
});
