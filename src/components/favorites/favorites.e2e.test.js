import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Favorites} from './favorites.jsx';

import OFFER_MOCK from '../../mocks/offer-mock';

Enzyme.configure({adapter: new Adapter()});

it(`getFavorites calls from componentDidMount`, () => {
  const getFavorites = jest.fn();

  const wrapper = shallow(<Favorites
    favorites={OFFER_MOCK}
    favoritesCity={[`Amsterdam`]}
    getFavorites={getFavorites}
  />);

  const instance = wrapper.instance();
  instance.componentDidMount();
  expect(getFavorites).toHaveBeenCalled();
});
