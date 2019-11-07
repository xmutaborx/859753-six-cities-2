import {mockOffers} from './mocks/offers';

const initialState = {
  city: ``,
  offers: mockOffers
};

const ActionCreator = {
  changeCity: (city) => ({
    type: `CHANGE_CITY`,
    payload: city
  }),

  setOffers: (offers) => ({
    type: `SET_OFFERS`,
    payload: offers
  }),

};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `CHANGE_CITY` : return Object.assign({}, state, {
      city: action.payload,
    });

    case `SET_OFFERS` : return Object.assign({}, state, {
      offers: action.payload,
    });

    default: return state;
  }
};

const getAvailableOffers = (offers, city) => {
  return offers.filter((offer) => offer.name === city);
};

export {
  ActionCreator,
  reducer,
  getAvailableOffers
};
