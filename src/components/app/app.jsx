import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ActionCreator} from '../../reducer/reducer';

import OffersList from '../offer-list/offer-list.jsx';
import CitiesMap from '../cities-map/cities-map.jsx';
import CitiesList from '../cities-list/cities-list.jsx';

import {getCityOffers, getSixCities} from '../../store/selectors';

class App extends PureComponent {
  listOfPins() {
    return this.props.availableOffers.map((offer) => [offer.location.latitude, offer.location.longitude]);
  }

  render() {
    const {mapConfig, city, availableOffers, availableCities} = this.props;

    return (
      <div className="page page--gray page--main">
        <main className="page__main page__main--index">
          <CitiesList
            cities={availableCities}
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
  availableCities: PropTypes.array.isRequired,
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
  availableCities: getSixCities(state),
  availableOffers: getCityOffers(state),
});

const mapDispatchToProps = (dispatch) => ({
  changeCity: (city) => dispatch(ActionCreator.changeCity(city)),
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
