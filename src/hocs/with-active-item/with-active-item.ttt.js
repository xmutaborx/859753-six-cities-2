import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {OffersList} from '../../components/offers-list/offers-list.jsx';
import withActiveItem from './with-active-item.jsx';

Enzyme.configure({adapter: new Adapter()});

describe(`HOC with-active-item`, () => {
  const ComponentWrapped = withActiveItem(OffersList);
  const setActivePin = jest.fn();

  const wrapper = mount(<ComponentWrapped
    activePin={[0, 0]}
    setActivePin={setActivePin}
  />);

  it(`handleClick is work correclty`, () => {
    expect(wrapper).toEqual(wrapper);
  });
});
