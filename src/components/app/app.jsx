import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ActionCreator} from '../../reducer/reducer';

import OffersList from '../offer-list/offer-list.jsx';
import CitiesMap from '../cities-map/cities-map.jsx';
import CitiesList from '../cities-list/cities-list.jsx';
import {mockOffers} from '../../mocks/offers';

const MAX_CITY = 6;

class App extends React.PureComponent {
  _setAvailableCityFromOffers(offers) {
    const list = offers.map((city) => city.name);
    const availableCities = Array.from(new Set(list));

    this.props.setAvailableCities(availableCities);
    this.props.changeCity(availableCities[0]);
  }

  _setAvailableOffers(offers, city) {
    const availableOffers = offers.filter((offer) => offer.name === city);
    this.props.setAvailableOffers(availableOffers);
  }

  // Вынес фильтрацию списка городов в метод из рендера. Или это было лишнее?
  _listOfCities() {
    return this.props.availableCities.slice(0, MAX_CITY);
  }

  componentDidMount() {
    this.props.setOffers(mockOffers);
    this._setAvailableCityFromOffers(mockOffers);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.city !== this.props.city) {
      this._setAvailableOffers(this.props.offers, this.props.city);
    }
  }

  render() {
    const {mapConfig, changeCity, city} = this.props;
    const coordinates = this.props.availableOffers.map((offer) => offer.coordinates);

    // const MAX_CITY = 6;
    // const availableCities = this.props.availableCities.slice(0, MAX_CITY);

    return (
      <Fragment>
        <CitiesList
          cities={this._listOfCities()}
          changeCity={changeCity}
        />
        <div className="cities">
          <div className="cities__places-container container">
            <OffersList cards={this.props.availableOffers} city={city} />
            <div className="cities__right-section">
              <section className="cities__map map">
                <CitiesMap mapConfig={mapConfig} pins={coordinates} />
              </section>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

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
  city: PropTypes.string,
  changeCity: PropTypes.func.isRequired,
  setOffers: PropTypes.func.isRequired,
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
  setOffers: (offers) => dispatch(ActionCreator.setOffers(offers)),
  changeCity: (city) => dispatch(ActionCreator.changeCity(city)),
  setAvailableCities: (cities) => dispatch(ActionCreator.setAvailableCities(cities)),
  setAvailableOffers: (offers) => dispatch(ActionCreator.setAvailableOffers(offers)),
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
