import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import ActionCreator from '../../store/action-creator';
import {getCityOffers, getCitiesList} from '../../store/selectors';

import CitiesList from '../cities-list/cities-list.jsx';
import TypesSort from '../types-sort/types-sort.jsx';
import OffersList from '../offer-list/offer-list.jsx';
import CitiesMap from '../cities-map/cities-map.jsx';


class App extends PureComponent {
  listOfPins() {
    return this.props.availableOffers.map((offer) => [offer.location.latitude, offer.location.longitude]);
  }

  render() {
    const {mapConfig, city, availableOffers, availableCities, changeCity} = this.props;

    return (
      <div className="page page--gray page--main">
        <main className="page__main page__main--index">
          <CitiesList
            cities={availableCities}
            onChangeCity={changeCity}
          />
          <div className="cities">
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{availableOffers.length} places to stay in {city}</b>
                <TypesSort />
                <OffersList offers={availableOffers} />
              </section>
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
  offers: PropTypes.arrayOf(PropTypes.object).isRequired,
  city: PropTypes.string.isRequired,
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
  availableCities: getCitiesList(state),
  availableOffers: getCityOffers(state),
});

const mapDispatchToProps = (dispatch) => ({
  changeCity: (city) => dispatch(ActionCreator.changeCity(city)),
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
