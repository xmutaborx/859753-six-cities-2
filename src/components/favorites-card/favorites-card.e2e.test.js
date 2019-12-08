import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {FavoritesCard} from './favorites-card.jsx';

Enzyme.configure({adapter: new Adapter()});

describe(`favorites card`, () => {
  const onToggleFavorites = jest.fn();

  const card = shallow(<FavoritesCard
    title={`title`}
    price={69}
    type={`room`}
    image={`src`}
    rating={5}
    id={1}
    isFavorite={true}
    toggleFavorites={onToggleFavorites}
  />);

  it(`toggleFavorites is called when press 'add to favorite' button`, () => {
    const btn = card.find(`.place-card__bookmark-button`);
    btn.simulate(`click`);
    expect(onToggleFavorites).toHaveBeenCalledTimes(1);
  });
});
