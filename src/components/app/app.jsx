import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ActionCreator, getAvailableOffers} from '../../reducer';

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
    // 1
    // Получаем список городов из всех предложений
    const availableCities = this._getCityFromOffers(this.props.offers);

    // Устанавливаем в initialState город по дефолту
    this.props.changeCity(availableCities[0]);

    // Записываю список доступных городов в стейт, чтобы передать компоненту "Список городов"
    this.setState({availableCities});
  }

  _getCityFromOffers(offers) {
    const list = offers.map((city) => city.name);
    return Array.from(new Set(list));
  }

  render() {
    const {mapConfig, changeCity, city} = this.props;

    const availableOffers = getAvailableOffers(this.props.offers, this.props.city);

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
  city: PropTypes.string.isRequired,
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
  offers: state.offers,
});

const mapDispatchToProps = (dispatch) => ({
  setOffers: (offers) => dispatch(ActionCreator.setOffers(offers)),
  changeCity: (city) => dispatch(ActionCreator.changeCity(city))
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
