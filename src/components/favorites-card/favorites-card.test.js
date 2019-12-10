import React from 'react';
import renderer from 'react-test-renderer';
import {BrowserRouter as Router} from 'react-router-dom';

import {FavoritesCard} from './favorites-card.jsx';

it(`Favorites Card render correctly`, () => {
  const tree = renderer
    .create(<Router>
      <FavoritesCard
        title={`title`}
        price={69}
        type={`room`}
        image={`src`}
        rating={5}
        id={1}
        isFavorite={true}
        onToggleFavorites={() => {}}
      />
    </Router>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
