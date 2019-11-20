import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ActionCreator} from '../../reducer/reducer';

import OffersList from '../offer-list/offer-list.jsx';
import CitiesMap from '../cities-map/cities-map.jsx';
import CitiesList from '../cities-list/cities-list.jsx';

const MAX_CITY = 6;

class App extends PureComponent {
  _initialOffers() {
    const list = this.props.offers.map((offer) => offer.city.name);
    const availableCities = Array.from(new Set(list));
    this.props.changeCity(availableCities[0]);
    this.props.setAvailableCities(availableCities);

    const availableOffers = this.filterOffers(this.props.offers, availableCities[0]);
    this.props.setAvailableOffers(availableOffers);
  }

  filterOffers(offers, city) {
    return offers.filter((offer) => offer.city.name === city);
  }

  listOfPins() {
    return this.props.availableOffers.map((offer) => [offer.location.latitude, offer.location.longitude]);
  }

  listOfCities() {
    return this.props.availableCities.slice(0, MAX_CITY);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.offers.length !== this.props.offers.length) {
      this._initialOffers();
    }
  }

  render() {
    const {mapConfig, city, availableOffers} = this.props;

    return (
      <div className="page page--gray page--main">
        <main className="page__main page__main--index">
          <CitiesList
            cities={this.listOfCities()}
            onChangeCity={this.props.changeCity}
          />
          <div className="cities">
            <div className="cities__places-container container">
              <OffersList offers={availableOffers} city={city} />
              <div className="cities__right-section">
                <section className="cities__map map">
                  <CitiesMap mapConfig={mapConfig} pins={this.listOfPins()} />
                </section>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

App.propTypes = {
  offers: PropTypes.array,
  city: PropTypes.string,
  changeCity: PropTypes.func.isRequired,
  setAvailableCities: PropTypes.func.isRequired,
  availableCities: PropTypes.array.isRequired,
  setAvailableOffers: PropTypes.func.isRequired,
  availableOffers: PropTypes.arrayOf(PropTypes.object),
  mapConfig: PropTypes.shape({
    defaultCity: PropTypes.arrayOf(PropTypes.number).isRequired,
    zoom: PropTypes.number.isRequired,
    layer: PropTypes.string.isRequired,
    copyRight: PropTypes.string.isRequired
  }),
};


const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  city: state.city,
  offers: state.offers,
  availableCities: state.availableCities,
  availableOffers: state.availableOffers,
});

const mapDispatchToProps = (dispatch) => ({
  changeCity: (city) => dispatch(ActionCreator.changeCity(city)),
  setAvailableCities: (cities) => dispatch(ActionCreator.setAvailableCities(cities)),
  setAvailableOffers: (offers) => dispatch(ActionCreator.setAvailableOffers(offers)),
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
