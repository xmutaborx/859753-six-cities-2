import {mockOffers} from './mocks/offers';

const initialState = {
  city: ``,
  offers: mockOffers,
  availableOffers: []
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

  changeOffers: (offers, city) => {
    const availableOffers = offers.filter((offer) => offer.name === city);

    return {
      type: `CHANGE_OFFERS`,
      payload: availableOffers,
    };
  },

};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `CHANGE_CITY` : return Object.assign({}, state, {
      city: action.payload,
    });

    case `SET_OFFERS` : return Object.assign({}, state, {
      offers: action.payload,
    });

    case `CHANGE_OFFERS` : return Object.assign({}, state, {
      availableOffers: action.payload,
    });

    default: return state;
  }
};

export {
  ActionCreator,
  reducer
};
