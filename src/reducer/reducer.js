import api from '../api';

const initialState = {
  city: ``,
  offers: [],
  availableCities: [],
  availableOffers: [],
};

const Operation = {
  loadOffers: () => (dispatch) => {
    return api.get(`/hotels`)
      .then((response) => {
        dispatch(ActionCreator.loadOffers(response.data));
      });
  }
};

const ActionCreator = {
  changeCity: (city) => ({
    type: actionType.changeCity,
    payload: city
  }),

  setAvailableCities: (cities) => ({
    type: actionType.availableCities,
    payload: cities
  }),

  setAvailableOffers: (offers) => ({
    type: actionType.availableOffers,
    payload: offers
  }),

  loadOffers: (offers) => ({
    type: actionType.loadOffers,
    payload: offers
  }),
};

const actionType = {
  loadOffers: `LOAD_OFFERS`,
  changeCity: `CHANGE_CITY`,
  availableCities: `AVAILABLE_CITIES`,
  availableOffers: `AVAILABLE_OFFERS`
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.loadOffers : return Object.assign({}, state, {
      offers: action.payload,
    });

    case actionType.changeCity : return Object.assign({}, state, {
      city: action.payload,
    });

    case actionType.availableCities : return Object.assign({}, state, {
      availableCities: action.payload,
    });

    case actionType.availableOffers : return Object.assign({}, state, {
      availableOffers: action.payload,
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
