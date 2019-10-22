import React from 'react';
import PropTypes from 'prop-types';

import OffersList from '../offer-list/offer-list';

const App = ({offers}) => {
  return <OffersList list={offers} />;
};

App.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    premium: PropTypes.bool.isRequired,
    img: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
  }))
};

export default App;
