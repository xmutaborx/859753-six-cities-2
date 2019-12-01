import ActionType from './action-type';
import InitialState from './initial-state';

const reducer = (state = InitialState, action) => {
  switch (action.type) {
    case ActionType.loadOffers : return Object.assign({}, state, {
      offers: action.payload,
    });

    case ActionType.changeCity : return Object.assign({}, state, {
      city: action.payload,
    });

    case ActionType.Authorization : return Object.assign({}, state, {
      isAuthorizationRequired: action.payload,
    });

    case ActionType.saveUserData : return Object.assign({}, state, {
      userData: action.payload,
    });

    case ActionType.toggleFavorites : {
      state.offers.map((offer) => {
        if (offer.id === action.payload) {
          // eslint-disable-next-line camelcase
          offer.is_favorite = !offer.is_favorite;
          return offer;
        }
      });
    };

    default: return state;
  }
};

export default reducer;
