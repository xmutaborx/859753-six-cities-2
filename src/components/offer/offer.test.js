import React from 'react';
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16/build";
import toJson from "enzyme-to-json";

import {Offer} from './offer.jsx';
import OFFER_MOCK from '../../mocks/offer-mock';
import COMMENT_MOCK from '../../mocks/comment-mock';
import USER_DATA from '../../mocks/user-data-mock';

Enzyme.configure({adapter: new Adapter()});

const mock = {
  params: {
    id: `1`,
  },
};

it(`Offer Page correctly renders`, () => {
  const tree = shallow(<Offer
    offers={OFFER_MOCK}
    comments={COMMENT_MOCK}
    userData={USER_DATA}
    getComments={() => {}}
    toggleFavorites={() => {}}
    match={mock}
  />);

  expect(toJson(tree)).toMatchSnapshot();
});
