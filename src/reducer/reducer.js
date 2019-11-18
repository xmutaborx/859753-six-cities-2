const initialState = {
  city: ``,
  offers: [],
  availableCities: [],
};

const ActionCreator = {
  changeCity: (city) => ({
    type: actionsTypes.changeCity,
    payload: city
  }),

  setOffers: (offers) => ({
    type: actionsTypes.setOffers,
    payload: offers
  }),

  setAvailableCities: (cities) => ({
    type: actionsTypes.availableCities,
    payload: cities
  }),
};

const actionsTypes = {
  changeCity: `CHANGE_CITY`,
  setOffers: `SET_OFFERS`,
  availableCities: `AVAILABLE_CITIES`,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionsTypes.changeCity : return Object.assign({}, state, {
      city: action.payload,
    });

    case actionsTypes.setOffers : return Object.assign({}, state, {
      offers: action.payload,
    });

    case actionsTypes.availableCities : return Object.assign({}, state, {
      availableCities: action.payload,
    });

    default: return state;
  }
};

export {
  ActionCreator,
  reducer,
  actionsTypes
};
