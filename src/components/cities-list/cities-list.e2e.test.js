import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CitiesList from './cities-list.jsx';

Enzyme.configure({adapter: new Adapter()});

describe(`change city works corrently`, () => {
  const changeCity = jest.fn();

  const citiesList = shallow(<CitiesList
    cities={[`first city`, `second city`]}
    currentCity={`second city`}
    onChangeCity={changeCity}
  />);

  it(`onChangeCity is called 1 time`, () => {
    const link = citiesList.find(`.tabs__item`).last();
    link.simulate(`click`, {
      preventDefault: () => {}
    });
    expect(changeCity).toHaveBeenCalledTimes(1);
  });

  it(`"second city" is active element in the list`, () => {
    expect(citiesList.find(`.tabs__item--active`).text()).toEqual(`second city`);
  });

  it(`All city is rendered`, () => {
    expect(citiesList.find(`.tabs__item`)).toHaveLength(2);
  });
});

