const initialState = {
  city: ``,
  offers: []
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
};

const actionsTypes = {
  changeCity: `CHANGE_CITY`,
  setOffers: `SET_OFFERS`
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionsTypes.changeCity : return Object.assign({}, state, {
      city: action.payload,
    });

    case actionsTypes.setOffers : return Object.assign({}, state, {
      offers: action.payload,
    });

    default: return state;
  }
};

export {
  ActionCreator,
  reducer,
  actionsTypes
};
