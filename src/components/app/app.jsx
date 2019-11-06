import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getCityFromOffers, getAvailableOffers, ActionCreator} from '../../reducer';

import OffersList from '../offer-list/offer-list.jsx';
import CitiesMap from '../cities-map/cities-map.jsx';
import CitiesList from '../cities-list/cities-list.jsx';

import {offers} from '../../mocks/offers';

class App extends React.PureComponent {

  componentDidMount() {
    // Решил не импортить моки напрямую в стейт редакса, а закинуть в cDM
    // потому что подумал что это более логично, данные же с API будут приходить
    // и типа тут их надо получать и класть в редакс. Верно?
    this.props.getOffers(offers)

    // Установливаю первый город из списка по дефолту в state.city
    const city = getCityFromOffers(offers)
    this.props.changeCity(city[0])
  }

  render() {
    const {mapConfig, changeCity, city, offer} = this.props;

    // верно ли, что я в этом месте получаю список доступных городов и список офферов,
    // а далее закидываю их пропсами в нужные компоненты?
    // Что-то у меня сомнения =(

    // Получаю список доступных городов и передаю пропсом в компонент citiesList
    const availableCities = getCityFromOffers(offer);

    // Фильтрую предложения исходя из текущего города передаю в комп OffersList
    const availableOffers = getAvailableOffers(offer, city);

    // Первый раз пропс offer получаенный из redux state пустой, и только на втором круге
    // он заполняется. Не пойму почему в компонент CitiesMap не приходит заполненный массив
    // offer после его обновления. (слетели все маркеры)
    console.log(offer, 'render')

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
