import React from 'react';
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16/build";
import toJson from "enzyme-to-json";

import {MainPage} from './main-page.jsx';
import OFFER_MOCK from '../../mocks/offer-mock';

Enzyme.configure({adapter: new Adapter()});

it(`Main Page correctly renders`, () => {
  const tree = shallow(<MainPage
    city={`Moscow`}
    availableOffers={OFFER_MOCK}
    availableCities={[`Moscow`, `Berlin`]}
    changeCity={() => {}}
    offers={OFFER_MOCK}
  />);

  expect(toJson(tree)).toMatchSnapshot();
});
