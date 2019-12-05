import {createSelector} from 'reselect';
import {MAX_CITIES} from '../constants/constants';

const getOffers = (state) => state.offers;
const getCity = (state) => state.city;
const getSortType = (state) => state.sortType;
const getFavorites = (state) => state.favorites;

const getCityOffers = createSelector(
    [getOffers, getCity, getSortType],
    (offers, city, type) => {
      const availableOffers = offers.filter((item) => item.city.name === city);
      if (type === `lowToHigh`) {
        return availableOffers.sort((prev, next) => prev.price - next.price);
      } else if (type === `highToLow`) {
        return availableOffers.sort((prev, next) => next.price - prev.price);
      } else if (type === `rated`) {
        return availableOffers.sort((prev, next) => next.rating - prev.rating);
      }
      return availableOffers;
    }
);

const getCitiesList = createSelector(
    getOffers,
    (offers) => {
      const cities = new Set(offers.map((offer) => offer.city.name));
      return [...cities].slice(0, MAX_CITIES);
    }
);

const getFavoritesCitiesList = createSelector(
    getFavorites,
    (offers) => {
      const cities = new Set(offers.map((offer) => offer.city.name));
      return [...cities].slice(0, MAX_CITIES);
    }
);

export {getCityOffers, getCitiesList, getSortType, getFavoritesCitiesList};
