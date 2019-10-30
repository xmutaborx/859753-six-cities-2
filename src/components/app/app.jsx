import React from 'react';
import PropTypes from 'prop-types';

import OffersList from '../offer-list/offer-list.jsx';
import CitiesMap from '../cities-map/cities-map.jsx';

const App = ({offers, mapConfig}) => {
  return (
    <div className="cities">
      <div className="cities__places-container container">
        <div className="cities__places places">
          <OffersList cards={offers} />
        </div>
        <div className="cities__right-section">
          <CitiesMap mapConfig={mapConfig} offers={offers}/>
        </div>
      </div>
    </div>
  );
};

App.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    premium: PropTypes.bool.isRequired,
    img: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    coordinates: PropTypes.arrayOf(PropTypes.number).isRequired,
  })),
  mapConfig: PropTypes.shape({
    defaultCity: PropTypes.arrayOf(PropTypes.number).isRequired,
    zoom: PropTypes.number.isRequired,
    layer: PropTypes.string.isRequired,
    copyRight: PropTypes.string.isRequired
  }),
};

export default App;
