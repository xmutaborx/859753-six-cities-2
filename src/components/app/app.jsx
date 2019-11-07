import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ActionCreator} from '../../reducer';

import OffersList from '../offer-list/offer-list.jsx';
import CitiesMap from '../cities-map/cities-map.jsx';
import CitiesList from '../cities-list/cities-list.jsx';

import {mockOffers} from '../../mocks/offers';

class App extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      availableCities: []
    };
  }

  componentDidMount() {
    // моковые данные записал в initialState (типа API)
    this.props.setOffers(mockOffers);
    // установил дефолтный city в initialState, установил массив названий городов в state App
    this._setAvailableCityFromOffers(mockOffers);
  }


  _setAvailableCityFromOffers(offers) {
    // получаем массив названий всех городов
    const list = offers.map((city) => city.name);
    const availableCities = Array.from(new Set(list));

    // записываем все города в стейт App, чтобы передать пропсом в cities-list
    this.setState({availableCities});

    // ставим дефолтный город в initialState city
    this.props.changeCity(availableCities[0]);

    // Фильтрую офферы исходя из выбранного города
    // this.props.filterOffers(offers, availableCities[0]);

  }

  render() {
    const {mapConfig, changeCity, city, offers, availableOffers} = this.props;

    return (
      <React.Fragment>
        <CitiesList
          cities={this.state.availableCities}
          changeCity={changeCity}
        />
        <div className="cities">
          <div className="cities__places-container container">
            <OffersList cards={offers} city={city} />
            <div className="cities__right-section">
              <CitiesMap mapConfig={mapConfig} offers={offers}/>
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
  availableOffers: PropTypes.array,
  changeCity: PropTypes.func.isRequired,
  setOffers: PropTypes.func.isRequired,
  filterOffers: PropTypes.func.isRequired,
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
  filterOffers: (offers, city) => dispatch(ActionCreator.filterOffers(offers, city)),
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
