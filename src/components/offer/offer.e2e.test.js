import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

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

describe(`Offer is work correctly`, () => {
  const getComments = jest.fn();
  const toggleFavorites = jest.fn();

  const card = shallow(<Offer
    offers={OFFER_MOCK}
    comments={COMMENT_MOCK}
    userData={USER_DATA}
    getComments={getComments}
    toggleFavorites={toggleFavorites}
    match={mock}
  />);

  it(`toggleFavorites is called when press 'add to favorite' button`, () => {
    const btn = card.find(`.property__bookmark-button`);
    btn.simulate(`click`);
    expect(toggleFavorites).toHaveBeenCalledTimes(1);
  });

  it(`getComment calls from componentDidMount`, () => {
    const instance = card.instance();
    instance.componentDidMount();
    expect(getComments).toHaveBeenCalled();
  });
});
