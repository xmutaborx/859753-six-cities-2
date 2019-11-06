import {offers} from './mocks/offers';

const initialState = {
  city: '',
  offer: offers
};

const ActionCreator = {
  changeCity: (city) => ({
    type: `CHANGE_CITY`,
    payload: city
  }),

  getOffers: (offer) => ({
    type: `GET_OFFERS`,
    payload: offer
  }),

}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `CHANGE_CITY` : return Object.assign({}, state, {
      city: action.payload,
    });

    case `GET_OFFERS` : return Object.assign({}, state, {
      offer: action.payload,
    });

    default: return state
  }
}

const getCityFromOffers = (offers) => {
  const list = offers.map((city) => city.name);
  return Array.from(new Set(list));
}

const getAvailableOffers = (offers, city) => {
  return offers.filter((offer) => offer.name === city)
}

export {
  ActionCreator,
  reducer,
  getCityFromOffers,
  getAvailableOffers
}