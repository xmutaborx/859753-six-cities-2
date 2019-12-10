import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import ActionCreator from '../../store/action-creator';
import {getCityOffers, getCitiesList} from '../../store/selectors';
import {PROP_TYPES_OFFERS_LIST} from '../../types/types';

import Header from '../header/header.jsx';
import CitiesList from '../cities-list/cities-list.jsx';
import Sorting from '../sorting/sorting.jsx';
import OffersList from '../offers-list/offers-list.jsx';
import CitiesMap from '../cities-map/cities-map.jsx';
import MainEmpty from '../main-empty/main-empty.jsx';

const MainPage = (props) => {
  const {
    city,
    availableOffers,
    availableCities,
    changeCity,
    offers} = props;

  if (!offers.length) {
    return <MainEmpty />;
  }

  return (
    <div className="page page--gray page--main">
      <Header />
      <main className="page__main page__main--index">
        <CitiesList
          cities={availableCities}
          currentCity={city}
          onChangeCity={changeCity}
        />
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{availableOffers.length} places to stay in {city}</b>
              <Sorting />
              <OffersList offers={availableOffers} />
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <CitiesMap offersList={availableOffers} />
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  city: state.city,
  offers: state.offers,
  availableCities: getCitiesList(state),
  availableOffers: getCityOffers(state),
});

const mapDispatchToProps = (dispatch) => ({
  changeCity: (city) => dispatch(ActionCreator.changeCity(city)),
});

MainPage.propTypes = {
  city: PropTypes.string,
  availableCities: PropTypes.arrayOf(PropTypes.string),
  changeCity: PropTypes.func.isRequired,
  availableOffers: PROP_TYPES_OFFERS_LIST,
  offers: PROP_TYPES_OFFERS_LIST,
};

export {MainPage};
export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
