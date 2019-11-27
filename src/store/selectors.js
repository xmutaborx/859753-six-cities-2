import {createSelector} from 'reselect';

const MAX_CITIES = 6;

const getOffers = (state) => state.offers;
const getCity = (state) => state.city;

const getCityOffers = createSelector(
    [getOffers, getCity],
    (offers, city) => offers.filter((item) => item.city.name === city)
);

const getCitiesList = createSelector(
    getOffers,
    (offers) => {
      const cities = new Set(offers.map((offer) => offer.city.name));
      return [...cities].slice(0, MAX_CITIES);
    }
);

export {getCityOffers, getCitiesList};
