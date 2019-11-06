import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getCityFromOffers, getAvailableOffers, ActionCreator} from '../../reducer';

import OffersList from '../offer-list/offer-list.jsx';
import CitiesMap from '../cities-map/cities-map.jsx';
import CitiesList from '../cities-list/cities-list.jsx';

class App extends React.PureComponent {

  // Устанавливает в state.city первый город из списка
  componentDidMount() {
    const city = getCityFromOffers(this.props.offer)
    this.props.changeCity(city[0])
  }

  render() {
    const {mapConfig, changeCity, city, offer} = this.props;

    // Получаю список доступных городов и после передаю пропсом в компонент citiesList
    const availableCities = getCityFromOffers(offer);

    // Фильтрую предложения исходя из текущего города
    const availableOffers = getAvailableOffers(offer, city);

    return (
      <React.Fragment>
        <CitiesList
          cities={availableCities}
          changeCity={changeCity}
        />
        <div className="cities">
          <div className="cities__places-container container">
            <OffersList cards={availableOffers} />
            <div className="cities__right-section">
              <CitiesMap mapConfig={mapConfig} offers={offer}/>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}


App.propTypes = {
  // offers: PropTypes.arrayOf(PropTypes.shape({
  //   id: PropTypes.number.isRequired,
  //   title: PropTypes.string.isRequired,
  //   price: PropTypes.number.isRequired,
  //   type: PropTypes.string.isRequired,
  //   premium: PropTypes.bool.isRequired,
  //   img: PropTypes.string.isRequired,
  //   rating: PropTypes.number.isRequired,
  //   coordinates: PropTypes.arrayOf(PropTypes.number).isRequired,
  // })),
  mapConfig: PropTypes.shape({
    defaultCity: PropTypes.arrayOf(PropTypes.number).isRequired,
    zoom: PropTypes.number.isRequired,
    layer: PropTypes.string.isRequired,
    copyRight: PropTypes.string.isRequired
  }),
};


const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  city: state.city,
  offer: state.offer,
});

const mapDispatchToProps = (dispatch) => ({
  getOffers: (offer) => dispatch(ActionCreator.getOffers(offer)),
  changeCity: (city) => dispatch(ActionCreator.changeCity(city))
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
