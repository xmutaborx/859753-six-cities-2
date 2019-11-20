import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ActionCreator} from '../../reducer/reducer';

import OffersList from '../offer-list/offer-list.jsx';
import CitiesMap from '../cities-map/cities-map.jsx';
import CitiesList from '../cities-list/cities-list.jsx';

const MAX_CITY = 6;

class App extends PureComponent {

  // функцию вызываю в CDU т.к. this.props.offers приходит с API и все завязанно на нём
  _initialOffers() {
    // получаем список всех городов
    const list = this.props.offers.map((offer) => offer.city.name);
    // формируем уникальный список без повторений
    const availableCities = Array.from(new Set(list));
    // устанавливаем первый город по дефолту в initialState City
    this.props.changeCity(availableCities[0]);
    // устанавливаем уникальный список городов в initialState availableCities
    this.props.setAvailableCities(availableCities);

    // ------------------------------------------//

    // Я хотел бы на этом моменте передавать не availableSities[0], а this.props.city из initialState
    // чтобы setAvailableOffers был завязан на this.props.city
    // Но в данный момент this.props.city = ``, хоть я выше его обновляю. Асинхронность, все дела
    // Если же я оставлю как есть, тогда мне потребуется новая функция
    // changeOffers - которую я ниже закомментировал
    // и её мне надо передавать в CitiesList в метод changeCity, чтобы она принимала тот
    // город, на который кликнули и исходя из этого фильтровала новый список предложений.
    // НО! тогда какой смысл вообще хранить в initialState поле активного города, если
    // список офферов перерисовывается только в зависимости от клика в списке городов.
    //
    // Идея в том, что не важно каким образом я сменил город, важно что city в initialState поменялся
    // и тогда автоматически должно поменяться поле availableOffers
    // Как правильно это реализовать?
    //   ||
    //   \/

    const availableOffers = this.filterOffers(this.props.offers, availableCities[0]);
    this.props.setAvailableOffers(availableOffers);
  }

  // changeOffers(city) {
  //   const newOffers = this.props.offers.filter((offer) => offer.city.name === city);
  //   this.props.setAvailableOffers(newOffers);
  // }

  filterOffers(offers, city) {
    return offers.filter((offer) => offer.city.name === city);
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
    const {mapConfig, changeCity, city} = this.props;

    return (
      <div className="page page--gray page--main">
        <main className="page__main page__main--index">
          <CitiesList
            cities={this.listOfCities()}
            changeCity={changeCity}
          />
          <div className="cities">
            <div className="cities__places-container container">
              <OffersList cards={this.props.availableOffers} city={city} />
              <div className="cities__right-section">
                <section className="cities__map map">
                  <CitiesMap mapConfig={mapConfig} pins={[[0, 0]]} />
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
  // offers: PropTypes.array,
  // city: PropTypes.string,
  // changeCity: PropTypes.func.isRequired,
  // setAvailableCities: PropTypes.func.isRequired,
  // availableCities: PropTypes.array.isRequired,
  // setAvailableOffers: PropTypes.func.isRequired,
  // // availableOffers: PropTypes.arrayOf(PropTypes.object),
  // mapConfig: PropTypes.shape({
  //   defaultCity: PropTypes.arrayOf(PropTypes.number).isRequired,
  //   zoom: PropTypes.number.isRequired,
  //   layer: PropTypes.string.isRequired,
  //   copyRight: PropTypes.string.isRequired
  // }),
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
