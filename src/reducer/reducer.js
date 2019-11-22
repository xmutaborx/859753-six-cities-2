const initialState = {
  city: ``,
  offers: [],
};

const Operation = {
  loadOffers: () => (dispatch, _, api) => {
    return api.get(`/hotels`)
      .then((response) => {
        dispatch(ActionCreator.loadOffers(response.data));
        const initialCity = response.data[0].city.name;
        dispatch(ActionCreator.changeCity(initialCity));
      });
  }
};

const ActionCreator = {
  changeCity: (city) => ({
    type: actionType.changeCity,
    payload: city
  }),

  loadOffers: (offers) => ({
    type: actionType.loadOffers,
    payload: offers
  }),
};

const actionType = {
  loadOffers: `LOAD_OFFERS`,
  changeCity: `CHANGE_CITY`,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.loadOffers : return Object.assign({}, state, {
      offers: action.payload,
    });

    case actionType.changeCity : return Object.assign({}, state, {
      city: action.payload,
    });

    default: return state;
  }
};

export {
  ActionCreator,
  reducer,
  actionType,
  Operation
};
