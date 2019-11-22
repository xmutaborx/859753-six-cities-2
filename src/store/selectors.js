import {createSelector} from 'reselect';

const getOffers = (state) => state.offers;
const getCity = (state) => state.city;

const getCityOffers = createSelector(
    [getOffers, getCity],
    (offers, city) => offers.filter((item) => item.city.name === city)
);

const getSixCities = createSelector(
    getOffers,
    (offers) => {
      const CITIES_COUNT = 6;
      const cities = new Set(offers.map((offer) => offer.city.name));
      return [...cities].slice(0, CITIES_COUNT);
    }
);

export {getCityOffers, getSixCities};
