import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {OfferCard} from './offer-card';
import OFFER_MOCK from '../../mocks/offer-mock';

Enzyme.configure({adapter: new Adapter()});
const mock = OFFER_MOCK[0];

describe(`Offer Card`, () => {
  const toggleFavorites = jest.fn();
  const onChangeActiveItem = jest.fn();
  const onClearItem = jest.fn();

  const card = shallow(<OfferCard
    id={mock.id}
    title={mock.title}
    price={mock.price}
    type={mock.type}
    isPremium={mock.is_premium}
    isFavorite={mock.is_favorite}
    image={mock.preview_image}
    rating={mock.rating}
    onChangeActiveItem={onChangeActiveItem}
    onClearItem={onClearItem}
    toggleFavorites={toggleFavorites}
  />);

  it(`ToggleFavorites called when btn add to favorite pressed`, () => {
    const btn = card.find(`.place-card__bookmark-button`);
    btn.simulate(`click`);
    expect(toggleFavorites).toHaveBeenCalledTimes(1);
  });

  it(`onChangeActiveItem called when mouse over on card`, () => {
    const article = card.find(`article`);
    article.simulate(`mouseenter`);
    expect(onChangeActiveItem).toHaveBeenCalledTimes(1);
  });

  it(`onClearItem called when mouse leave on card`, () => {
    const article = card.find(`article`);
    article.simulate(`mouseleave`);
    expect(onClearItem).toHaveBeenCalledTimes(1);
  });
});
