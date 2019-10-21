import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

import OffersList from '../offersList/offersList'


const App = ({offers}) => {
  return <OffersList list={offers} />
};

export default App;
