import React from 'react';
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16/build";
import toJson from "enzyme-to-json";

import {Favorites} from './favorites.jsx';
import OFFER_MOCK from '../../mocks/offer-mock';

Enzyme.configure({adapter: new Adapter()});

it(`Favorites correctly renders`, () => {
  const tree = shallow(<Favorites
    favorites={OFFER_MOCK}
    favoritesCity={[`Amsterdam`]}
    getFavorites={() => {}}
  />);

  expect(toJson(tree)).toMatchSnapshot();
});
