import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ActionCreator} from '../../reducer/reducer';

import OffersList from '../offer-list/offer-list.jsx';
import CitiesMap from '../cities-map/cities-map.jsx';
import CitiesList from '../cities-list/cities-list.jsx';

import {mockOffers} from '../../mocks/offers';

class App extends React.PureComponent {

  _setAvailableCityFromOffers(offers) {
    const list = offers.map((city) => city.name);
    const availableCities = Array.from(new Set(list));

    this.setState({availableCities});
    this.props.changeCity(availableCities[0]);
  }

  constructor(props) {
    super(props);

    this.state = {
      availableCities: []
    };
  }

  componentDidMount() {
    this.props.setOffers(mockOffers);
    this._setAvailableCityFromOffers(mockOffers);
  }

  render() {
    const {mapConfig, changeCity, city, offers} = this.props;
    const availableOffers = offers.filter((offer) => offer.name === city);
    const coordinates = availableOffers.map((offer) => offer.coordinates);

    return (
      <React.Fragment>
        <CitiesList
          cities={this.state.availableCities}
          changeCity={changeCity}
        />
        <div className="cities">
          <div className="cities__places-container container">
            <OffersList cards={availableOffers} city={city} />
            <div className="cities__right-section">
              <section className="cities__map map">
                <CitiesMap mapConfig={mapConfig} pins={coordinates} />
              </section>
            </div>
          </div>
        </div>
      </React.Fragment>
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
  mapConfig: PropTypes.shape({
    defaultCity: PropTypes.arrayOf(PropTypes.number).isRequired,
    zoom: PropTypes.number.isRequired,
    layer: PropTypes.string.isRequired,
    copyRight: PropTypes.string.isRequired
  }),
};


const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  city: state.city,
  offers: state.offers
});

const mapDispatchToProps = (dispatch) => ({
  setOffers: (offers) => dispatch(ActionCreator.setOffers(offers)),
  changeCity: (city) => dispatch(ActionCreator.changeCity(city))
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
