import React from 'react';
import PropTypes from 'prop-types';

import OffersList from '../offer-list/offer-list.jsx';

const App = ({offers}) => {
  return <OffersList cards={offers} />;
};

App.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    premium: PropTypes.bool.isRequired,
    img: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    coordinates: PropTypes.arrayOf(PropTypes.number).isRequired,
  }))
};

export default App;
