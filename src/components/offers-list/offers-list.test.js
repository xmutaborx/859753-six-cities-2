import React from 'react';
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16/build";
import toJson from "enzyme-to-json";

import {OffersList} from './offers-list.jsx';
import OFFER_MOCK from '../../mocks/offer-mock';

Enzyme.configure({adapter: new Adapter()});

it(`Offers Page correctly renders`, () => {
  const tree = shallow(<OffersList
    onChangeActiveItem={() => {}}
    onClearItem={() => {}}
    offers={OFFER_MOCK}
    favoritesCity={[`Amsterdam`]}
  />);

  expect(toJson(tree)).toMatchSnapshot();
});
