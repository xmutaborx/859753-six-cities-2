import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ActionCreator} from '../../reducer';

import OffersList from '../offer-list/offer-list.jsx';
import CitiesMap from '../cities-map/cities-map.jsx';
import CitiesList from '../cities-list/cities-list.jsx';

class App extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      availableCities: []
    };
  }

  componentDidMount() {
    this._setAvailableCityFromOffers(this.props.offers);
  }

  _setAvailableCityFromOffers(offers) {
    const list = offers.map((city) => city.name);
    const availableCities = Array.from(new Set(list));
    this.props.changeCity(availableCities[0]);
    this.props.changeOffers(offers, availableCities[0]);

    this.setState({availableCities});
  }

  render() {
    const {mapConfig, changeCity, city} = this.props;

    return (
      <React.Fragment>
        <CitiesList
          cities={this.state.availableCities}
          changeCity={changeCity}
        />
        <div className="cities">
          <div className="cities__places-container container">
            <OffersList cards={this.props.availableOffers} city={city} />
            <div className="cities__right-section">
              <CitiesMap mapConfig={mapConfig} offers={this.props.offers}/>
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
  availableOffers: PropTypes.array.isRequired,
  city: PropTypes.string.isRequired,
  changeCity: PropTypes.func.isRequired,
  setOffers: PropTypes.func.isRequired,
  changeOffers: PropTypes.func.isRequired,
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
  availableOffers: state.availableOffers
});

const mapDispatchToProps = (dispatch) => ({
  setOffers: (offers) => dispatch(ActionCreator.setOffers(offers)),
  changeCity: (city) => dispatch(ActionCreator.changeCity(city)),
  changeOffers: (offers, city) => dispatch(ActionCreator.changeOffers(offers, city)),
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
