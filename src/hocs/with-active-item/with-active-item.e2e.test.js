import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {withActiveItem} from './with-active-item.jsx';

Enzyme.configure({adapter: new Adapter()});

describe(`HOC with-active-item works correctly`, () => {
  const MockComponent = () => <div>test</div>;
  const MockComponentWrapper = withActiveItem(MockComponent);
  const setActivePin = jest.fn();
  const wrapper = shallow(<MockComponentWrapper
    activePin={[12, 42]}
    setActivePin={setActivePin}
  />);

  it(`handleChangeActiveItem called prop function with correct arguments`, () => {
    const item = {
      location: {
        latitude: 69,
        longitude: 88
      },
    };

    wrapper.instance().handleChangeActiveItem(item);
    expect(setActivePin).toHaveBeenCalled();
    expect(setActivePin).toHaveBeenCalledWith([69, 88]);
  });

  it(`handleClearActiveItem called prop function with [0,0]`, () => {
    wrapper.instance().handleClearActiveItem();
    expect(setActivePin).toHaveBeenCalled();
    expect(setActivePin).toHaveBeenCalledWith([0, 0]);
  });
});
