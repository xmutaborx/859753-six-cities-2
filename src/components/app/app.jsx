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
      availableCities: [],
      availableOffers: []
    };
  }

  // Хотел положить сюда функцию с фильтрацией, но она не срабатывала, т.к. this.props.city который она принимает
  // на момент вызова был еще пустой

  componentDidMount() {
    this._setAvailableCityFromOffers(this.props.offers);
  }

  // Положил в cDU. Правильно ли вообще? Такая структура может быть?
  // Просто я так понял что если фильтрацию выносить в экшены, значит и стейт нужно хранить было бы в редюсере
  // Мне показалось что проще это делать в аппе, плюс в задании был описан объект initialState в два поля:
  // "название города" и "Список предложений", городить еще не хотелось

  componentDidUpdate(prevProps) {
    if (prevProps.city !== this.props.city) {
      this._setAvailableOffersFromCity(this.props.offers, this.props.city);
    }
  }

  _setAvailableCityFromOffers(offers) {
    const list = offers.map((city) => city.name);
    const availableCities = Array.from(new Set(list));
    this.props.changeCity(availableCities[0]);
    this.setState({availableCities});
  }

  // Функцию по фильтрации доступных предложений в городе вынес сюда и записываю результат в стейт аппа
  _setAvailableOffersFromCity(offers, city) {
    const availableOffers = offers.filter((offer) => offer.name === city);
    this.setState({availableOffers});
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
            <OffersList cards={this.state.availableOffers} city={city} />
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

// Функция setOffers получается бесполезна сейчас, т.к. я замокал сразу offers
// Если сейчас в коде все верно, могу ли я сымитировать обращение к API
// чтобы задействовать эту ф-ию и положить данные в initialState?

const mapDispatchToProps = (dispatch) => ({
  setOffers: (offers) => dispatch(ActionCreator.setOffers(offers)),
  changeCity: (city) => dispatch(ActionCreator.changeCity(city))
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
