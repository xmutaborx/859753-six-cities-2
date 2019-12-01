import React from 'react';
import {connect} from 'react-redux';
import ActionCreator from '../../store/action-creator';
import {getCityOffers, getCitiesList} from '../../store/selectors';

import Header from '../header/header.jsx';
import CitiesList from '../cities-list/cities-list.jsx';
import TypesSort from '../types-sort/types-sort.jsx';
import OffersList from '../offer-list/offer-list.jsx';
import CitiesMap from '../cities-map/cities-map.jsx';
import MainEmpty from '../main-empty/main-empty.jsx';
import {mapConfig} from '../../mocks/map-config';

const MainPage = (props) => {
  const {
    city,
    availableOffers,
    availableCities,
    changeCity,
    userData,
    offers} = props;

  const listOfPins = () => {
    return availableOffers.map((offer) => [offer.location.latitude, offer.location.longitude]);
  }

  if (!offers.length) return <MainEmpty />

  return (
    <div className="page page--gray page--main">
      <Header user={userData} />
      <main className="page__main page__main--index">
        <CitiesList
          cities={availableCities}
          onChangeCity={changeCity}
        />
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{availableOffers.length} places to stay in {city}</b>
              <TypesSort />
              <OffersList offers={availableOffers} />
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <CitiesMap mapConfig={mapConfig} pins={listOfPins()} />
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  city: state.city,
  offers: state.offers,
  userData: state.userData,
  availableCities: getCitiesList(state),
  availableOffers: getCityOffers(state),
});

const mapDispatchToProps = (dispatch) => ({
  changeCity: (city) => dispatch(ActionCreator.changeCity(city)),
});

export {MainPage};
export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
